# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0005_plant_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='MapCategory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('category', models.CharField(help_text='(Optional) On map, main folder to categorize         this plant, e.g. Trees, Shrubs, Herbals.  If left blank, will not be displayed on map.  More folders can be         added in admin interface.', blank=True, max_length=100)),
            ],
            options={
                'verbose_name': 'Map Folder Category',
                'verbose_name_plural': 'Map Folder Category',
            },
        ),
        migrations.CreateModel(
            name='MapSubCategory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('subcategory', models.CharField(help_text='(Optional) On map, subfolder to categorize         this plant, e.g. under trees, we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on         map.  More subfolders can be added', blank=True, max_length=100)),
            ],
            options={
                'verbose_name': 'Map Subfolder Category',
                'verbose_name_plural': 'Map Subfolder Category',
            },
        ),
        migrations.AddField(
            model_name='plant',
            name='map_folder',
            field=models.ForeignKey(help_text='(Optional) On map, main folder to categorize this plant, e.g. Trees, Shrubs,         Herbals.  If left blank, will not be displayed on map.  More folders can be added        in admin interface.', to='plants.MapCategory', blank=True, null=True),
        ),
        migrations.AddField(
            model_name='plant',
            name='map_subfolder',
            field=models.ForeignKey(help_text='(Optional) On map, subfolder to categorize this plant, e.g. under trees,         we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on map.          More subfolders can be added in admin interface.', to='plants.MapSubCategory', blank=True, null=True),
        ),
    ]
