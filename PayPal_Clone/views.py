from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
import re

# Create your views here.

def index(request):
    return render(request,'PayPal_Clone/index.html')

def form(request, plan):
    return render(request, 'mainapp/form-application.html', {'plan':plan})