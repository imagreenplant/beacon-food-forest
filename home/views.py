from django.shortcuts import render_to_response
from django.template import RequestContext
from base.models import Announcement
import datetime
 
# def index(request):
    # return render_to_response('home/home.html',{},context_instance = RequestContext(request))

def index(request):
	announcements = Announcement.objects.filter(announcement_publish_date__lt=datetime.date.today()) \
		.filter(announcement_expire_date__gt=datetime.date.today()) \
		.order_by('announcement_publish_date')[:10]

	return render_to_response('home/home.html',{'announcements':announcements},context_instance = RequestContext(request))
