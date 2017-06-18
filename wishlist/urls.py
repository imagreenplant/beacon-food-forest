from django.conf.urls import url
from wishlist.views import wishlist

urlpatterns = [
    url(r'^wishlist/$', wishlist, name="wishlist"),
]
