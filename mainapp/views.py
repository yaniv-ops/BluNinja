from django.shortcuts import render
from django.http import HttpResponseRedirect
import re

# Create your views here.

def index(request):
    return render(request,'mainapp/index.html')
