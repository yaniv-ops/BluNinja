from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

class PickUpload(models.Model):
    imagefile = models.ImageField(upload_to = 'images', blank=True)