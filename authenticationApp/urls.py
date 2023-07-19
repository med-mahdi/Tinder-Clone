from django.urls import path
from .views import registerPage , loginPage , logoutPage , homePage

urlpatterns = [
    path('',loginPage, name='loginPage'),
    path('login/',loginPage, name='loginPage'),
    path('register/',registerPage, name='registerPage'),
    path('logout/',logoutPage, name='logoutPage'),
    # The Url After Authentication
    path('app/recs',homePage, name='homePage'),
]
