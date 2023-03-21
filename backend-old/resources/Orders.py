from flask_restful import Resource, reqparse
from db import Database
import traceback
from flask import jsonify
from utilities import list_to_object
from requests import get
from ether_scan import *
import time
from web3Utils import transfer
db = Database()


class set_order(Resource):

    def post(self):
        """
        Create order
        """
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('cart', type=str, required=True)
            parser.add_argument('price', type=float, required=True)
            parser.add_argument('ethAdress', type=str, required=True)
            parser.add_argument('hash', type=str, required=True)
            parser.add_argument('text', type=str, required=True)
            args = parser.parse_args(strict=False)

            cart = args['cart']
            price = args['price']
            ethaddr = args['ethAdress']
            hash_code = args['hash']
            text = args['text']

            query.execute("INSERT INTO orders (cart, price, ethAddress, hash, text) VALUES (%s, %s, %s, %s, %s)",
                          (cart, price, ethaddr, hash_code, text))
            query.execute("SELECT * FROM orders WHERE hash = %s", (hash_code,))
            values = query.fetchone()
            query.execute(
                "INSERT INTO payments (ammount,order_id) VALUES (%s, %s)", (price, values[0],))
            return {'success': 'correct'}, 200

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()

    def put(self):
        """
        Get orders by users, order that are not canceled
        """
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('ethAddr')
            args = parser.parse_args()

            ethaddr = args['ethAddr']
            query.execute(
                "SELECT * FROM orders where ethAddress = %s and status <> 'canceled'", (ethaddr,))
            values = query.fetchall()
            values = list_to_object(values, keys=[
                                    "id", "cart", "price", "status", "ethAddress", "hash", "text", "date", "last_update_date"])
            print(values)
            for i in values:
                if i['status'] == 'pending':
                    value = get(url_api_ether.format(
                        i['hash'], API_KEY)).json()
                    if value['result']['isError'] == '0':
                        query.execute(
                            "UPDATE orders SET status = 'success', last_update_date = %s WHERE id = %s", (time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()), i['id'],))
                        i['status'] = "success"

            return jsonify(values)

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()

    def patch(self):
        """
        Cancel Orders and return the money
        """
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=str, required=True)

            args = parser.parse_args(strict=False)

            id_order = args['id']
            query.execute(
                "UPDATE orders SET status = 'canceled',last_update_date = %s  WHERE id = %s", (time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()), id_order,))
            query.execute(
                'select price,ethAddress from orders where id = %s', (id_order,))
            values = query.fetchone()
            price = values[0]
            address_client = values[1]
            hash_code_return = transfer(float(price), address_client)

            query.execute("INSERT INTO `returns` (`ammount`, `order_id`, `hash`) VALUES (%s, %s, %s)",
                          (price, id_order, hash_code_return))

            return {'success': 'correct'}, 200

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()


class canceled_orders(Resource):
    def post(self):
        """
        get the canceled orders
        """
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('ethAddr', type=str, required=True)

            args = parser.parse_args(strict=False)

            ethAddr = args['ethAddr']
            query.execute(
                "SELECT *  FROM orders WHERE `status` = 'canceled' and ethAddress = %s", (ethAddr,))
            values = query.fetchall()
            return jsonify(list_to_object(values, keys=[
                "id", "cart", "price", "status", "ethAddress", "hash", "text", "date", "last_update_date"]))

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()


class payments(Resource):
    """
    Get the payments
    """

    def post(self):
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('ethAddr', type=str, required=True)

            args = parser.parse_args(strict=False)

            ethAddr = args['ethAddr']
            query.execute(
                "SELECT payments.*, orders.hash,orders.status FROM `payments`,`orders` where orders.ethAddress = %s", (ethAddr,))
            values = query.fetchall()
            return jsonify(list_to_object(values, keys=[
                "id", "price", "date", "order_id", "hash", "status"]))

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()

    def patch(self):
        """
        Get the retunrns payments for canceled orders
        """
        try:
            conn = db.connection()
            query = conn.cursor(buffered=True)
            parser = reqparse.RequestParser()
            parser.add_argument('ethAddr', type=str, required=True)

            args = parser.parse_args(strict=False)

            ethAddr = args['ethAddr']
            query.execute(
                "SELECT `returns`.* , orders.ethAddress FROM `returns`,`orders` where orders.ethAddress = %s", (ethAddr,))
            values = query.fetchall()
            return jsonify(list_to_object(values, keys=[
                "id", "price", "date", "order_id", "hash", "ethAddress"]))

        except Exception:
            traceback.print_exc()
            return {'error': 'unkonwn'}, 500
        finally:
            query.close()
            conn.close()
