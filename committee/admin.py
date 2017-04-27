from django.contrib import admin
from reversion.admin import VersionAdmin
from markdownx.admin import MarkdownxModelAdmin
from .models import Committee, Meeting


@admin.register(Committee)
class CommitteeAdmin(VersionAdmin):
    list_display = ('name',)


@admin.register(Meeting)
class MeetingAdmin(MarkdownxModelAdmin, VersionAdmin):
    list_display = ('committee', 'date', 'author')
