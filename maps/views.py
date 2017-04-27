from django.shortcuts import render, get_object_or_404
from .models import KmlMap
from plants.models import Plant, MapCategory


def kml_map(request, slug):
    # The kml map is a useful tool to allow users to upload their KML from
    # Google Earth and have it show online.
    kml = get_object_or_404(KmlMap, slug=slug)
    return render(request, 'maps/kmap.html', {'kml': kml})


def tag_map(request, tag):
    # The tag map is a map based on a tag cloud.  I added this but not sure
    # how to proceed design wise yet.
    if tag in Plant.tags.slugs():
        # Makes assumption can filter on slug.  May need to convert filter query
        tagged_plants = Plant.objects.filter(tags__name__in=[tag])
        # Find a way to convert to SEO readable title
        site_title_append = tag
    return render(request, 'maps/tagmap.html',
                  {'site_title_append': site_title_append,
                   'tagged_plants': tagged_plants})


def fruitTrees(request):
    # View specific to fruit trees only, as the main featured map
    fruit_trees = Plant.objects.\
        filter(category__category__exact="Trees").\
        filter(geo_location__isnull=False)
    site_title_append = "Trees"
    return render(request, 'maps/categorymap.html',
                  {'plants': fruit_trees, 'site_title_append': site_title_append})


def categories(request):
    # Grabs all plant categories and lists plants within
    site_title_append = "Plants by Category"

    categories = MapCategory.objects.all()
    categorical_data = {}
    for category in categories:
        plants_by_category = category.plant_set.all()
        if plants_by_category:
            categorical_data[category.category] = plants_by_category

    return render(request, 'maps/category_map_list.html',
                  {'categories': categorical_data, 'site_title_append': site_title_append})


def itemsByCategory(request):
    site_title_append = "Plants by Category"
    plants = Plant.objects.all()

    return render(request,
                  'maps/category_map_list_data.html',
                  {'plants': plants, 'site_title_append': site_title_append})


def serialized_categories():
    # This function needs to return a serialized category response to setup React properly
    pass


def reactMap(request):
    # View specific to fruit trees only, as the main featured map
    fruit_trees = Plant.objects.\
        filter(category__category__exact="Trees").\
        filter(geo_location__isnull=False)
    site_title_append = "Trees"
    return render(request, 'maps/reactmap.html',
                  {'plants': fruit_trees, 'site_title_append': site_title_append})
