from django.conf.urls import url
from tours.views import audio_tour, calendar

urlpatterns = [
    url(r'^audio/$', audio_tour, name="audio-tour"),
    url(r'^calendar/$', calendar, name="google-tour-calendar"),
]
