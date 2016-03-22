from django.shortcuts import render
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import Plant
from django.core.exceptions import ObjectDoesNotExist

def index(request):
	page_title = "All Plants at the Beacon Food Forest"
	return render_to_response('plants/all_plants.html',{'title':page_title},context_instance = RequestContext(request))

def detail(request,id):
	try:
		plant = Plant.objects.get(url_slug=id)
	except ObjectDoesNotExist:
		plant = get_object_or_404(Plant, site_code=id)
	return render_to_response('plants/plant_detail.html', {'plant':plant}, context_instance = RequestContext(request))
	
