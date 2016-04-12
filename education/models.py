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
            with transaction.atomic():
                super(ClassEvent, self).save(*args, **kwargs)
        except IntegrityError:
            self.class_slug_url = slugify.slugify("-".join([self.title,self.event_date.strftime("%B-%d-%Y"),\
                str(random.randrange(0,100))]))[:50]
            super(ClassEvent, self).save(*args, **kwargs)

    title = models.CharField('class title', max_length=200, blank=False)
    publish_date = models.DateField('date to publicize posting', blank=False, default=timezone.now)
    expire_date = models.DateField('date to expire posting', blank=False, default=timezone.now)
    event_date = models.DateField('date class is held', blank=False)
    event_start_time = models.TimeField('time class starts', blank=True)
    event_end_time = models.TimeField('time class ends', blank=True)
    ticket_link = models.URLField("link to tickets", blank=True)
    class_description = MarkdownField(blank=True, help_text="Description")
    class_primary_image = models.ImageField("optional class image", blank=True)
    class_location = models.CharField("text of location", max_length=300, blank=True, default="S. Dakota Street and 16th Avenue South")
    class_location_link = models.URLField("map service link to class", blank=True, default="https://goo.gl/maps/fpdzyHy5kjr")
    class_slug_url = models.SlugField(unique=True, blank=True, help_text="An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.")
    price = models.DecimalField(max_digits=6, decimal_places=2, default=Decimal(0), help_text="Main pricing for event.  Putting in price helps with advertisement")
