from django.conf.urls import url
from django.contrib.flatpages.views import flatpage
from education.views import index, current_classes, past_classes, class_detail

urlpatterns = [
    url(r'^$', index, name="education-hub"),
    url(r'^classes/current/$', current_classes,
        name="current-classes"),
    url(r'^classes/past/$', past_classes, name="past-classes"),
    url(r'^classes/(?P<slug>[\w-]+)/$',
        class_detail, name="class-detail"),
]

# Flatpages
urlpatterns += [
    url(r'^teach-your-own-class/$', flatpage,
        {'url': 'education/teach-your-own-class/'}, name='teach-your-own-class'),
]
