from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from api.models import EmailRequest, VisitorLocation

def newEmail(request):

    newEmail = EmailRequest.objects.create()
    newEmail.name = request.name
    newEmail.email = request.email
    newEmail.subject = request.subject
    newEmail.message = request.message
    newEmail.save()

    return JsonResponse(200)

def newGuest(request):
    data = {
        "locationX": request.locationX,
        "locationY": request.locationY
    }

    newGuest = VisitorLocation.objects.create()
    newGuest.locationX = request.locationX
    newGuest.locationY = request.locationY
    newGuest.save()

    return JsonResponse(data)

def allGuests(request):
    guests = VisitorLocation.objects.get()
    return JsonResponse(guests)