from django.conf.urls import url
from plants.views import index, detail, index_json

urlpatterns = [
    url(r'^$', index, name="plants-hub"),
    url(r'^(?P<id>[\w-]+)/$', detail, name="plants-detail"),
    url(r'^json/index/$', index_json, name="plants-index-json"),
]
