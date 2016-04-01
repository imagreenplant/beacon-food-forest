from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from plants.models import Plant, Location
# from plants.models import MaintenanceEvent, Harvest

@admin.register(Plant)
class PlantAdmin(MarkdownModelAdmin):
	list_display = ('name', 'site_code', 'alive')

@admin.register(Location)
class LocationAdmin(MarkdownModelAdmin):
	list_display = ('friendly_location', 'gps_latitude', 'gps_longitude')

# @admin.register(MaintenanceEvent)
# class MaintenanceEventAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'actor', 'plant_affected')

# @admin.register(Harvest)
# class HarvestAdmin(admin.ModelAdmin):
# 	list_display = ('date', 'amount_lbs', 'actor', 'plant_affected')

