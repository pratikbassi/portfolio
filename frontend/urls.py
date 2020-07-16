from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from frontend import views

urlpatterns = [
    path('newEmail', views.newEmail, name='newEmail'),
    path('newGuest', views.newGuest, name='newGuest'),
    path('allGuests', views.allGuests, name='allGuests')
]