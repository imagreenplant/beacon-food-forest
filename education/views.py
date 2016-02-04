from django.shortcuts import render_to_response
from django.template import RequestContext
from .models import ClassEvent


def index(request):
    return render_to_response('education/education.html',{},context_instance = RequestContext(request))

def class_detail(request,class_slug):
	# if class_slug in classes
	# 	show class page
	# else:
	# 	redirect to list of all classes

	class_event = ClassEvent.objects.get(id=1)
	return render_to_response('education/class_detail.html',{'class':class_event},context_instance = RequestContext(request))


