from django.shortcuts import render
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import Plant
from django.core.exceptions import ObjectDoesNotExist

def getCanonicalPlantUrl(plant_obj):
	if plant_obj.url_slug:
		return plant_obj.url_slug
	else:
		return plant_obj.site_code

def index(request):
	plants = Plant.objects.all()
	page_title = "All Plants"

	for plant in plants:
		plant.canonical = getCanonicalPlantUrl(plant)

	return render_to_response('plants/all_plants.html',{'title':page_title,'plants':plants}, \
		context_instance = RequestContext(request))

def detail(request,id):
	try:
		plant = Plant.objects.get(url_slug=id)
	except ObjectDoesNotExist:
		plant = get_object_or_404(Plant, site_code=id)

	return render_to_response('plants/plant_detail.html', {'plant':plant, 'plant_url':getCanonicalPlantUrl(plant)},\
		context_instance = RequestContext(request))
	
