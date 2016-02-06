from django.db import models
from django_markdown.models import MarkdownField
import django.utils.timezone as timezone
import datetime

class ClassEvent(models.Model):
	title = models.CharField('class title', max_length=200, blank=False)
	publish_date = models.DateTimeField('date to publicize posting', blank=False, default=timezone.now)
	expire_date = models.DateTimeField('date to expire posting', blank=False, default=timezone.now)
	event_date = models.DateField('date class is held', blank=False)
	event_start_time = models.TimeField('time class starts', blank=True)
	event_end_time = models.TimeField('time class ends', blank=True)
	ticket_link = models.URLField("link to tickets", blank=True)
	class_description = MarkdownField(blank=True, help_text="Description")
	class_primary_image = models.ImageField("optional class image", blank=True)
	class_location = models.CharField("text of location", max_length=300, blank=True, default="S. Dakota Street and 16th Avenue South")
	class_location_link = models.URLField("map service link to class", blank=True, default="https://goo.gl/maps/fpdzyHy5kjr")
	class_slug_url = models.CharField(max_length=500, blank=False, unique=True, help_text="An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.")

	# Note: must use Python3 for __str__ to work
	def __str__(self):
		return self.title


