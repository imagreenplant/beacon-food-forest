from django.conf.urls import include, url

urlpatterns = [
    url(r'^$', 'plants.views.index', name="plants-hub"),
    url(r'^(?P<id>[\w-]+)/$', 'plants.views.detail', name="plants-detail"),
]
