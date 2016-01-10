from django.shortcuts import render_to_response
from django.http import HttpResponse
from beaconfoodforest import settings
from django.core.mail import send_mail

print "Entered base views"

def robots(request):
	return render_to_response('base/robots.txt')

def debuginfo(request):
	content = [
		"Environment is set to %s" % settings.ENVIRONMENT,
		"Debug is set to %s" % settings.DEBUG,
		"Static root is %s" % settings.STATIC_ROOT,
		"Static url is %s" % settings.STATIC_URL,
		"Cache type is %s" % settings.CACHES['default']['BACKEND'],
		"Database engine is %s" % settings.DATABASES['default']['ENGINE'],
		"Template loader is %s" % settings.TEMPLATES[0]['OPTIONS']['loaders']
	]

	content = "\n".join(content)

	return HttpResponse(content, content_type='text/plain')

def donation_mail_notify(request):

	send_subject = "Subject here"
	send_from = "sender@beaconfoodforest.org"
	send_to = ["matt@lapora.org"]
	send_message = "from DJANGO project: message here alsdkfjasldfjalsdfj asldfj l asldfj alsdfj alskdfj sldkjf"

	#send_mail("Subject", "message asldkfjas dlaksjf alskdjfasldkfj ", "sender@beaconfoodforest.org", ['bff@thelaporas.com','matt@lapora.org'], fail_silently=False)
	send_mail(send_subject, send_message, send_from, send_to, fail_silently=False)
