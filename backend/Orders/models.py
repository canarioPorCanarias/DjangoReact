from django.db import models

# Create your models here.

class Orders(models.Model):

    class Status(models.TextChoices):
        SUCCESS = 'SC','Success'
        PENDING = 'PD','Pending'
        ERROR = 'ER','Error'
        CANCELED = 'CN','Canceled'

    cart = models.TextField()
    price = models.FloatField(max_length=10)
    status = models.CharField(
        max_length=20, choices=Status.choices,default=Status.PENDING)

    ethAddress = models.CharField(max_length=50)
    hash_num = models.CharField(max_length=100)
    text = models.TextField(max_length=100)
    create_date = models.DateTimeField()
    last_update_date = models.DateTimeField()


class Payments(models.Model):
    ammount = models.FloatField()
    date = models.DateTimeField()
    order_id = models.PositiveIntegerField()
