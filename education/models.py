from django.db import models
from django.utils import timezone

class Lesson(models.Model):
	lesson_title = models.CharField('class title', max_length=200, blank=False)
	publish_date = models.DateTimeField('date to publicize', default=timezone.now)
	event_date = models.DateField('date class is held', blank=False)
	event_start_time = models.TimeField('time class starts', blank=True)
	event_end_time = models.TimeField('time class ends', blank=True)
	lesson_link = models.URLField("link to class", blank=True)
	lesson_description = models.TextField("class description", blank=True)
	lesson_image = models.ImageField("optional class image", blank=True)
	lesson_location = models.CharField("text of location", max_length=300, default="S. Dakota Street and 16th Avenue South")
	lesson_location_link = models.URLField("map service link to class", default="https://goo.gl/maps/fpdzyHy5kjr")

	# Note: must use Python3 for __str__ to work
	def __str__(self):
		return self.lesson_title


