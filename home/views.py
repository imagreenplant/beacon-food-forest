from django.shortcuts import render_to_response
from django.template import RequestContext
from base.models import Announcement
import datetime

recency_days = 3

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
		'articles':gatherAnnouncements(),
		'dynamic':getDynamicAnnouncements(),
	}
	return announcements

def index(request):
	return render_to_response('home/home.html',context_instance = RequestContext(request))
