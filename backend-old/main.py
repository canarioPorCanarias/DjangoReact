import sys
sys.dont_write_bytecode = True
from resources.Orders import set_order, canceled_orders,payments
from resources.Product import get_product_info, search_product
from flask import Flask
from flask_restful import Api
#from flask_cors import CORS
from resources.Home import ContactForm, Get_items, Get_categories, Get_slug
from resources.Logo import Logo


# Importamos las funciones de nuestra API.


app = Flask(__name__)
# CORS(app)
api = Api(app)


route = '/api'


api.add_resource(ContactForm, route+'/contact-form')
api.add_resource(Get_slug, route+'/get_slug')
api.add_resource(get_product_info, route+'/get_product')
api.add_resource(Get_items, route+'/products')
api.add_resource(Get_categories, route+'/categories')
api.add_resource(set_order, route+'/orders')
api.add_resource(search_product, route+'/findItem')
api.add_resource(canceled_orders, route+'/canceled_orders')
api.add_resource(payments,route+'/history')
api.add_resource(Logo,route+'/logo')


if __name__ == '__main__':
    app.run(debug=True, port=3900, host="0.0.0.0")

    # # Para cuando ya no esté en desarrollo, ya en modo deploy.
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=3900)
