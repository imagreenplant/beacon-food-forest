from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from django.shortcuts import render_to_response
from django.template import RequestContext
 
def index(request):
    # return render_to_response('home/index.html')
    return render(request, 'home/index.html', {})
    # return HttpResponse("Hi, you got there.")