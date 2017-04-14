from django.contrib import admin
# from django_markdown.admin import MarkdownModelAdmin
from markdownx.admin import MarkdownxModelAdmin
from .models import Committee, Meeting

@admin.register(Committee)
class CommitteeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Meeting)
class MeetingAdmin(MarkdownxModelAdmin):
    list_display = ('committee', 'date', 'author')
