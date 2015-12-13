from django.shortcuts import render_to_response
from django.http import HttpResponse
from beaconfoodforest import settings

def robots(request):
	return render_to_response('base/robots.txt')

def debuginfo(request):
	content = [
		"Environment is set to %s" % settings.ENVIRONMENT,
		"Debug is set to %s" % settings.DEBUG,
		"Static root is %s" % settings.STATIC_ROOT,
		"Static url is %s" % settings.STATIC_URL,
		"Cache type is %s" % settings.CACHES['default']['BACKEND'],
	]

	content = "\n".join(content)
	return HttpResponse(content, content_type='text/plain')
