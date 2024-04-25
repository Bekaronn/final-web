from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from ..models import Reviews, Category, MainCategory, SuperCategory
from ..serializers import ReviewSerializer, ProductSerializer, CategorySerializer2, MainSerializer

@api_view(["GET", "POST"])
def reviews(request):
    if request.method == "GET":
        reviews = Reviews.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def reviewsDetail(request, pk=None):
    reviews = Reviews.objects.get(id=pk)
    if(request.method == "GET"):
        serializer = ReviewSerializer(reviews)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = ReviewSerializer(
            instance=reviews,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        reviews.delete()
        return Response({'id': 'deleted'})

@api_view(['GET'])
def products_by_category(request, pk):
    try:
        category = Category.objects.get(id=pk)
        products = category.category.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"message": "Category not found"}, status=404)

@api_view(['GET'])
def category_by_maincat(request, pk):
    try:
        category = MainCategory.objects.get(id=pk)
        categories = category.main_category.all()
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"message": "Category not found"}, status=404)

@api_view(['GET'])
def maincat_by_supercat(request, pk):
    try:
        category = SuperCategory.objects.get(id=pk)
        categories = category.super_category.all()
        serializer = MainSerializer(categories, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"message": "Category not found"}, status=404)