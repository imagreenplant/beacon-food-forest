from django.conf.urls import url

urlpatterns = [
    url(r'^$', 'plants.views.index', name="plants-hub"),
    url(r'^(?P<id>[\w-]+)/$', 'plants.views.detail', name="plants-detail"),
    url(r'^json/index/$', 'plants.views.index_json', name="plants-index-json"),
]
