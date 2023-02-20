# Module Imports
import mariadb
import sys
import json

from flask_sqlalchemy import SQLAlchemy
from flask import g, app, Flask

password = None
with open('./db_password.txt','r') as file:
    password = file.read()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:'+password+'@localhost/hotel?autocommit=true'
app.config['SQLALCHEMY_POOL_RECYCLE'] = 3600
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


def get_db():
    if 'db' not in g:
        g.db = db.create_engine(app.config['SQLALCHEMY_DATABASE_URI']).connect()
    return g.db

@app.teardown_appcontext
def close_db(error):
    db = g.pop('db', None)
    if db is not None:
        db.close()

# Get Cursor
# cur = conn.connection.cursor(dictionary=True)

def guard(fn):
    print(0)
    def wrapper(*args, **kwargs):
        try:
            print(4)
            return fn(*args, **kwargs)
        except mariadb.Error as e:
            print(f"Error: {e}")
            return []
    print(5)
    return wrapper
    

@guard
def createUser(username, password, firstname, lastname, userType = "customer"):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute(
        """
            INSERT INTO users (username, password, firstname, lastname, type)
            VALUES (%s, AES_ENCRYPT(%s, %s), %s, %s, %s);
        """,
        [username, username, password, firstname, lastname, userType]
    )
    conn.commit()
    cur.close()

    return True

@guard
def loginUser(username, password):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute(
        """
            SELECT users.id, users.username, users.firstname, users.lastname, users.type
            FROM users
            WHERE users.username=%s
                AND users.password=AES_ENCRYPT(users.username, %s);
        """,
        [username, password]
    );
    
    return cur.fetchone()

@guard
def getUser(sessionToken):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute(
        """
            SELECT users.id, users.username, users.firstname, users.lastname, users.type
            FROM users
            INNER JOIN session_tokens
                ON session_tokens.user = users.id
            WHERE session_tokens.token = LOWER(%s);
        """,
        [sessionToken]
    );
    
    return cur.fetchone()

@guard
def getRooms():
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        SELECT
            rooms.id,
            rooms.name,
            rooms.price,
            rooms.description,
            rooms.pictures,
            (
                SELECT
                    JSON_ARRAYAGG(JSON_ARRAY(appointments.start, appointments.end))
                FROM
                    appointments
                WHERE
                    appointments.end >= CURDATE() AND
                    appointments.room = rooms.id
            ) AS appointments
        FROM
            rooms
        GROUP BY
            rooms.id;
    """)
    
    return cur.fetchall()

@guard
def getRooms():
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        WITH overlapping_appointments AS (
            SELECT
                room, COUNT(*) AS count
            FROM
                appointments
            WHERE
                appointments.start <= CURDATE() AND
                appointments.end >= CURDATE()
        )
        SELECT
            rooms.id,
            rooms.name,
            rooms.price,
            rooms.description,
            rooms.pictures,
            (
                SELECT
                    JSON_ARRAYAGG(JSON_ARRAY(appointments.start, appointments.end))
                FROM
                    appointments
                WHERE
                    appointments.end >= CURDATE() AND
                    appointments.room = rooms.id
            ) AS appointments,
            rooms.count,
            rooms.count - COALESCE(overlapping_appointments.count, 0) AS available
        FROM
            rooms
        LEFT JOIN
            overlapping_appointments ON
                overlapping_appointments.room = rooms.id
        GROUP BY
            rooms.id;
    """)
    
    return cur.fetchall()

