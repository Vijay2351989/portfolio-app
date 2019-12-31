from flask import Flask, escape, request,  send_file
from flask_cors import CORS
import csv
from flask_mongoengine import MongoEngine, mongoengine
app = Flask(__name__)
# app.config['MONGODB_DB'] = ''
# app.config['MONGODB_HOST'] = 'ds041593.mlab.com'
# app.config['MONGODB_PORT'] = 41593
# app.config['MONGODB_USERNAME'] = 'vijaybhatt'
# app.config['MONGODB_PASSWORD'] = 'shagird12'
app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://vijaybhatt:shagird12@ds041593.mlab.com:41593/contacts_list?retryWrites=false'
}
CORS(app)
db = MongoEngine(app)
print(__name__)


@app.route('/')
def serve_index():
    return send_file('static/index.html')


@app.route('/home')
def hello_world_home():
    return 'Hello from server'


@app.route('/portfolio/<path:subpath>')
def serve_static(subpath):
    return send_file(f'static/{subpath}')


# def write_data_to_file(data):
#     with open('contacts.csv', 'a', newline='') as csvfile:
#         fieldnames = ['email', 'subject', 'message']
#         writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

#         # writer.writeheader()
#         writer.writerow(
#             {'email': data['email'], 'subject': data['subject'], 'message': data['message']})

class Contact(db.Document):
    email = mongoengine.StringField(required=True)
    subject = mongoengine.StringField()
    message = mongoengine.StringField()


def persist_data_to_db(data):
    contact = Contact(
        email=data['email'], subject=data['subject'], message=data['message'])
    contact.save()


@app.route('/submitContact', methods=['POST'])
def sendContact():
    data = request.json
    persist_data_to_db(data)
    return {
        'success': True,
        'message': 'Form submitted successfully'
    }


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)