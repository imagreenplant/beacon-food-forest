from django.conf.urls import url
import committee

urlpatterns = [
    url(r'^$', 'committee.views.index', name="committee-hub"),
    # url(r'^meetings/upcoming/$', 'views.current_classes',name="upcoming-meetings"),
    # url(r'^meetings/all/$', 'views.past_classes', name="past-meetings"),
    url(r'^/meeting/(?P<id>[\w-]+)/$','committee.views.meeting', name="meeting-detail"),
    url(r'^(?P<slug>[\w-]+)/$','committee.views.committee_detail', name="committee-detail"),
]
