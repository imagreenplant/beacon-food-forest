# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import geoposition.fields


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0010_auto_20161120_1449'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='geo_location',
            field=geoposition.fields.GeopositionField(null=True, help_text='Approximate gps coordinates of location', max_length=42, blank=True),
        ),
    ]
