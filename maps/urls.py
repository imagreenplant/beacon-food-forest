from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^trees/$', views.trees , name="trees"),
]