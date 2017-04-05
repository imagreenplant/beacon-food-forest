from django.db import models


class AudioTourModel(models.Model):
    title = models.CharField(max_length=200, blank=False, help_text='Title for audio tour area')
    soundcloud_id = models.IntegerField(
        blank=False,
        help_text='Specific Id from SoundCloud service to embed')
    index = models.DecimalField(
        blank=False,
        unique=True,
        decimal_places=2,
        max_digits=4,
        help_text='Locations will be sorted by this index.  \
                    You can use up to 2 decimal places up to 99.99')
