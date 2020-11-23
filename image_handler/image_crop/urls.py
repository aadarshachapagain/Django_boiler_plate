from django.urls import path

from image_handler.image_crop import views

urlpatterns = [
    path('create/', views.photo_list, name='image_crop'),
]
