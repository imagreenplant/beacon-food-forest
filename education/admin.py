from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin

from education.models import ClassEvent

# @admin.site.register(ClassEvent)
# class ClassEventAdmin(MarkdownModelAdmin):
# 	list_display = ('title', 'class_slug_url', 'publish_date')

admin.site.register(ClassEvent)
class ClassEventAdmin(MarkdownModelAdmin):
	list_display = ('title', 'class_slug_url', 'publish_date')
	prepopulated_fields = {"class_slug_url": ("title",)}
