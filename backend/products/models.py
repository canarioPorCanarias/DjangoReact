from django.db import models

# Create your models here.


class Categories(models.Model):
    categories = models.CharField(max_length=100)


class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    text = models.TextField()
    date = models.DateTimeField()


class Products(models.Model):
    img = models.TextField(max_length=180)
    name = models.TextField(max_length=90)
    rating = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    slug = models.TextField(max_length=200)
    category = models.CharField(max_length=20)