@guard
def getRoomsSorted(column, isAscending):
    if not column in ['name', 'price', 'available']:
        return []
    
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        SELECT *
        FROM (
                WITH overlapping_appointments AS (
                    SELECT
                        room, COUNT(*) AS count
                    FROM
                        appointments
                    WHERE
                        appointments.start <= CURDATE() AND
                        appointments.end >= CURDATE()
                )
                SELECT
                    rooms.id,
                    rooms.name,
                    rooms.price,
                    rooms.description,
                    rooms.pictures,
                    (
                        SELECT
                            JSON_ARRAYAGG(JSON_ARRAY(appointments.start, appointments.end))
                        FROM
                            appointments
                        WHERE
                            appointments.end >= CURDATE() AND
                            appointments.room = rooms.id
                    ) AS appointments,
                    rooms.count,
                    rooms.count - COALESCE(overlapping_appointments.count, 0) AS available
                FROM
                    rooms
                LEFT JOIN
                    overlapping_appointments ON
                        overlapping_appointments.room = rooms.id
                GROUP BY
                    rooms.id
            ) AS rooms
        ORDER BY %s %s;
    """, [column, "ASC" if isAscending else "DESC"])
    
    return cur.fetchall()

@guard
def getRoomsAvailable(startDate, endDate):
    
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        WITH overlapping_appointments AS (
            SELECT
                room, COUNT(*) AS count
            FROM
                appointments
            WHERE
                appointments.start <= STR_TO_DATE(%s, '%Y-%m-%d') AND
                appointments.end >= STR_TO_DATE(%s, '%Y-%m-%d')
        )
        SELECT
            rooms.id,
            rooms.name,
            rooms.price,
            rooms.description,
            (
                SELECT
                    JSON_ARRAYAGG(url)
                FROM
                    room_images
                WHERE
                    room_images.room = rooms.id
            ) AS pictures,
            (
                SELECT
                    JSON_ARRAYAGG(JSON_ARRAY(appointments.start, appointments.end))
                FROM
                    appointments
                WHERE
                    appointments.end >= CURDATE() AND
                    appointments.room = rooms.id
            ) AS appointments,
            rooms.count,
            rooms.count - COALESCE(overlapping_appointments.count, 0) AS available
        FROM
            rooms
        LEFT JOIN
            overlapping_appointments ON
                overlapping_appointments.room = rooms.id
        GROUP BY
            rooms.id;
    """, [endDate, startDate])
    
    return cur.fetchall()

@guard
def getAppointments(room):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        SELECT
            appointments.id AS id,
            appointments.start AS start,
            appointments.end AS end,
            CONCAT(users.firstname, " ", users.lastname) AS user,
            users.id AS userID
        FROM
            appointments
        LEFT JOIN users
            ON users.id = appointments.user
        WHERE
            appointments.end >= CURDATE() AND
            appointments.room = %s
    """, [room])
    
    return cur.fetchall()

@guard
def getMyAppointments(userID):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        SELECT
            appointments.id AS id,
            appointments.start AS start,
            appointments.end AS end
        FROM
            appointments
        LEFT JOIN users
            ON users.id = appointments.user
        WHERE
            appointments.user = %s
    """, [userID])
    
    return cur.fetchall()

@guard
def checkAppointments(room, startDate, endDate):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        SELECT
            COUNT(*) AS overlap
        FROM
            appointments
        WHERE
            appointments.room = %s AND
            STR_TO_DATE(%s, '%Y-%m-%d') <= appointments.end AND
            STR_TO_DATE(%s, '%Y-%m-%d') >= appointments.start 
    """, [room, startDate, endDate])
    
    return cur.fetchone()['overlap'] == 0

@guard
def makeAppointment(user, room, startDate, endDate):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute("""
        INSERT INTO appointments (room, start, end, user)
        VALUES (
            %s,
            STR_TO_DATE(%s, '%Y-%m-%d'),
            STR_TO_DATE(%s, '%Y-%m-%d'),
            %s
        );
    """, [room, startDate, endDate, user])
    
    conn.commit()
    cur.close()

    return True

@guard
def updateRoom(roomId, name, price, count, description, pictures):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)

    print(name, price, count, description, pictures);
    
    cur.execute("""
        UPDATE rooms
        SET name=%s, price=%s, count=%s, description=%s, pictures=%s
        WHERE id=%s;
    """, [name, price, count, description, json.dumps(pictures), roomId])
    
    conn.commit()
    cur.close()

    return True

@guard
def getSessionToken(username):
    conn = get_db()
    cur = conn.connection.cursor(dictionary=True)
    
    cur.execute(
        """
            SELECT token
            FROM session_tokens
            INNER JOIN users
                ON users.id = session_tokens.user
            WHERE users.username=%s;
        """,
        [username]
    );
    
    sessionToken = cur.fetchone()

    if sessionToken == None:
        conn = get_db()
        cur = conn.connection.cursor(dictionary=True)
        
        cur.execute(
            """
                INSERT INTO session_tokens (user, token)
                VALUES (
                    (
                        SELECT id
                        FROM users
                        WHERE users.username = %s
                    ),
                    LOWER(
                        CONCAT(
                            LEFT(MD5(RAND()), 32),
                            HEX(UNIX_TIMESTAMP(NOW()))
                        )
                    )
                )
                RETURNING token;
            """,
            [username]
        );
        conn.commit()
        cur.close()
    
        sessionToken = cur.fetchone()

    return sessionToken["token"]