import datetime
from django import template
from education.models import ClassEvent
register = template.Library()

@register.inclusion_tag('base/current_classes.html')
def show_current_classes():
	current_classes = ClassEvent.objects.filter(publish_date__lte=datetime.date.today()) \
		.filter(expire_date__gte=datetime.date.today()) \
		.order_by('publish_date')[:10]

	return {'current_classes':current_classes}
