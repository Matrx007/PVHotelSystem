import faulthandler

faulthandler.enable()


from flask import Flask, render_template, request, abort, make_response, jsonify, app
from flask_cors import CORS
import os
import random
from test_data import ROOMS
import db
import json
from flask import Flask

FLDR = os.path.abspath('./frontend/build')

app = Flask(
    __name__,
    template_folder='frontend/build',
    static_folder=FLDR,
    static_url_path=""
)

cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
# TODO: More expensive on weekend


def auth():
    sessionToken = request.cookies.get('SESSION')

    if sessionToken:
        user = db.getUser(sessionToken)
        print("user:", user)
        return user
    else:
        print("no session token provided")
        return None

@app.route('/', defaults={'path': ''})
@app.route("/<string:path>")
@app.route('/<path:path>')
def catch_all(path):
    print("sending index.html");
    print(FLDR);
    return app.send_static_file("index.html")


@app.route('/api/rooms')
def get_rooms():
    return db.getRooms()

@app.route('/api/rooms-sorted')
def get_rooms_sorted():
    column = request.args.get('column') or 'price'
    isAscending = request.args.get('isAscending') == 'true' or False
    print("column:", column)
    print("isAscending:", isAscending)

    rooms = db.getRoomsSorted(column, isAscending)
    # print("found rooms:", rooms)
    return rooms

@app.route('/api/rooms-available')
def get_rooms_available():
    startDate = request.args.get('startDate')
    endDate = request.args.get('endDate')

    return db.getRoomsAvailable(startDate, endDate)

@app.route('/api/make-appointment', methods=['POST'])
def make_appointment():
    user = auth()
    if not user:
        abort(403)
        
    room = request.args.get('room')
    startDate = request.args.get('startDate')
    endDate = request.args.get('endDate')

    check = db.checkAppointments(room, startDate, endDate)
    print("check:", check)
    if not check:
        print("aborting:")
        abort(400)

    db.makeAppointment(user['id'], room, startDate, endDate)

    return {}

@app.route('/api/update', methods=['POST'])
def update():
    user = auth()
    if not user:
        abort(403)

    if not user['type'] == "admin":
        abort(403)

    print("update 1")

    room = request.args.get('room')

    print("update 2")

    data = request.get_json()

    print("update 3")

    name = data.get("name")
    price = data.get("price")
    count = data.get("count")
    description = data.get("description")
    pictures = data.get("pictures")

    print("update 4")

    db.updateRoom(room, name, price, count, description, pictures)

    return {}


@app.route('/api/user')
def user():
    user = auth()
    
    if not user:
        abort(404)

    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response = jsonify(user)

    return response

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return make_response("Missing required parameters", 400)

    if not db.loginUser(username, password):
        return make_response("Incorrect login details", 403)

    sessionToken = db.getSessionToken(username)
    user_data = db.getUser(sessionToken)

    response = jsonify(user_data)
    response.set_cookie('SESSION', sessionToken)
    return response

@app.route('/api/register', methods=['POST'])
def register():
    username = request.json["username"]
    password = request.json["password"]
    firstname = request.json["firstname"]
    lastname = request.json["lastname"]

    if db.createUser(username, password, firstname, lastname):
        sessionToken = db.getSessionToken(username)
        user_data = db.getUser(sessionToken)

        response = jsonify(user_data)
        response.set_cookie('SESSION', sessionToken)

        return response
    else:
        return abort(403)
    

if __name__ == "__main__":
    app.run(
        host='127.0.0.1',
        port=4000
    )
