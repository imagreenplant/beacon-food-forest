import datetime
from django import template
from education.models import ClassEvent
register = template.Library()

@register.inclusion_tag('base/current_classes.html')
def show_current_classes():
	days_shown_past_expiry = 3
	practical_expire_date = datetime.datetime.now() - datetime.timedelta(days=days_shown_past_expiry)

	current_classes = ClassEvent.objects.filter(publish_date__lte=datetime.date.today()) \
		.filter(expire_date__gte=practical_expire_date) \
		.order_by('publish_date')[:10]

	return {'current_classes':current_classes}
