from django.shortcuts import render_to_response
from django.http import HttpResponse
from beaconfoodforest import settings

def robots(request):
	return render_to_response('base/robots.txt')

def debuginfo(request):
	content = "Environment is set to %s" % settings.ENVIRONMENT
	return HttpResponse(content, content_type='text/plain')
