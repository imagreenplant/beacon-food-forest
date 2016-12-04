from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^fruit-trees/$', views.fruitTrees, name="fruit-trees"),
    url(r'^categories/$', views.categories, name="map-by-category"),
    url(r'^(?P<tag>[\w-]+)/$', views.tag_map, name="tag-map"),
    url(r'^kml/(?P<slug>[\w-]+)/$', views.kml_map, name="kml-map"),
]
