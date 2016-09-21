from django.conf.urls import include, url
from django.contrib.flatpages import views
from django_markdown import flatpages

urlpatterns = [
    url(r'^$', 'education.views.index', name="education-hub"),
    url(r'^classes/current/$', 'education.views.current_classes', name="current-classes"),
    url(r'^classes/past/$', 'education.views.past_classes', name="past-classes"),
    url(r'^classes/(?P<slug>[\w-]+)/$', 'education.views.class_detail', name="class-detail"),
    url(r'^teach-your-own-class/criteria/$', 'education.views.teacher_criteria', name="teacher-criteria"),
    url(r'^teach-your-own-class/expectations/$', 'education.views.teacher_expectations', name="teacher-expectations"),
    url(r'^teach-your-own-class/workshop-proposal/$', 'education.views.teacher_proposal', name="teacher-proposal"),
]

# Flatpages
urlpatterns += [
    url(r'^teach-your-own-class/$', views.flatpage, {'url': 'education/teach-your-own-class/'}, name='teach-your-own-class'),
]
