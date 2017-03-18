from django.db import models


class AudioTourModel(models.Model):
    title = models.CharField(max_length=200, blank=False, help_text='Title for audio tour area')
    embed_markup = models.TextField(
        blank=False,
        help_text='Embed code for Sound cloud audio playback')
    index = models.DecimalField(
        blank=False,
        unique=True,
        decimal_places=2,
        max_digits=4,
        help_text='Locations will be sorted by this index.  \
                    You can use up to 2 decimal places up to 99.99')
    image = models.ImageField(blank=True, help_text='Image for audio tour location')
