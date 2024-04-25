from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (GenListCategories, GenListProducts,
                    GenListProductsDetail, GenListCategoriesDetail,
                    GenListMainCategory, GenListMainCategoryDetails,
                    GenListSuperCategory, GenListSuperCategoryDetails
                    )

from .views import (
    reviews, reviewsDetail, products_by_category, category_by_maincat, maincat_by_supercat
)


urlpatterns = [
    path('reviews/', reviews),
    path('reviews/<int:pk>', reviewsDetail),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('categories/', GenListCategories.as_view()),
    path('categories/<int:pk>', GenListCategoriesDetail.as_view()),
    path('products/', GenListProducts.as_view()),
    path('products/<int:pk>', GenListProductsDetail.as_view()),
    path('maincategory/', GenListMainCategory.as_view()),
    path('maincategory/<int:pk>', GenListMainCategoryDetails.as_view()),
    path('supercategory/', GenListSuperCategory.as_view()),
    path('supercategory/<int:pk>', GenListSuperCategoryDetails.as_view()),
    path('category/<int:pk>/products', products_by_category),
    path('maincategory/<int:pk>/category', category_by_maincat),
        path('supercategory/<int:pk>/maincategory', maincat_by_supercat)
]