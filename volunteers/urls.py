from django.conf.urls import url
from volunteers.views import index, individual, group

urlpatterns = [
    url(r'^$', index, name="volunteers-hub"),
    url(r'^log-individual-hours$', individual, name="log-individual-hours"),
    url(r'^log-group-hours$', group, name="log-group-hours"),
]
