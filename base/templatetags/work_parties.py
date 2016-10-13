from django.utils import timezone
from django import template
from base.models import WorkPartyEvent

register = template.Library()

@register.inclusion_tag('base/work_parties.html')
def show_current_work_parties():
	days_shown_past_expiry = 3
	practical_expire_date = timezone.now() - timezone.timedelta(days=days_shown_past_expiry)

	current_work_parties = WorkPartyEvent.objects\
        .filter(work_party_date__gte=practical_expire_date)\
        .order_by('work_party_date')[:3]
	return {'current_work_parties':current_work_parties}
