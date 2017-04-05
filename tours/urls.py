from django.conf.urls import url

urlpatterns = [
    url(r'^audio/$', 'tours.views.audio_tour', name="audio-tour"),
]
