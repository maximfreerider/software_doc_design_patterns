from django.db import models


class Post(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)

    def __str__(self):
        return self.name


class Account(models.Model):
    username = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    money = models.PositiveIntegerField()
    number_of_card = models.CharField(max_length=16, unique=True)  # 0000 0000 0000 0000

    def __str__(self):
        return self.username
