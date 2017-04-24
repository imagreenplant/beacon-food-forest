from django.shortcuts import render
from .models import AudioTourModel


def audio_tour(request):
    page_title = "Audio Tour"
    audio = AudioTourModel.objects.all().order_by('index')
    return render(request, 'tours/audio_tour_list.html', {'title': page_title, 'audio': audio})
