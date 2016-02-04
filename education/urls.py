from django.conf.urls import include, url
# import beaconfoodforest.urls

urlpatterns = [
    url(r'^$', 'education.views.index', name="education-hub"),
    # url(r'^classes/current/$', 'education.views.index', name="current-classes"),
    # url(r'^classes/all/$', 'education.views.index', name="all-classes"),
    url(r'^classes/(.*)/$', 'education.views.class_detail', name="class-detail"),
    
]