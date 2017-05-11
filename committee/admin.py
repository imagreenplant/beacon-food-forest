from django.contrib import admin
from reversion.admin import VersionAdmin
from .models import Committee, Meeting


@admin.register(Committee)
class CommitteeAdmin(VersionAdmin):
    list_display = ('name',)
    view_on_site = True


@admin.register(Meeting)
class MeetingAdmin(VersionAdmin):
    list_display = ('committee', 'date', 'author')
    view_on_site = True
