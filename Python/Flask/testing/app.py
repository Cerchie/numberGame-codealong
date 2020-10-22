from flask import Flask, request, render_template, redirect, session

app= Flask(__name__)
app.config('SECRET_KEY') = "abc123"

@app.route('/')
def index():
    """show homepage"""

    #keep a count of how many times page is visited

    return render_template("index.html")

@app.route 