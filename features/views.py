from django.shortcuts import render

def MultipleSelect(request):
    return render(request, 'features/multiple_select/multipleselect.html')


def MultipleDivison(request):
    return render(request, 'features/multiple_division/multipledivison.html')
