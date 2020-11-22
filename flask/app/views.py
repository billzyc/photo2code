from app import db, app
from app.models import *
from flask import request


@app.route("/")
def index():
    return "Welcome to photo to code!"

