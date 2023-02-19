from django.db import models

# Create your models here.


class Categories(models.Model):
    categories = models.CharField(max_length=100)


class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    text = models.TextField()
    date = models.DateTimeField()


class orders(models.Model):
    class Status(models.TextChoices):
        SUCCESS = 'S'
        PENDING = 'P'
        ERROR = 'E'
        CANCELED = 'C'

    cart = models.TextField()
    price = models.FloatField(max_length=10)
    status = models.CharField(max_length=1,choices=Status.choices,default=Status.PENDING)
        
    ethAddress = models.CharField(max_length=50)
    hash_num = models.CharField(max_length=100)
    text = models.TextField(max_length=100)
    create_date = models.DateTimeField()
    last_update_date = models.DateTimeField()


class payments(models.Model):
    ammount = models.FloatField()
    date = models.DateTimeField()
    order_id = models.IntegerField()


class products(models.Model):
    img = models.TextField(max_length=180)
    name = models.TextField(max_length=90)
    rating = models.IntegerField()
    slug = models.TextField(max_length=200)
    category = models.CharField(max_length=20)
