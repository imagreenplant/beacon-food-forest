from django.conf.urls import include, url
# import beaconfoodforest.urls

urlpatterns = [
    url(r'^$', 'education.views.index', name="education-hub"),
    url(r'^classes/current/$', 'education.views.current_classes', name="current-classes"),
    url(r'^classes/past/$', 'education.views.past_classes', name="past-classes"),
    url(r'^classes/(.*)/$', 'education.views.class_detail', name="class-detail"),
    url(r'^teach-your-own-class/criteria/$', 'education.views.teacher_criteria', name="teacher-criteria"),
    url(r'^teach-your-own-class/expectations/$', 'education.views.teacher_expectations', name="teacher-expectations"),
    url(r'^teach-your-own-class/workshop-proposal/$', 'education.views.teacher_proposal', name="teacher-proposal"),
    
]