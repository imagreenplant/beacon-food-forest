import datetime
from django import template
from base.models import WorkPartyEvent

register = template.Library()

@register.inclusion_tag('base/work_parties.html')
def show_current_work_parties():
	current_work_parties = WorkPartyEvent.objects.filter(work_party_date__gt=datetime.datetime.now()).order_by('work_party_date')[:3]
	
	return {'current_work_parties':current_work_parties}
