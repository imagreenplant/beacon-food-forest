from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import KmlMap
from plants.models import Plant

def kml_map(request,slug):
	kml = get_object_or_404(KmlMap, slug=slug)
	return render_to_response('maps/kmap.html', {'kml':kml}, context_instance=RequestContext(request))

def tag_map(request,tag):
	kml = get_object_or_404(TagMap, tag=tag)
	return render_to_response('maps/tagmap.html', {'tag':tag}, context_instance=RequestContext(request))

def fruitTrees(request):
	# View specific to fruit trees only, as the main featured map
	fruit_trees = Plant.objects.filter(tags__name__in=["edible fruit"])
	tag = "Fruit Trees"
	return render_to_response('maps/tagmap.html', {'plants':fruit_trees, 'tag': tag}, context_instance=RequestContext(request))
	
