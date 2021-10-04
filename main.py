from flask import Flask, render_template, request, url_for, redirect
import pymysql.cursors
app = Flask(__name__)

Con = pymysql.Connect(host="127.0.0.1", port=3307, user="", passwd="",db='')

cur = Con.cursor()
app.secret_key = "abdhghsb"

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/services")
def services():
    return render_template("services.html")


@app.route("/career", methods=["GET", "POST"])
def career():
    if request.method == "POST":
        firstname = request.form["firstname"]
        lastname = request.form["lastname"]
        email = request.form["email"]
        contact = request.form["contact"]
        position = request.form["position"]
        experience = request.form["experience"]
        date = request.form["date"]

        sql = "INSERT INTO career (firstname,lastname,email,contact,position,experience,date) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (firstname, lastname,email,contact,position, experience,date)
        cur.execute(sql,val)
        Con.commit()

    #     return redirect(url_for('career'))
    return render_template("career.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form['name']
        subject = request.form['Subject']
        email = request.form['email']
        phone = request.form['phone']
        address = request.form['address']
        call = request.form['call']
        message = request.form['message']

        sql = "INSERT INTO contactdetails (name, email, contact,subject,address,time,message) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (name,email,phone,subject,address,call,message)
        cur.execute(sql,val)
        Con.commit()
        return redirect(url_for('contact'))
    return render_template("contact.html")

@app.route("/ongoing-projects")
def projects():
    return render_template("onprojects.html")

@app.route("/completed-projects")
def complete():
    return render_template("completedprojects.html")


if __name__ == "__main__":
    app.run(debug=True)


    