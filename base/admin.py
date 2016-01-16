from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from .models import ExternalNewsArticle, WorkPartyEvent, Announcement

@admin.register(ExternalNewsArticle)
class ExternalNewsArticleAdmin(admin.ModelAdmin):
	list_display = ('external_publisher', 'news_slug', 'pub_date')

@admin.register(WorkPartyEvent)
class WorkPartyEventAdmin(admin.ModelAdmin):
	list_display = ('work_party_date',)

@admin.register(Announcement)
class AnnouncementAdmin(MarkdownModelAdmin):
	list_display = ('announcement_publish_date', 'announcement_slug',)	


