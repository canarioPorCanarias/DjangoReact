from django.urls import path
from .views import GetProductInfo

urlpatterns = [
    path('get_product', GetProductInfo.as_view())
]
