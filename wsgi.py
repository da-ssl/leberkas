from flask import Flask, render_template

app = Flask(__name__)

@app.route("/calculator")
def getCalcPage():
    return(render_template('calculator.html.jinja'))

@app.route("/")
def getHomePage():
    return(render_template('home.html.jinja'))

if __name__ == "__main__":
    Flask.run(app)