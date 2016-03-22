
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import ClassEvent
import datetime

def index(request):
    return render_to_response('education/education.html',{},context_instance = RequestContext(request))

def class_detail(request,slug):
    class_event = get_object_or_404(ClassEvent, class_slug_url=slug)
    return render_to_response('education/class_detail.html', {'class':class_event},context_instance = RequestContext(request))
	
def past_classes(request):
	page_title = "Past Classes"
	class_events = ClassEvent.objects.filter(expire_date__lt=datetime.date.today()) \
										.order_by('publish_date')
	return render_to_response('education/class_list.html',\
		{'classes':class_events,'title':page_title}, \
		context_instance = RequestContext(request))


def current_classes(request):
	page_title = "Upcoming Classes"
	current_classes = ClassEvent.objects.filter(publish_date__lte=datetime.date.today()) \
										.filter(expire_date__gte=datetime.date.today()) \
										.order_by('publish_date')

	return render_to_response('education/class_list.html',\
		{'classes':current_classes, 'title':page_title},\
		context_instance = RequestContext(request))

def teacher_criteria(request):
	return render_to_response('education/teacher_criteria.html',{},context_instance = RequestContext(request))

def teacher_expectations(request):
	return render_to_response('education/teacher_expectations.html',{},context_instance = RequestContext(request))
    
def teacher_proposal(request):
	return render_to_response('education/teacher_proposal.html',{},context_instance = RequestContext(request))

def teacher_expectations(request):
	return render_to_response('education/teacher_expectations.html',{},context_instance = RequestContext(request))
    
def teacher_proposal(request):
	return render_to_response('education/teacher_proposal.html',{},context_instance = RequestContext(request))
