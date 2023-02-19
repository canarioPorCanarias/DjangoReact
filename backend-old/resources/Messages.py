from flask_restful import Resource, reqparse
from db import Database
import traceback
db = Database()


class set_order(Resource):
    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('name', type=str, required=True)
            parser.add_argument('email', type=str, required=True)
            parser.add_argument('text', type=str, required=True)

            args = parser.parse_args(strict=False)

            name = args['name']
            email = args['email']
            text = args['text'][:300]

            query.execute("")
  
            return {'success': 'correct'}, 200

        except:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()
