from django.conf.urls import url
from tours.views import audio_tour

urlpatterns = [
    url(r'^audio/$', audio_tour, name="audio-tour"),
]
