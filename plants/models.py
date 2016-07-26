from django.db import models
from django_markdown.models import MarkdownField
from django.utils import text as slugify
import django.utils.timezone as timezone
import datetime
from django.core.urlresolvers import reverse
from taggit.managers import TaggableManager

class Location(models.Model):

    class Meta:
       verbose_name = "Location"
       verbose_name_plural = "Locations"

    def __str__(self):
       return self.friendly_location

    gps_latitude = models.DecimalField(max_digits=10, decimal_places=7, blank=True, default=0.00,help_text='(Optional) GPS latitude')
    gps_longitude = models.DecimalField(max_digits=10, decimal_places=7, blank=True, default=0.00,help_text='(Optional) GPS longitude')
    friendly_location = models.CharField(max_length=200, blank=True, help_text="(Optional) Description of location")
    greater_area = models.CharField(max_length=200, blank=True, help_text="(Optional) Description of area like Phase2 Upper")

class Coordinates(models.Model):

    class Meta:
        verbose_name = "Coordinates"
        verbose_name_plural = "Coordinates"

    def __str__(self):
        return ":".join([str(self.latitude), str(self.longitude)])

    latitude = models.DecimalField(max_digits=10, decimal_places=7, blank=False, default=0.00,help_text='(Required) GPS latitude')
    longitude = models.DecimalField(max_digits=10, decimal_places=7, blank=False, default=0.00,help_text='(Required) GPS longitude')

class MapCategory(models.Model):

    class Meta:
        verbose_name = "Map Folder Category"
        verbose_name_plural = "Map Folder Category"

    def __str__(self):
        return self.category

    category = models.CharField(max_length=100, blank=True, help_text="(Optional) On map, main folder to categorize \
        this plant, e.g. Trees, Shrubs, Herbals.  If left blank, will not be displayed on map.  More folders can be \
        added in admin interface.")

class MapSubCategory(models.Model):

    class Meta:
        verbose_name = "Map Subfolder Category"
        verbose_name_plural = "Map Subfolder Category"

    def __str__(self):
        return self.category

    subcategory = models.CharField(max_length=100, blank=True, help_text="(Optional) On map, subfolder to categorize \
        this plant, e.g. under trees, we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on \
        map.  More subfolders can be added")

class Plant(models.Model):
    """Represents a single plant"""

    class Meta:
       verbose_name = "plant"
       verbose_name_plural = "plants"

    def __str__(self):
       return self.name

    def save(self, *args, **kwargs):
        if not self.url_slug:
            if self.friendly_name:
                self.url_slug = slugify.slugify(self.friendly_name)
            else:
                self.url_slug = self.site_code
        super(Plant, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('plants-detail', args=[str(self.site_code)])

    # Adds tags via django-taggit library --> "taggit"
    tags = TaggableManager()

    friendly_name = models.CharField(max_length=100, blank=True, help_text="(Optional) A friendly plant name, like 'Charlie the Apple Tree'")
    latin_name = models.CharField(max_length=150, blank=True, help_text="(Optional) Latin name")
    name = models.CharField(max_length=150, blank=False, help_text="Common Name (required)")
    text = MarkdownField(blank=True, help_text="(Optional) Descriptive text for plant (put anything here)")
    primary_picture = models.ImageField(help_text="(Optional) primary image", blank=True)
    year_planted = models.IntegerField(null=True, blank=True, help_text='(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.')
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

    # Specific to map
    map_folder = models.ForeignKey(MapCategory,on_delete=models.CASCADE, blank=True, null=True, \
        help_text="(Optional) On map, main folder to categorize this plant, e.g. Trees, Shrubs, \
        Herbals.  If left blank, will not be displayed on map.  More folders can be added\
        in admin interface.")
    map_subfolder = models.ForeignKey(MapSubCategory,on_delete=models.CASCADE, blank=True, null=True, \
        help_text="(Optional) On map, subfolder to categorize this plant, e.g. under trees, \
        we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on map.  \
        More subfolders can be added in admin interface.")
    location = models.ForeignKey(Location,on_delete=models.CASCADE, blank=True, null=True, \
        help_text='Assign a location (made separately)')
    coordinates = models.ForeignKey(Coordinates,on_delete=models.CASCADE, blank=True, null=True, \
        help_text='Exact gps coordinates of location of plant')

# Saving this for another day.  We may not want this.

# class MaintenanceEvent(models.Model):
#   """An object that keeps track of maintenance events on plants"""
#   class Meta:
#    verbose_name = "maintenance event"
#    verbose_name_plural = "maintenance events"

#   def __str__(self):
#    return " ".join(date,actor)
       
#   description = models.TextField(blank=False, help_text="A description of what happened to the plant")
#   date = models.DateField(default=timezone.now, blank=False, help_text="The date of the maintenance.  If you \
#    don't know, just estimate.")
#   actor = models.CharField(max_length=100, blank=True, help_text="(Optional) Who did the maintenance?")
#   plant_affected = models.ForeignKey(Plant,on_delete=models.CASCADE)

# class Harvest(models.Model):
#   """Harvest Event"""
#   class Meta:
#    verbose_name = "harvest event"
#    verbose_name_plural = "harvest events"

#   def __str__(self):
#    return " ".join(date,actor,amount_lbs)

#   date = models.DateField(default=timezone.now, blank=False, help_text="The date of the harvest.  If you \
#    don't know, just estimate.")
#   amount_lbs = models.DecimalField(max_digits=10, decimal_places=2, help_text='Estimated lbs of harvest')
#   description = models.CharField(max_length=500, blank=True, help_text='(Optional) Additional description of the harvest.')
#   actor = models.CharField(max_length=100, blank=True, help_text="(Optional) Who did the maintenance?")
#   plant_affected = models.ForeignKey(Plant,on_delete=models.CASCADE)
