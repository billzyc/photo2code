from app import app


@app.route("/")
def index():
    return "Welcome to photo to code!"
