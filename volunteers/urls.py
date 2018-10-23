from django.conf.urls import url
from volunteers.views import index

urlpatterns = [
    url(r'^$', index, name="volunteers-hub"),
]
