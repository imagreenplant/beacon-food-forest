from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import Plant
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from plants.serializers import PlantSerializer


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'appication/json'
        super(JSONResponse, self).__init__(content, **kwargs)


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

    return render_to_response('plants/all_plants.html', {'title': page_title, 'plants': plants},
                              context_instance=RequestContext(request))


def detail(request, id):
    try:
        plant = Plant.objects.get(url_slug=id)
    except ObjectDoesNotExist:
        plant = get_object_or_404(Plant, site_code=id)

    return render_to_response('plants/plant_detail.html',
                              {'plant': plant, 'plant_url': getCanonicalPlantUrl(plant)},
                              context_instance=RequestContext(request))


def index_json(request):
    if request.method == 'GET':
        plants = Plant.objects.all()
        serializer = PlantSerializer(plants, many=True)
        return JSONResponse(serializer.data)

    else:
        pass
