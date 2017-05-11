from django.contrib import admin
from reversion.admin import VersionAdmin
from education.models import ClassEvent

admin.site.register(ClassEvent)


class ClassEventAdmin(VersionAdmin):
    list_display = ('title', 'class_slug_url', 'publish_date')
    prepopulated_fields = {"class_slug_url": ("title",)}
    view_on_site = True
    save_as = True
