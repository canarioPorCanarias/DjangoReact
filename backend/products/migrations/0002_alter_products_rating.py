# Generated by Django 4.1.7 on 2023-02-19 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='rating',
            field=models.IntegerField(),
        ),
    ]