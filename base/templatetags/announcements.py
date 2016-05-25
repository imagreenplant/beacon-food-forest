import datetime
from django import template
from education.models import ClassEvent
from base.models import ExternalNewsArticle, WorkPartyEvent, Announcement
register = template.Library()

def getUpcomingWorkParties():
	# Returns any work parties coming up within n recency_days
	return None

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
