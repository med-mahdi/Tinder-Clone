from django.urls import path
from .views import testView , registerPage , loginPage , logoutPage , homePage

urlpatterns = [
    path('',homePage, name='homePage'),
    path('home/',homePage, name='homePage'),
    path('login/',loginPage, name='loginPage'),
    path('logout/',logoutPage, name='logoutPage'),
    path('register/',registerPage, name='registerPage'),
]
