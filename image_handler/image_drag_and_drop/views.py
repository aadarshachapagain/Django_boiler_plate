from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import render


def DragAndDropImage(request):
    data_breadcrumb = {
        'name': 'Drag and Drop image',
        'active': 'active'
    }
    context = {
        'data_breadcrumb': data_breadcrumb
    }
    return render(request, 'image_drag_and_drop/image_drag_and_drop.html', context)


def dropzoneuploads(request):
    if request.method == 'POST':
        files = [request.FILES.get('file[%d]' % i)
                 for i in range(0, len(request.FILES))]
        # inputs obtained from form are grabbed here, similarly other data can be gathered
        abc = request.POST['abc']
        # location where you want to upload your files
        folder = 'my_folder'
        fs = FileSystemStorage(location=folder)
        for f in files:
            filename = fs.save(f.name, f)
    data = {'status': 'success'}
    response = JsonResponse(data)
    return response
