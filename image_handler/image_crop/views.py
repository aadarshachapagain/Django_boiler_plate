from django.shortcuts import render, redirect

from .models import Photo
from .forms import PhotoForm


def photo_list(request):
    photos = Photo.objects.all()
    if request.method == 'POST':
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('image_handler:image_crop')
    else:
        form = PhotoForm()

    data_breadcrumb = {
        'name': 'Crop Image',
        'active': 'active'
    }

    context = {
        'form': form,
        'photos': photos,
        'data_breadcrumb': data_breadcrumb
    }

    return render(request, 'image_crop/image_crop.html', context)
