from django.urls import path

from image_handler.image_drag_and_drop import views

urlpatterns = [
    path('', views.DragAndDropImage, name='image_drag_and_drop'),
    path('upload/', views.dropzoneuploads, name='upload_images'),
]