from django.conf.urls import url
from committee.views import index, meeting, committee_detail

urlpatterns = [
    url(r'^$', index, name="committee-hub"),
    # url(r'^meetings/upcoming/$', 'views.current_classes',name="upcoming-meetings"),
    # url(r'^meetings/all/$', 'views.past_classes', name="past-meetings"),
    url(r'^meeting/(?P<id>[\w-]+)/$',meeting, name="meeting-detail"),
    url(r'^(?P<slug>[\w-]+)/$',committee_detail, name="committee-detail"),
]
