from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# from flask_bcrypt import Bcrypt


app = Flask(__name__)
app.config.from_object("app.config.Config")
db = SQLAlchemy(app)

from app import views
