from django.contrib import admin
from reversion.admin import VersionAdmin
from plants.models import Plant, Location, MapCategory, MapSubCategory
# from plants.models import MaintenanceEvent, Harvest


@admin.register(Plant)
class PlantAdmin(VersionAdmin):
    list_display = ('name', 'site_code', 'alive',)
    save_as = True


@admin.register(Location)
class LocationAdmin(VersionAdmin):
    list_display = ('friendly_location', 'geo_location')


@admin.register(MapCategory)
class MapCategoryAdmin(VersionAdmin):
    list_display = ('category',)


@admin.register(MapSubCategory)
class MapSubCategoryAdmin(VersionAdmin):
    list_display = ('subcategory',)

# @admin.register(MaintenanceEvent)
# class MaintenanceEventAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'actor', 'plant_affected')

# @admin.register(Harvest)
# class HarvestAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'amount_lbs', 'actor', 'plant_affected')
