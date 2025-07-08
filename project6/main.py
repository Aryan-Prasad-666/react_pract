from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)

JWT_SECRET = os.getenv('JWT_SECRET', 'your-default-secret')

USER = {
    "username": "aryan",
    "password": "1234"
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == USER["username"] and password == USER["password"]:
        token = jwt.encode({
            "username": username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, JWT_SECRET, algorithm="HS256")
        return jsonify(token=token)

    return jsonify(message="Invalid credentials"), 401


from functools import wraps

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization')

        if not auth_header:
            return jsonify(message="Token missing"), 401

        try:
            token = auth_header.split(" ")[1]
            decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
            request.user = decoded
        except Exception as e:
            return jsonify(message="Token is invalid or expired", error=str(e)), 403

        return f(*args, **kwargs)
    return decorated


@app.route('/protected', methods=['GET'])
@token_required
def protected():
    return jsonify(message=f"Hello {request.user['username']}, you have access!")


if __name__ == '__main__':
    app.run(port=5000, debug=True)
