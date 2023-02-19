from flask_restful import Resource
from flask import send_file

class Logo(Resource):
    def get(self):
        return send_file("assets/images/logo.png")
