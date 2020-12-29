from app import app
from flask import jsonify, request
from functools import wraps
import jwt

def authenticateToken(func):
    @wraps(func)
    def wrapped(*args, **kwargs):
        token =  request.headers.get('Jwt')
        
        if not token:
            return jsonify({'message': 'Missing token'}), 403
        
        try:
            user_data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            print(user_data)

        except:
            return jsonify({'message': 'Invalid token'}), 403
        
        return func(*args, **kwargs)
    return wrapped