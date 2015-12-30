from django.contrib import admin
from .models import ExternalNewsArticle

@admin.register(ExternalNewsArticle)
class ExternalNewsArticleAdmin(admin.ModelAdmin):
	list_display = ('external_publisher', 'news_slug', 'pub_date')


