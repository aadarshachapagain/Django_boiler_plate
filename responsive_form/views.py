from django.shortcuts import render


def CreateForm(request):
    return render(request, 'form_temp/create.html')
