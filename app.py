from flask import *

print("Hello")

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("form.html")


@app.route("/process", methods=['POST', 'GET'])
def process():
    name = request.form['name']
    email = request.form['email']
    tel = request.form['tel']
    contribution = request.form['contribution']

    if not name:
        return jsonify({'error': 'Name are Missing'})

    elif not email:
        return jsonify({'error2': 'Email are Missing'})

    elif not tel:
        return jsonify({'error2': 'Telephone number is Missing'})

    elif not contribution:
        return jsonify({'error2': 'Contribution is Missing'})

    else:

        newName = name[:: - 1]
        # more l
        return jsonify({'name': newName})


app.run()
