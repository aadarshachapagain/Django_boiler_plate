from django.urls import path, include

from image_handler import views


app_name = 'image_handler'
urlpatterns = [
    path('image_crop/', include('image_handler.image_crop.urls')),
    path('image_drag_and_drop/', include('image_handler.image_drag_and_drop.urls')),
]
