from django.urls import path

from . import views

urlpatterns = [
    path('newEmail', views.newEmail, name='newEmail'),
    path('newGuest', views.newGuest, name='newGuest'),
]