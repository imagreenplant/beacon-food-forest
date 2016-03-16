from django.contrib import admin
from django_markdown.admin import MarkdownModelAdmin
from plants.models import Plant, MaintenanceEvent, Harvest

@admin.register(Plant)
class PlantAdmin(MarkdownModelAdmin):
	list_display = ('name', 'site_code', 'alive')

@admin.register(MaintenanceEvent)
class MaintenanceEventAdmin(admin.ModelAdmin):
	list_display = ('date', 'actor', 'plant_affected')

@admin.register(Harvest)
class HarvestAdmin(admin.ModelAdmin):
	list_display = ('date', 'amount_lbs', 'actor', 'plant_affected')

