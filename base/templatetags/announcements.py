import datetime
from django import template
from education.models import ClassEvent
from base.models import ExternalNewsArticle, WorkPartyEvent, Announcement
register = template.Library()

def getUpcomingWorkParties():
	display_delta = datetime.datetime.now() + datetime.timedelta(days=5)
	work_parties = WorkPartyEvent.objects.filter(work_party_date__lte=display_delta)\
		.filter(work_party_date__gte=datetime.date.today())
	return work_parties

def getNewClasses():
	# Returns any classes newly published within n recency_days
	return None
	
def getUpcomingClasses():
	# Returns any classes coming up in n recency_days
	return None

def getRecentArticles():
	# Returns any articles recently published within n recency_days
	return None

def getDynamicAnnouncements():
	# Returns any annoucements published in database for current time
	dynamic = Announcement.objects.filter(announcement_publish_date__lt=datetime.date.today()) \
		.filter(announcement_expire_date__gt=datetime.date.today()) \
		.order_by('announcement_publish_date')[:10]
	return dynamic

def gatherAnnouncements():
	announcements = {
		'workParties':getUpcomingWorkParties(),
		'newClasses':getNewClasses(),
		'upcomingClasses':getUpcomingClasses(),
		'articles':getRecentArticles(),
		'dynamic':getDynamicAnnouncements(),
	}
	return announcements

@register.inclusion_tag('base/announcements.html')
def show_all_announcements():
	announcements = gatherAnnouncements()
	return {'announcements':announcements}
