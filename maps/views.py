from django.shortcuts import render

def trees(request):
	return render(request, 'maps/map.html', {})