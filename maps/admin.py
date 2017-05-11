from django.contrib import admin
from .models import KmlMap


@admin.register(KmlMap)
class KmlMapAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'kml', 'active')
    view_on_site = True
