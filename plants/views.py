from django.shortcuts import render
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import Plant
from django.core.exceptions import ObjectDoesNotExist

def index(request):
	plants = Plant.objects.all()
	page_title = "All Plants at the Beacon Food Forest"
	return render_to_response('plants/all_plants.html',{'title':page_title,'plants':plants}, \
		context_instance = RequestContext(request))

def detail(request,id):
	try:
		plant = Plant.objects.get(url_slug=id)
	except ObjectDoesNotExist:
		plant = get_object_or_404(Plant, site_code=id)

	if plant.url_slug:
		plant_url = plant.url_slug
	else:
		plant_url = plant.site_code

	return render_to_response('plants/plant_detail.html', {'plant':plant, 'plant_url':plant_url},\
		context_instance = RequestContext(request))
	
