from django.utils import timezone
from django import template
from education.models import ClassEvent
register = template.Library()


@register.inclusion_tag('base/current_classes.html')
def show_current_classes():
    days_shown_past_expiry = 3
    practical_expire_date = timezone.now() - timezone.timedelta(days=days_shown_past_expiry)

    current_classes = ClassEvent.objects.filter(publish_date__lte=timezone.datetime.today()) \
        .filter(expire_date__gte=practical_expire_date) \
        .order_by('event_date')[:10]

    return {'current_classes': current_classes}
