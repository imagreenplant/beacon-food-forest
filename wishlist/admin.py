from django.contrib import admin
from wishlist.models import WishListModel


@admin.register(WishListModel)
class WishListModelAdmin(admin.ModelAdmin):
    list_display = ('item', 'last_modified')
