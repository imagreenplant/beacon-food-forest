from django.shortcuts import render
from .models import WishListModel


def wishlist(request):
    page_title = "Wish List"
    wishlist = WishListModel.objects.all().order_by('index')
    return render(request, 'wishlist/wishlist.html', {'title': page_title, 'wishlist': wishlist})
