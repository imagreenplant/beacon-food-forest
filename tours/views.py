from django.shortcuts import render_to_response
from .models import AudioTourModel
from django.template import RequestContext


def audio_tour(request):
    page_title = "Audio Tour"
    audio = AudioTourModel.objects.all().order_by('index')
    return render_to_response('tours/audio_tour_list.html', {'title': page_title, 'audio': audio},
                              context_instance=RequestContext(request))
