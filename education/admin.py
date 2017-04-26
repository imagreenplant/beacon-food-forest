from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin
from reversion.admin import VersionAdmin
from education.models import ClassEvent

admin.site.register(ClassEvent)


class ClassEventAdmin(MarkdownxModelAdmin, VersionAdmin):
    list_display = ('title', 'class_slug_url', 'publish_date')
    prepopulated_fields = {"class_slug_url": ("title",)}
    save_as = True
