from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import KmlMap

def kml_map(request,slug):
	kml = get_object_or_404(KmlMap, slug=slug)
	return render_to_response('maps/kmap.html', {'kml':kml}, context_instance=RequestContext(request))
	
