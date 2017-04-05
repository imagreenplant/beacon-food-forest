# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0011_location_geo_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='location',
            name='gps_latitude',
        ),
        migrations.RemoveField(
            model_name='location',
            name='gps_longitude',
        ),
        migrations.RemoveField(
            model_name='plant',
            name='coordinates',
        ),
        migrations.DeleteModel(
            name='Coordinates',
        ),
    ]
