from django.urls import path, include

from responsive_form import views

app_name = 'responsive_from'
urlpatterns = [
    path('create/', views.CreateForm, name='create_from'),
]
