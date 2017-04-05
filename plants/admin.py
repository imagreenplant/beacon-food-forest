from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from plants.models import Plant, Location, MapCategory, MapSubCategory
# from plants.models import MaintenanceEvent, Harvest


@admin.register(Plant)
class PlantAdmin(MarkdownModelAdmin):
    list_display = ('name', 'site_code', 'alive',)
    save_as = True


@admin.register(Location)
class LocationAdmin(MarkdownModelAdmin):
    list_display = ('friendly_location', 'geo_location')


@admin.register(MapCategory)
class MapCategoryAdmin(admin.ModelAdmin):
    list_display = ('category',)


@admin.register(MapSubCategory)
class MapSubCategoryAdmin(admin.ModelAdmin):
    list_display = ('subcategory',)

# @admin.register(MaintenanceEvent)
# class MaintenanceEventAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'actor', 'plant_affected')

# @admin.register(Harvest)
# class HarvestAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'amount_lbs', 'actor', 'plant_affected')
