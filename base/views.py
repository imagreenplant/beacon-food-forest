from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from beaconfoodforest import settings
from django.core.mail import send_mail
from base.forms import MaterialsDonationForm

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

def send_donation_notification(donor_data):
	send_subject = " ".join([donor_data['donation_type'], " donation from ", donor_data['your_name']])
	send_from = "sender@beaconfoodforest.org"
	send_to = ["matt@lapora.org"]
	message_data = [
		"Donor: %s" % donor_data['your_name'],
		"Email: %s" % donor_data['your_email'],
		"Type: %s" % donor_data['donation_type'],
		"Description:",
		"\n",
		donor_data['donation_description']
		]

	send_message = "\n".join(message_data)

	# send_mail("Subject", "message asldkfjas dlaksjf alskdjfasldkfj ", "sender@beaconfoodforest.org", ['bff@thelaporas.com','matt@lapora.org'], fail_silently=False)
	send_mail(send_subject, send_message, send_from, send_to, fail_silently=False)



def material_donation_notify(request):
	if request.method == 'POST':
		form = MaterialsDonationForm(request.POST)
		if form.is_valid():
			send_donation_notification(form.cleaned_data)
			return HttpResponseRedirect('/thanks/')
	else:
		return HttpResponseRedirect('/')

def donation_thanks(request):
	return HttpResponseRedirect('/')

