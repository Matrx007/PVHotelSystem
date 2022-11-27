from flask import Flask, render_template, request
from flask_cors import CORS
import os
import random
from test_data import ROOMS

FLDR = os.path.abspath('./frontend/build')

app = Flask(
    __name__,
    template_folder='frontend/build',
    static_folder=FLDR,
    static_url_path=""
)

CORS(app)

@app.route('/', defaults={'path': ''})
@app.route("/<string:path>")
@app.route('/<path:path>')
def catch_all(path):
    print("sending index.html");
    print(FLDR);
    return app.send_static_file("index.html")


@app.route('/api/rooms')
def get_rooms():

    SHUFFLED_ROOMS = ROOMS.copy()
    random.shuffle(SHUFFLED_ROOMS)
    return SHUFFLED_ROOMS

@app.route('/api/rooms-sorted')
def get_rooms_sorted():
    print("column:", request.args.get('column') or 'price')
    print("isAscending:", request.args.get('isAscending') == 'true' or False)

    SHUFFLED_ROOMS = ROOMS.copy()
    random.shuffle(SHUFFLED_ROOMS)
    return SHUFFLED_ROOMS

@app.route('/api/rooms-available')
def get_rooms_sorted():
    print("column:", request.args.get('column') or 'price')
    print("isAscending:", request.args.get('isAscending') == 'true' or False)

    SHUFFLED_ROOMS = ROOMS.copy()
    random.shuffle(SHUFFLED_ROOMS)
    return SHUFFLED_ROOMS

if __name__ == "__main__":
    app.run(
        host='127.0.0.1',
        port=4000
    )
