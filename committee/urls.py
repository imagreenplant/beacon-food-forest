from django.conf.urls import url
# from committee import views
import committee

urlpatterns = [
    url(r'^$', 'committee.views.index', name="committee-hub"),
    # url(r'^meetings/upcoming/$', 'views.current_classes',name="upcoming-meetings"),
    # url(r'^meetings/all/$', 'views.past_classes', name="past-meetings"),
    # url(r'^/meeting/(?P<slug>[\w-]+)/$',
    #     'views.meeting_detail', name="meeting-detail"),
    # url(r'^(?P<name>[\w-]+)/$',
    #     'views.committee_detail', name="committee-detail"),
]
