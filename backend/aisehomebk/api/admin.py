from django.contrib import admin

from .models import Product, Category, MainCategory, SuperCategory, Reviews

# Register your models here.

@admin.register(MainCategory)
class MainCategory(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'likes')
    search_fields = ('name',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')
    search_fields = ('name',)

@admin.register(SuperCategory)
class SuperCategory(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name', )

@admin.register(Reviews)
class ReviewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    search_fields = ('name',)