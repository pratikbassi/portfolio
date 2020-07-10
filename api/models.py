from django.db import models


# Create your models here.

class EmailRequest(models.Model):
    name = models.CharField(max_length=200, blank=False)
    email = models.CharField(max_length=200, blank=False)
    subject = models.CharField(max_length=200, blank=False)
    message = models.CharField(max_length=500, blank=False)
    sent = models.BooleanField(default=False, blank=False)


class VisitorLocation(models.Model):
    locationX = models.FloatField(blank=True)
    locationY = models.FloatField(blank=True)
    publicIp = models.CharField(max_length=50, blank=True)
