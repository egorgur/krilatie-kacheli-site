from django.urls import include, path

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    # path('', include(router.urls)),
    path('test/', views.test, name='members'),
    path('items/', views.ItemsList.as_view()),
    path('items/<int:pk>/', views.ItemDetail.as_view()),
    path('groups/', views.ItemGroupList.as_view()),
    path('groups/<int:pk>/', views.ItemGroupDetail.as_view()),
    path('themes/', views.GroupThemeList.as_view()),
    path('themes/<int:pk>/', views.GroupThemeDetail.as_view()),
]

