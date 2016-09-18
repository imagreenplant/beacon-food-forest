from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from .models import ExternalNewsArticle, WorkPartyEvent, Announcement, VolunteerContact, Download

@admin.register(ExternalNewsArticle)
class ExternalNewsArticleAdmin(admin.ModelAdmin):
	list_display = ('external_publisher', 'news_slug', 'pub_date')

@admin.register(WorkPartyEvent)
class WorkPartyEventAdmin(admin.ModelAdmin):
	list_display = ('work_party_date',)

@admin.register(Announcement)
class AnnouncementAdmin(MarkdownModelAdmin):
	list_display = ('publish_date', 'slug',)
	fields = ('headline','publish_date','expire_date','event_date','content','primary_image','link','override','slug')

@admin.register(VolunteerContact)
class VolunteerAdmin(admin.ModelAdmin):
	list_display = ('volunteer_name', 'volunteer_email', 'volunteer_is_active',)

@admin.register(Download)
class DownloadAdmin(admin.ModelAdmin):
	list_display = ('display_name', 'download_file', 'publish_to_frontpage',)	
