from django.shortcuts import render
from django.template import RequestContext
from .models import KmlMap

def trees(request):
	return render(request, 'maps/map.html', {}, context_instance=RequestContext(request))

def phase2(request):
	return render(request, 'maps/phase2.html', {}, context_instance=RequestContext(request))

def kml_map(request,slug):
	kmap = get_object_or_404(KmlMap, slug=slug)
    return render_to_response('maps/kmap.html', {'kml':kml},context_instance = RequestContext(request))
	
