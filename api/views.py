from .models import EmailRequest, VisitorLocation
from .serializers import VisitorSerializer, EmailSerializer
from rest_framework import generics

class EmailCreate(generics.CreateAPIView):
    queryset = EmailRequest.objects.all()
    serializer_class = EmailSerializer

class VisitorListCreate(generics.ListCreateAPIView):
    queryset = VisitorLocation.objects.all()
    serializer_class = VisitorSerializer