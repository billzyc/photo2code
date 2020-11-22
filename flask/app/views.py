from app import db, app
from app.models import CodeFile, User
from flask import Flask, jsonify, request, render_template, redirect, send_file
import tempfile
from io import BytesIO


@app.route("/")
def index():
    return "Welcome to photo to code!"


@app.route("/upload-image", methods=["GET", "POST"])
def upload_image():
    if request.method == "POST":
        if request.files:
            fileName = request.values["name"]
            image = request.files["image"]
            extension = request.values["extension"]
            newFile = CodeFile(
                title=f"{fileName}.{extension}",
                content="Sample text here",
                language=extension,
            )
            db.session.add(newFile)
            db.session.commit()
            file_data = CodeFile.query.filter_by(id=1).first()
            return send_file(
                BytesIO(bytes(file_data.content, "utf-8")),
                attachment_filename=f"{fileName}.{extension}",
                as_attachment=True,
            )
    return "Upload an image!"

