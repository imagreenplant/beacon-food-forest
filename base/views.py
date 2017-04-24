from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail

from beaconfoodforest import settings
from base.forms import MaterialsDonationForm
from base.models import Announcement

import sys
from django import get_version


def robots(request):
    return render(request, 'base/robots.txt')


def google_verify(request):
    return render(request, 'base/google4d7d768ede13abd5.html')


def debuginfo(request):
    content = [
        "Environment is set to %s" % settings.ENVIRONMENT,
        "Python version is %s" % sys.version,
        "Debug is set to %s" % settings.DEBUG,
        "Static root is %s" % settings.STATIC_ROOT,
        "Static url is %s" % settings.STATIC_URL,
        "Cache type is %s" % settings.CACHES['default']['BACKEND'],
        "Database engine is %s" % settings.DATABASES['default']['ENGINE'],
        "Template loader is %s" % settings.TEMPLATES[0]['OPTIONS']['loaders'],
        "Media root is %s" % settings.MEDIA_ROOT,
        "Django version is %s" % get_version()
    ]

    content = "\n".join(content)

    return HttpResponse(content, content_type='text/plain')


def send_donation_notification(donor_data):
    send_subject = " ".join(
        [donor_data['donation_type'], " donation from ", donor_data['your_name']])
    send_from = settings.EMAIL_HOST_USER
    send_to = [settings.DONATE_EMAIL]

    message_data = [
        "Donor: %s" % donor_data['your_name'],
        "Email: %s" % donor_data['your_email'],
        "Type: %s" % donor_data['donation_type'],
        "Description:",
        "\n",
        donor_data['donation_description']
    ]

    send_message = "\n".join(message_data)
    send_mail(send_subject, send_message, send_from, send_to, fail_silently=False)


def material_donation_notify(request):
    if request.method == 'POST':
        form = MaterialsDonationForm(request.POST)
        if form.is_valid():
            send_donation_notification(form.cleaned_data)
            return HttpResponseRedirect('/thanks/')
        else:
            return HttpResponseRedirect('/#materials-donation')
    else:
        return HttpResponseRedirect('/#materials-donation')


def material_donation_thanks(request):
    return render(request, 'base/material_donation_thanks.html', {})


def announcement(request, slug):
    announcement = get_object_or_404(Announcement, slug=slug)
    return render(request, 'base/announcement_detail.html', {'announcement': announcement})


def handler404(request):
    response = render(request, '404.html')
    response.status_code = 404
    return response


def handler500(request):
    response = render(request, '500.html')
    response.status_code = 500
    return response
