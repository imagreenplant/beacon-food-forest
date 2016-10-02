from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from .models import KmlMap
from plants.models import Plant


def kml_map(request, slug):
    # The kml map is a useful tool to allow users to upload their KML from
    # Google Earth and have it show online.
    kml = get_object_or_404(KmlMap, slug=slug)
    return render_to_response(
        'maps/kmap.html', {'kml': kml}, context_instance=RequestContext(request))


def tag_map(request, tag):
    # The tag map is a map based on a tag cloud.  I added this but not sure
    # how to proceed design wise yet.
    if tag in Plant.tags.slugs():
        # Makes assumption can filter on slug.  May need to convert filter query
        tagged_plants = Plant.objects.filter(tags__name__in=[tag])
        # Find a way to convert to SEO readable title
        site_title_append = tag
    return render_to_response(
        'maps/tagmap.html',
        {'site_title_append': site_title_append,
         'tagged_plants': tagged_plants},
        context_instance=RequestContext(request))


def fruitTrees(request):
    # View specific to fruit trees only, as the main featured map
    fruit_trees = Plant.objects.filter(category__category__exact="Trees")
    site_title_append = "Trees"
    return render_to_response(
        'maps/categorymap.html',
        {'plants': fruit_trees, 'site_title_append': site_title_append},
        context_instance=RequestContext(request))
