from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    posts = db.relationship('CodeFile', backref='author', lazy=True)

    def __init__(self, email, first_name, last_name):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name

    def __repr__(self):
        return f'User id: {self.id} email:{self.email}'

    def get_map(self):
        return {
            'id': self.id,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
        }


class CodeFile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.utcnow)
    content = db.Column(db.Text, nullable=True)
    extension = db.Column(db.String(50), nullable=False)
    # image_file = db.Column(db.String(20), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def get_map(self):
        return {'id': self.id, 'title': self.title, 'date_posted': self.date_posted, 'extension': self.extension, 'user_id': self.user_id, 'content': self.content}
    
    def __repr__(self):
        return f'id: {self.id}, title: {self.title}, date_posted: {self.date_posted}, extension: {self.extension}, user_id: {self.user_id}, content: {self.content}'

    def __init__(self, title, content, extension, user_id):
        self.title = title
        self.content = content
        self.extension = extension
        self.user_id = user_id
