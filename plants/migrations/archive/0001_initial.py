# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import geoposition.fields
import taggit.managers
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('friendly_location', models.CharField(help_text='(Optional) Description of location', blank=True, max_length=200)),
                ('greater_area', models.CharField(help_text='(Optional) Description of area like Phase2 Upper', blank=True, max_length=200)),
                ('geo_location', geoposition.fields.GeopositionField(help_text='Approximate gps coordinates of location', blank=True, max_length=42, null=True)),
            ],
            options={
                'verbose_name_plural': 'Locations',
                'verbose_name': 'Location',
            },
        ),
        migrations.CreateModel(
            name='MapCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('category', models.CharField(help_text='(Optional) On map, main         folder to categorize this plant, e.g. Trees, Shrubs, Herbals.  If left blank, will not         be displayed on map.  More folders can be added in admin interface.', blank=True, max_length=100)),
                ('icon', models.ImageField(help_text='Primary icon for category.  Please use         svg format for optimum performance.', blank=True, verbose_name='category icon', upload_to='')),
            ],
            options={
                'verbose_name_plural': 'Map Folder Category',
                'verbose_name': 'Map Folder Category',
            },
        ),
        migrations.CreateModel(
            name='MapSubCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('subcategory', models.CharField(help_text='(Optional) On map,         subfolder to categorize this plant, e.g. under trees, we would have -- Apples, Nuts,         etc.  If left blank, will not be displayed on map.  More subfolders can be added', blank=True, max_length=100)),
                ('icon', models.ImageField(help_text='Primary icon for subcategory.  Please use         svg format for optimum performance.', blank=True, verbose_name='subcategory icon', upload_to='')),
            ],
            options={
                'verbose_name_plural': 'Map Subfolder Category',
                'verbose_name': 'Map Subfolder Category',
            },
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('friendly_name', models.CharField(help_text="(Optional) A friendly plant name, like 'Charlie the Apple Tree'", blank=True, max_length=100)),
                ('latin_name', models.CharField(help_text='(Optional) Latin name', blank=True, max_length=150)),
                ('name', models.CharField(help_text='Common Name (required)', max_length=150)),
                ('text', django_markdown.models.MarkdownField(help_text='(Optional) Descriptive text for plant (put anything here)', blank=True)),
                ('primary_picture', models.ImageField(help_text='(Optional) primary image', blank=True, upload_to='')),
                ('year_planted', models.IntegerField(help_text='(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', blank=True, null=True)),
                ('site_code', models.CharField(unique=True, help_text='(Required) A unique code for plant, comprised of year planted +         sequential number of plant.  e.g. 1501 (2015,first plant)', max_length=20)),
                ('url_slug', models.SlugField(unique=True, help_text='(Optional) An url friendly short description.        Must be unique to each plant e.g julies-quince', blank=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('alive', models.BooleanField(help_text='Is plant alive? Unchecked        declares dead but maintains info for historical purposes.', default=True)),
                ('published', models.BooleanField(help_text='If you want to remove        the plant from being listed on the site, then uncheck this.', default=True)),
                ('geo_location', geoposition.fields.GeopositionField(help_text='Exact gps coordinates of location of plant', blank=True, max_length=42, null=True)),
                ('category', models.ForeignKey(blank=True, help_text='(Optional) On map, main folder to categorize this plant, e.g. Trees, Shrubs,         Herbals.  If left blank, will not be displayed on map.  More folders can be added        in admin interface.', to='plants.MapCategory', null=True)),
                ('location', models.ForeignKey(blank=True, help_text='Assign a location (made separately)', to='plants.Location', null=True)),
                ('subcategory', models.ForeignKey(blank=True, help_text='(Optional) On map, subfolder to categorize this plant, e.g. under trees,         we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on map.          More subfolders can be added in admin interface.', to='plants.MapSubCategory', null=True)),
                ('tags', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', verbose_name='Tags', to='taggit.Tag', through='taggit.TaggedItem')),
            ],
            options={
                'verbose_name_plural': 'plants',
                'verbose_name': 'plant',
            },
        ),
    ]
