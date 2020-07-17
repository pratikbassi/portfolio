from rest_framework import serializers
from .models import EmailRequest, VisitorLocation

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailRequest
        fields = ('name', 'email','subject','message', 'sent')

class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorLocation
        fields = ('locationX', 'locationY','publicIp')