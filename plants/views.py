from django.shortcuts import render, get_object_or_404
from django.template import RequestContext
from .models import Plant
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from plants.serializers import PlantSerializer


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

    return render(request, 'plants/all_plants.html', {'title': page_title, 'plants': plants},
                              context)


def detail(request, id):
    try:
        plant = Plant.objects.get(url_slug=id)
    except ObjectDoesNotExist:
        plant = get_object_or_404(Plant, site_code=id)

    return render(request, 'plants/plant_detail.html',
                              {'plant': plant, 'plant_url': getCanonicalPlantUrl(plant)},
                              context)


@api_view(['GET'])
def index_json(request):
    if request.method == 'GET':
        plants = Plant.objects.all()
        serializer = PlantSerializer(plants, many=True)
        return Response(serializer.data)
