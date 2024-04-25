from rest_framework import serializers
from .models import Category, Product, MainCategory, SuperCategory, Reviews
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    def create(self, validated_data):
        instance = Category.objects.create(
            name=validated_data.get("name")
        )

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance

class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50)
    user_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Category
        fields = ("id", "name", "user_id")

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = "__all__"

class SuperSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuperCategory
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = "__all__"