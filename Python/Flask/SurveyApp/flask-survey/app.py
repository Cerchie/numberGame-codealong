from flask import Flask, render_template, request, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey


app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# responses = [] for doing it without cookies

RESPONSES_KEY = "responses"

@app.route("/")
def return_opening_page():

    return render_template('opening_page.html', survey=survey)


@app.route("/begin", methods=["POST"])
def start_survey():
    """Clear the session of responses/cookies."""
    session[RESPONSES_KEY] = []
    return redirect("/question_page/0")


@app.route("/answer", methods=["POST"])
def handle_question():
    """Save response and redirect to next question."""
    choice = request.form['answer']
    
    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY] = responses
    if (len(responses) == len(survey.questions)):
        # They've answered all the questions! Thank them.
        return redirect("/complete")

    else:
        return redirect(f"/question_page/{len(responses)}")

@app.route("/session_empty")
def empty_session():
    session["responses"] = []
    return redirect("/begin")
@app.route("/complete")
def complete():
    return render_template('complete.html')

@app.route("/question_page/<int:qid>")
def return_questions_page(qid):
    responses = session.get(RESPONSES_KEY)
    if (len(responses) != qid):
        flash("whoops, that question does not exist")
        return redirect(f"/question_page/{len(responses)}")
    else:
        question = survey.questions[qid]
        return render_template('question_page.html', survey=survey,  question_num=qid, question=question)