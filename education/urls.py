from django.conf.urls import url
from django.contrib.flatpages import views

urlpatterns = [
    url(r'^$', 'education.views.index', name="education-hub"),
    url(r'^classes/current/$', 'education.views.current_classes',
        name="current-classes"),
    url(r'^classes/past/$', 'education.views.past_classes', name="past-classes"),
    url(r'^classes/(?P<slug>[\w-]+)/$',
        'education.views.class_detail', name="class-detail"),
]

# Flatpages
urlpatterns += [
    url(r'^teach-your-own-class/$', views.flatpage,
        {'url': 'education/teach-your-own-class/'}, name='teach-your-own-class'),
]
