from django.contrib import admin
# from django_markdown.admin import MarkdownModelAdmin
from markdownx.admin import MarkdownxModelAdmin

from education.models import ClassEvent

admin.site.register(ClassEvent)


class ClassEventAdmin(MarkdownxModelAdmin):
    list_display = ('title', 'class_slug_url', 'publish_date')
    prepopulated_fields = {"class_slug_url": ("title",)}
    save_as = True
