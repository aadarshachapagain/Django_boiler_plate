from django.contrib import admin

# Register your models here.
from image_handler.image_crop.models import Photo
admin.site.register(Photo)