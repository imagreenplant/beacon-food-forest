from django import template
from base.models import Download

register = template.Library()

@register.inclusion_tag('base/downloads.html')
def show_published_downloads():
	downloads = Download.objects.all()
	return {'downloads':downloads}
