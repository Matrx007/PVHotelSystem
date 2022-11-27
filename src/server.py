from flask import Flask, render_template, request
from flask_cors import CORS


app = Flask(
    __name__,
    template_folder='templates',
    static_folder='static'
)

CORS(app)

@app.route("/")
def root():
    return 'At /'


if __name__ == "__main__":
    app.run(
        host='127.0.0.1',
        port=4000
    )
