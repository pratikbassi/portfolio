from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse


def index(request):
    data = {}

    return JsonResponse("Hello, world. You're at the polls index.")