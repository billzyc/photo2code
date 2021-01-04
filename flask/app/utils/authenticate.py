from app import app
from flask import jsonify, request
from functools import wraps
import jwt


def getProfileFromToken(webRequest):
    token = webRequest.headers.get('Jwt')

    if not token:
        return None

    try:
        return jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])

    except:
        return None


def authenticateToken(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        user_info = getProfileFromToken(request)

        if not user_info:
            return jsonify({'message': 'Missing or Invalid token'}), 403

        return func(*args, **kwargs)
    return wrapped
