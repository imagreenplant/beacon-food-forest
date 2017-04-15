from django.shortcuts import render, get_object_or_404
from .models import ClassEvent
from django.utils import timezone


def index(request):
  return render(request, 'education/education.html')


def class_detail(request, slug):
  class_event = get_object_or_404(ClassEvent, class_slug_url=slug)
  return render(request, 'education/class_detail.html',{'class': class_event})


def past_classes(request):
  page_title = "Past Classes"
  class_events = ClassEvent.objects.filter(
      expire_date__lt=timezone.datetime.today()) \
      .order_by('event_date')

  return render(request, 'education/class_list.html', {'classes': class_events, 'title': page_title})


def current_classes(request):
  page_title = "Upcoming Classes"
  current_classes = ClassEvent.objects.filter(
      publish_date__lte=timezone.datetime.today()) \
      .filter(expire_date__gte=timezone.datetime.today()) \
      .order_by('event_date')

  return render(request, 'education/class_list.html',
                {'classes': current_classes,'title': page_title})
