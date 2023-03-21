from rest_framework.views import APIView
from .models import Orders, Payments, Returns
from django.http import JsonResponse
from django.db.models import Q
from ether_scan import API_KEY, URL_API_ETHER
from requests import get

# Create your views here.


class SetOrder(APIView):
    def post(self, requests):
        """
        Create order
        """
        cart = requests.POST.get('cart')
        price = requests.POST.get('price')
        ethAdress = requests.POST.get('ethAdress')
        hash_code = requests.POST.get('hash')
        text = requests.POST.get('text')
        order = Orders(cart=cart, price=price, ethAdress=ethAdress,
                       hash_num=hash_code, text=text)
        order.save()
        order_id = Orders.objects.filter(hash_code).values('id')
        payment = Payments(ammount=price, order_id=order_id)

        return JsonResponse({'success': True}, safe=False)

    def put(self, requests):
        """
        Get orders by users, order that are not canceled
        """

        ethAddr = requests.data.get('ethAddr')
        values = Orders.objects.filter(
            ~Q(status=Orders.Status.CANCELED), ethAddr=ethAddr).values()

        for i in values:
            if i['status'] == Orders.Status.PENDING:
                value = get(URL_API_ETHER.format(i[
                    'hash'], API_KEY)).json()
                if value['result']['isError'] == '0':
                    updated_order = Orders.objects.get(i['id'])
                    updated_order.status = Orders.Status.SUCCESS
                    updated_order.last_update_date.now()
                    i['status'] = "success"

        return JsonResponse(values, safe=False)

    def patch(self, requests):
        """
        Cancel Orders and return the money
        """
        id_order = requests.data.get('id')
        if id_order:
            order = Orders.objects.get(id)
            order.status = order.Status.CANCELED
            order.last_update_date = order.last_update_date.now()
            order.save(force_update=True)

            hash_code_return = transfer(float(order.price), order.ethAddress)
            Returns(ammount=Returns.ammount, order_id=id_order,
                    hash_code_return=hash_code_return)
