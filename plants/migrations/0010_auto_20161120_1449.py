# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import geoposition.fields


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0009_auto_20161010_1019'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='geo_location',
            field=geoposition.fields.GeopositionField(help_text='Exact gps coordinates of location of plant', null=True, blank=True, max_length=42),
        ),
        migrations.AlterField(
            model_name='plant',
            name='coordinates',
            field=models.ForeignKey(blank=True, null=True, to='plants.Coordinates', help_text='Exact gps coordinates of location of plant (Obsolete)'),
        ),
    ]
