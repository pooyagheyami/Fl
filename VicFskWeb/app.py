# In the name of God

from flask import Flask, render_template, redirect, request , get_flashed_messages
from jinja2 import TemplateNotFound
import os
import parsetxt

Engmenu = []
Tmlmenu = []
# configure app
app = Flask(__name__)

@app.route("/")
def index():
    title = 'Victorian Tamil'
    author , title , contxt = testi()

    try:
        return render_template("index.html", mytitle=title , txtsi=[author,title,contxt])
    except TemplateNotFound:
        return 'I Do Not Find This page' #abort(404)

@app.route("/#Tml")
def index2():
    return "Hi"

@app.route("/#Testimoni")
def testi():
    mytxt = parsetxt.Txtparse()
    mytxt.opentxt("./static/txt/1.txt")
    mytxt.readtxt()
    author = mytxt.author
    title = mytxt.title
    contxt = mytxt.contxt
    #get_flashed_messages(author)
    #return render_template("TstWeb.html", author = author)
    return author , title , contxt


@app.route("/Dnlod")
def donload():

    return render_template("./Dnlod/ProdDnlod.html")




if __name__ == '__main__':
    app.run(debug=True)