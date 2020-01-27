# In the name of God

from flask import Flask, render_template, redirect, request
import os

Engmenu = []
Tmlmenu = []
# configure app
app = Flask(__name__)

@app.route("/")
def index():
    title = 'Victorian Tamil'
    return render_template("index.html", mytitle=title)

@app.route("/#Tml")
def index2():
    return "Hi"

if __name__ == '__main__':
    app.run(debug=True)