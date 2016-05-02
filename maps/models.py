from django.db import models

class KmlMap(models.Model):
    kml = models.FileField(upload_to="kml/",max_length=200, help_text='Upload file here')
    active = models.BooleanField(blank=False, default=True, help_text='Should this entry be live on the site?')
    name = models.CharField(max_length=100, blank=False, default="", help_text="A short descriptive display name")
    description = models.CharField(max_length=500, blank=True, help_text="Optional description for map")
    slug = models.SlugField(unique=True, blank=False, help_text="Unique url-friendly text to locate map e.g maps/<here>/ where here is 'fruits' etc")

    def __str__(self):
        return self.display_name

