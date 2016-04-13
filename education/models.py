from django.db import models, IntegrityError, transaction
from django_markdown.models import MarkdownField
import django.utils.timezone as timezone
from django.utils import text as slugify
from decimal import Decimal
import datetime
import random

class ClassEvent(models.Model):
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.class_slug_url:
            self.class_slug_url = slugify.slugify("-".join([self.title,self.event_date.strftime("%B-%d-%Y")]))[:50]
        try:
            # Bug in django requires this statement to catch IntegrityError
            with transaction.atomic():
                super(ClassEvent, self).save(*args, **kwargs)
        except IntegrityError:
            self.class_slug_url = slugify.slugify("-".join([self.title,self.event_date.strftime("%B-%d-%Y"),\
                str(random.randrange(0,100))]))[:50]
            super(ClassEvent, self).save(*args, **kwargs)

    title = models.CharField('The short title of the class', max_length=200, blank=False, help_text='(Required) The short title of the class')
    publish_date = models.DateField('date to publicize posting', blank=False, default=timezone.now, help_text='(Required) The date that you want to publish the class on the website')
    expire_date = models.DateField('date to expire posting', blank=False, default=timezone.now, help_text='(Required) The date that you want to unpublish the class on the website')
    event_date = models.DateField('date class is held', blank=False, help_text='(Required) The date of the event')
    event_start_time = models.TimeField('time class starts', blank=True, default=datetime.time(10, 0, 0), help_text='(Required) The starting time of the class')
    event_end_time = models.TimeField('time class ends', blank=True, default=datetime.time(14, 0, 0), help_text='(Required) The end time of the class')
    ticket_link = models.URLField("link to tickets", blank=True, help_text='(Optional) An url link where to get tickets')
    class_description = MarkdownField(blank=True, help_text="(Optional) Desciption of class (can be long) with formatting")
    class_primary_image = models.ImageField("optional class image", blank=True, help_text='(Optional) Primary image for the class')
    class_location = models.CharField("text of location", max_length=300, blank=True, default="S. Dakota Street and 16th Avenue South", help_text='(Optional) Describe in text the location of the event')
    class_location_link = models.URLField("Map link to class", blank=True, default="https://goo.gl/maps/fpdzyHy5kjr", help_text='(Optional) Using a service like Google maps, provide a link to location.')
    class_slug_url = models.SlugField(unique=True, blank=True, help_text="(Optional) An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.")
    price = models.DecimalField(max_digits=6, decimal_places=2, default=Decimal(0), help_text="(Optional) Main pricing for event.  Putting in price helps with advertisement")
