import datetime
from django import template
from education.models import ClassEvent
register = template.Library()

@register.inclusion_tag('base/current_classes.html')
def show_current_classes():
	current_classes = ClassEvent.objects.filter(publish_date__lt=datetime.date.today()) \
		.filter(expire_date__gt=datetime.date.today()) \
		.order_by('publish_date')[:10]

	return {'current_classes':current_classes}
