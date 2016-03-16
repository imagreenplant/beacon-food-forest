# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='friendly_location',
            field=models.CharField(help_text=b'(Optional) Description of location', max_length=200, blank=True),
        ),
        migrations.AddField(
            model_name='plant',
            name='gps_latitude',
            field=models.DecimalField(default=0.0, help_text=b'(Optional) GPS latitude', max_digits=9, decimal_places=7, blank=True),
        ),
        migrations.AddField(
            model_name='plant',
            name='gps_longitude',
            field=models.DecimalField(default=0.0, help_text=b'(Optional) GPS longitude', max_digits=9, decimal_places=7, blank=True),
        ),
    ]
