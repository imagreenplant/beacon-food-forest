from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^trees/$', views.trees , name="trees"),
    url(r'^phase2/$', views.phase2 , name="phase2"),
    url(r'^test/$', views.test , name="test-map"),
    url(r'^(?P<slug>[\w-]+)/$', 'views.kml_map', name="kml_map"),
]