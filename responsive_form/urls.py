from django.urls import path, include

from responsive_form import views

app_name = 'responsive_from'
urlpatterns = [
    path('create/', views.CreateForm, name='create_from'),
    path('multipleselect/', views.MultipleSelect, name='multiple_select'),
    path('multiple_divison/', views.MultipleDivison, name='multiple_divison'),
]
