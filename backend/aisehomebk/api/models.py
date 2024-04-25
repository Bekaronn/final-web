from django.db import models
from django.contrib.auth.models import User


class SuperCategory(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return f"SuperCategory: {self.id}, {self.name}"

class MainCategory(models.Model):
    name = models.CharField(max_length=255)
    mainCategory = models.ForeignKey(
        SuperCategory, on_delete=models.CASCADE,
        related_name="super_category", null=True, blank=True
    )
    def __str__(self):
        return f"MainCategory: {self.id}, {self.name}"

class Category(models.Model):
    name = models.CharField(max_length=32)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name="category", null=True, blank=True
    )
    mainCategory = models.ForeignKey(
        MainCategory, on_delete=models.CASCADE,
        related_name="main_category", null=True, blank=True
    )
    def __str__(self):
        return f"Category: {self.id}, {self.name}"


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    likes = models.BooleanField()
    image = models.TextField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE,
        related_name="category",
        null=True,
    )

    def __str__(self):
        return f"Product: {self.id}, {self.name}, {self.price}"

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

class Reviews(models.Model):
    name = models.CharField(max_length=255)
    rating = models.CharField(max_length=10)
    description = models.TextField(max_length=255)
    image = models.TextField()

    def __str__(self):
        return f"Reviews: {self.id}, {self.name}"