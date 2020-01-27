#In the name of God
from flask import Flask , redirect ,render_template , request
import csv
#configure app
app = Flask(__name__)

# Registered students
students = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/registrants")
def registrants():
    return render_template("registered.html", students=students)

@app.route("/register", methods=["POST"])
def register():
    name = request.form.get("name")
    dorm = request.form.get("dorm")
    if not name or not dorm:
        return "failure"
    students.append(f"{name} from {dorm}")
    file = open("registered.csv" , "a")
    writer = csv.writer(file)
    writer.writerow((request.form.get("name"),request.form.get("dorm")))
    file.close()
    return redirect("/registrants")

@app.route("/registered")
def registered():
    file = open("registered.csv", 'r')
    reader = csv.reader(file)
    students = list(reader)
    file.close()
    return render_template("registered.html", students=students)

if __name__ == '__main__':
    app.run(debug=True)