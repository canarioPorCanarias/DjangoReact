from django.urls import path
from .views import ProductsList, GetCategories, GetSlug, GetProductInfo, SearchProduct

urlpatterns = [
    path('products', ProductsList.as_view()),
    path('categories', GetCategories.as_view()),
    path('get_slug', GetSlug.as_view()),
    path('get_product', GetProductInfo.as_view()),
    path('findItem', SearchProduct.as_view()),

]
