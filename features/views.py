from django.shortcuts import render


def MultipleSelect(request):
    data_breadcrumb = {
        'name': 'Multiple Select',
        'active': 'active'
    }

    context = {
        'data_breadcrumb': data_breadcrumb
    }
    return render(request, 'features/multiple_select/multipleselect.html', context)


def MultipleDivison(request):
    data_breadcrumb = {
        'name': 'Multiple Division',
        'active': 'active'
    }

    context = {
        'data_breadcrumb': data_breadcrumb
    }
    return render(request, 'features/multiple_division/multipledivison.html', context)
