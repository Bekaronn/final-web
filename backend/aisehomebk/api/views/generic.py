from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from ..models import Category, Product, MainCategory, SuperCategory
from ..serializers import CategorySerializer2, ProductSerializer, MainSerializer, SuperSerializer


class GenListCategories(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    # permission_classes = (IsAuthenticated,)

    # def get_queryset(self):
    #     return Category.objects.filter(user=self.request.user)
    #
    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

class GenListCategoriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2


class GenListProducts(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class GenListProductsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class GenListMainCategory(generics.ListCreateAPIView):
    queryset = MainCategory.objects.all()
    serializer_class = MainSerializer

class GenListMainCategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = MainCategory.objects.all()
    serializer_class = MainSerializer

class GenListSuperCategory(generics.ListCreateAPIView):
    queryset = SuperCategory.objects.all()
    serializer_class = SuperSerializer

class GenListSuperCategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = SuperCategory.objects.all()
    serializer_class = SuperSerializer


