from django.db import models


class WishListModel(models.Model):
    item = models.CharField(max_length=200, blank=False, help_text='(Required) A short \
        description of the wanted item.')
    description = models.TextField(blank=True, help_text='(Optional) A popup description \
        that gives more context and information to the request.')
    last_modified = models.DateTimeField(auto_now=True, auto_now_add=False)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
