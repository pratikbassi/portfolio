from django.urls import path
from . import views

urlpatterns = [
    path('api/email/', views.EmailCreate.as_view() ),
    path('api/visitor/', views.VisitorListCreate.as_view()),

]