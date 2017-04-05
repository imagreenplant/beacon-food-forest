# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import geoposition.fields


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0001_initial'),
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
        migrations.AddField(
            model_name='location',
            name='geo_location',
            field=geoposition.fields.GeopositionField(help_text='Approximate gps coordinates of location', blank=True, null=True, max_length=42),
        ),
        migrations.AddField(
            model_name='plant',
            name='geo_location',
            field=geoposition.fields.GeopositionField(help_text='Exact gps coordinates of location of plant', blank=True, null=True, max_length=42),
        ),
        migrations.DeleteModel(
            name='Coordinates',
        ),
    ]
