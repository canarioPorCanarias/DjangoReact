from django.http import JsonResponse, HttpResponse
from .models import Products, Categories
from rest_framework.views import APIView

# Create your views here.


class ProductsList(APIView):
    def get(self, request):
        products_array = Products.objects.values()[0:200]
        return JsonResponse(list(products_array), safe=False)


class GetCategories(APIView):
    def get(self, request):
        categories_array = Categories.objects.values()
        print(list(categories_array))
        return JsonResponse(list(categories_array), safe=False)

    def post(self, request):
        category = request.POST.get('categories')
        if category:
            products_array = Products.objects.filter(
                category=category).values()[:50]
            return JsonResponse(list(products_array), safe=False)
        else:
            return JsonResponse({})


class GetSlug(APIView):
    def post(self, request):
        slug_id = request.POST.get('p_id')
        slug_item = Products.objects.get(name=slug_id)
        if slug_item:
            return JsonResponse(list(slug_item), safe=False)
        else:
            return JsonResponse({})


class GetProductInfo(APIView):
    def post(self, request):
        slug_name = request.POST.get('slug_name')
        if slug_name and slug_name in Products.objects.filter(fieldname='slug'):
            item = Products.objects.filter(slug=slug_name)
            return JsonResponse(list(item), safe=False)


class SearchProduct(APIView):
    def post(self, requets):
        query_word = requets.POST.get('searchItem')
        search_products = Products.objects.filter(
            name__icontains=query_word).values('name', 'slug')[0:7]
        return JsonResponse(list(search_products), safe=False)

    def put(self, requets):
        query_word = requets.data.get('searchItem')
        search_products = Products.objects.filter(
            name__icontains=query_word).values()[0:20]
        return JsonResponse(list(search_products), safe=False)
