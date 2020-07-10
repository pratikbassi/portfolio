from django.urls import path

from . import views

urlpatterns = [
    path('', views.newEmail, name='newEmail'),
    path('', views.newGuest, name='newGuest'),
]