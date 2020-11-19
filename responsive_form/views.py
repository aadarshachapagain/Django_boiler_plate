from django.shortcuts import render


def CreateForm(request):
    return render(request, 'form_temp/create.html')


def MultipleSelect(request):
    return render(request, 'form_temp/multipleselect.html')


def MultipleDivison(request):
    return render(request, 'form_temp/multipledivison.html')
