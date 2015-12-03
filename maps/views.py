from django.shortcuts import render
from django.template import RequestContext

def trees(request):
	return render(request, 'maps/map.html', {}, context_instance=RequestContext(request))