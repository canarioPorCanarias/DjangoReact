from flask_restful import Resource, reqparse
from db import Database
from flask import jsonify
from utilities import list_to_object
db = Database()


class get_product_info(Resource):
    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('slug_name', type=str)
            parser = parser.parse_args()
            slug = parser['slug_name']
            slug = "/"+slug
            query.execute("select * from products where slug = %s", (slug,))
            values = query.fetchone()
            keys = ['id', 'img', 'name', 'price', 'rating', 'slug', 'category']
            return jsonify(dict(zip(keys, values)))
        except:
            return {'error', 'unkonw'}, 500
        finally:
            query.close()
            conn.close()


class search_product(Resource):
    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('searchItem', type=str)
            parser = parser.parse_args()
            term = parser['searchItem']
            query.execute(
                "select name,slug from products where name LIKE '%{}%' limit 7".format(term))
            values = query.fetchall()
            return jsonify(list_to_object(values, ['name', 'slug']))
        except:
            return {'error', 'unkonw'}, 500
        finally:
            query.close()
            conn.close()

    def put(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('searchItem', type=str)
            parser = parser.parse_args()
            term = parser['searchItem']

            query.execute(
                "select id,img,name,price,slug  from products where name LIKE '%{}%' limit 20".format(term))
            values = query.fetchall()

            return jsonify(list_to_object(values))

        except:
            return {'error', 'unkonw'}, 500
        finally:
            query.close()
            conn.close()
