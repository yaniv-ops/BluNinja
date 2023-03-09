from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index-page'),
    path('form-application/<slug:plan>', views.form, name='form-page')
]
