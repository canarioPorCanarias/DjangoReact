# Generated by Django 4.1.7 on 2023-02-20 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='create_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='orders',
            name='last_update_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
