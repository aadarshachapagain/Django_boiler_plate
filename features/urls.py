from django.urls import path, include

from features import views


app_name = 'features'
urlpatterns = [
    path('multipleselect/', views.MultipleSelect, name='multiple_select'),
    path('multiple_divison/', views.MultipleDivison, name='multiple_divison'),
]