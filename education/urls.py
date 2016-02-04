from django.conf.urls import include, url
# import beaconfoodforest.urls

urlpatterns = [
    url(r'^$', 'education.views.index', name="education-hub"),
    url(r'^class/$', 'education.views.index', name="class-page"),
    # url(r'^current-classes/$', 'views.index', name="current-classes"),
    # url(r'^all-classes/$', 'views.index', name="all-classes"),
]