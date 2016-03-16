from django.db import models
from django_markdown.models import MarkdownField
import django.utils.timezone as timezone
import datetime

class Plant(models.Model):
	"""Represents a single plant"""

	class Meta:
		verbose_name = "plant"
		verbose_name_plural = "plants"

	def __str__(self):
		pass

	friendly_name = models.CharField(max_length=100, blank=True, help_text="(Optional) A friendly plant name, like 'Charlie the Apple Tree'")
	friendly_name_author = models.CharField(max_length=100, blank=True, help_text="(Optional) The author of the friendly plant name")
	latin_name = models.CharField(max_length=150, blank=True, help_text="(Optional) Latin name")
	name = models.CharField(max_length=150, blank=False, help_text="Common Name (required)")
	text = MarkdownField(blank=True, help_text="(Optional) Descriptive text for plant (put anything here)")
	primary_picture = models.ImageField(help_text="(Optional) primary image", blank=True)
	year_planted = models.IntegerField(blank=True, help_text='(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.')
	site_code = models.CharField(max_length=20, blank=False, unique=True,help_text="(Required) A unique \
		code for plant, comprised of year planted + sequential number of plant.  e.g. 1501 (2015,first plant)")
	url_slug = models.SlugField(blank=True, unique=True, help_text="(Optional) An url friendly short description. \
		Must be unique to each plant e.g julies-quince")
	last_modified = models.DateTimeField(auto_now=True, auto_now_add=False)
	created = models.DateTimeField(auto_now=False, auto_now_add=True)
	alive = models.BooleanField(blank=False, default=True, help_text="Is plant alive? Unchecked \
		declares dead but maintains info for historical purposes.")
	published = models.BooleanField(blank=False, default=True, help_text="If you want to remove \
		the plant from being listed on the site, then uncheck this.")

class MaintenanceEvent(models.Model):
	"""An object that keeps track of maintenance events on plants"""
	class Meta:
		verbose_name = "maintenance event"
		verbose_name_plural = "maintenance events"

	def __str__(self):
		pass
		
	description = models.TextField(blank=False, help_text="A description of what happened to the plant")
	date = models.DateField(default=timezone.now, blank=False, help_text="The date of the maintenance.  If you \
		don't know, just estimate.")
	actor = models.CharField(max_length=100, blank=True, help_text="(Optional) Who did the maintenance?")
	plant_affected = models.ForeignKey(Plant,on_delete=models.CASCADE)

class Harvest(models.Model):
	"""Harvest Event"""
	class Meta:
		verbose_name = "harvest event"
		verbose_name_plural = "harvest events"

	def __str__(self):
		pass

	date = models.DateField(default=timezone.now, blank=False, help_text="The date of the harvest.  If you \
		don't know, just estimate.")
	amount_lbs = models.DecimalField(max_digits=10, decimal_places=2, help_text='Estimated lbs of harvest')
	description = models.CharField(max_length=500, blank=True, help_text='(Optional) Additional description of the harvest.')
	actor = models.CharField(max_length=100, blank=True, help_text="(Optional) Who did the maintenance?")
	plant_affected = models.ForeignKey(Plant,on_delete=models.CASCADE)
	
		