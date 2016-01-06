from django.contrib import admin
from .models import ExternalNewsArticle, WorkPartyEvent

@admin.register(ExternalNewsArticle)
class ExternalNewsArticleAdmin(admin.ModelAdmin):
	list_display = ('external_publisher', 'news_slug', 'pub_date')

@admin.register(WorkPartyEvent)
class WorkPartyEventAdmin(admin.ModelAdmin):
	list_display = ('work_party_date',)

