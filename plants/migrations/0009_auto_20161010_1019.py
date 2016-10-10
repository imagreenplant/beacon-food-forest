# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0008_auto_20160726_2215'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mapcategory',
            name='category',
            field=models.CharField(help_text='(Optional) On map, main         folder to categorize this plant, e.g. Trees, Shrubs, Herbals.  If left blank, will not         be displayed on map.  More folders can be added in admin interface.', blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='mapsubcategory',
            name='subcategory',
            field=models.CharField(help_text='(Optional) On map,         subfolder to categorize this plant, e.g. under trees, we would have -- Apples, Nuts,         etc.  If left blank, will not be displayed on map.  More subfolders can be added', blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='plant',
            name='site_code',
            field=models.CharField(help_text='(Required) A unique code for plant, comprised of year planted +         sequential number of plant.  e.g. 1501 (2015,first plant)', max_length=20, unique=True),
        ),
    ]
