from flask_restful import Resource, reqparse
from utilities import list_to_object
from db import Database
from flask import jsonify
from mail.MainEmail import send_message
# Conexión a la base de datos.
db = Database()


class ContactForm(Resource):
    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
             # Parseamos los parámetros del body.
            parser = reqparse.RequestParser()

            parser.add_argument('name', type=str, required=True)
            parser.add_argument('email', type=str, required=True)
            parser.add_argument('text', type=str, required=True)

            parser = parser.parse_args()

            # Damos un valor a los parámetros del body.
            name = parser['name']
            email = parser['email']
            text = parser['text'][:500]

            # Verificamos la longitud de los parámetros.
            if(len(name) <= 0 or len(email) <= 0 or len(text) <= 0):

                return {
                    'status': 'error',
                    'message': 'Los campos estan vacios'
                },500

            elif(len(name) > 50 or len(email) > 200 or len(text) > 500):

                return {
                    'status': 'error',
                    'message': 'Algunos campos se pasan de longitud'
                },500

            else:
                send_message(name,email)
                query.execute("INSERT INTO contactus (name, email, text) VALUES ( %s, %s, %s) ", (name, email, text,))

            
            return {'success':'message sended'},200

            
        except:
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()

       

class Get_items(Resource):

    def get(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            query.execute(
                "SELECT id,img,name,price,slug FROM products limit 200")
            value = query.fetchall()

            return jsonify(list_to_object(value))
        except:
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()


class Get_categories(Resource):
    def get(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            query.execute('SELECT * FROM categories')
            value = query.fetchall()
            return jsonify(value)
        except:
            return {'error', 'unkowkn'}, 500
        finally:
            query.close()
            conn.close()

    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('category', type=str,
                                help="need specify category")
            parser = parser.parse_args()
            value = parser['category']
            query.execute(
                'SELECT id from categories where categories = %s', (value,))
            result = query.fetchall()
            if(len(result) == 0):
                return {
                    'status': 'error',
                    'message': 'category Not found'
                }
            query.execute(
                'SELECT id,img,name,price,slug FROM products where category = %s limit 200', (value,))
            values = query.fetchall()

            return jsonify(list_to_object(values))
        except:
            return {'error ', 'unkonwn'}, 400
        finally:
            query.close()
            conn.close()


class Get_slug(Resource):
    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('p_id', type=str)
            args = parser.parse_args()

            query.execute(
                'select slug from products where id = %s', (args['p_id'],))
            values = query.fetchone()

            if(len(values) != 0):
                return jsonify({'slug': values[0]})
            else:
                return jsonify({'error': 'not found'}, 500)

        except:
            return {'error', 'unkonwn'}, 500

        finally:
            query.close()
            conn.close()
