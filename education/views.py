
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import ClassEvent
from django.utils import timezone


def index(request):
    return render_to_response('education/education.html', {},
                              context_instance=RequestContext(request))


def class_detail(request, slug):
    class_event = get_object_or_404(ClassEvent, class_slug_url=slug)
    return render_to_response('education/class_detail.html',
                              {'class': class_event},
                              context_instance=RequestContext(request))


def past_classes(request):
    page_title = "Past Classes"
    class_events = ClassEvent.objects.filter(
        expire_date__lt=timezone.datetime.today()) \
        .order_by('event_date')

    return render_to_response('education/class_list.html',
                              {'classes': class_events, 'title': page_title},
                              context_instance=RequestContext(request))


def current_classes(request):
    page_title = "Upcoming Classes"
    current_classes = ClassEvent.objects.filter(
        publish_date__lte=timezone.datetime.today()) \
        .filter(expire_date__gte=timezone.datetime.today()) \
        .order_by('event_date')

    return render_to_response('education/class_list.html',
                              {'classes': current_classes,
                               'title': page_title},
                              context_instance=RequestContext(request))
