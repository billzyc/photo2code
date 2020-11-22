from app import db
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    # posts = db.relationship("CodeFile", backref="author", lazy=True)
    # password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User id: {id} email:{email}"

    def __init__(self, email):
        self.email = email


class CodeFile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    # image_file = db.Column(db.String(20), nullable=False)
    # code_file = db.Column(db.Text, nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

