# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django_markdown.models
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coordinates',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('latitude', models.DecimalField(decimal_places=7, help_text='(Required) GPS latitude', default=0.0, max_digits=10)),
                ('longitude', models.DecimalField(decimal_places=7, help_text='(Required) GPS longitude', default=0.0, max_digits=10)),
            ],
            options={
                'verbose_name_plural': 'Coordinates',
                'verbose_name': 'Coordinates',
            },
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('gps_latitude', models.DecimalField(blank=True, decimal_places=7, help_text='(Optional) GPS latitude', default=0.0, max_digits=10)),
                ('gps_longitude', models.DecimalField(blank=True, decimal_places=7, help_text='(Optional) GPS longitude', default=0.0, max_digits=10)),
                ('friendly_location', models.CharField(blank=True, help_text='(Optional) Description of location', max_length=200)),
                ('greater_area', models.CharField(blank=True, help_text='(Optional) Description of area like Phase2 Upper', max_length=200)),
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
                ('category', models.CharField(blank=True, help_text='(Optional) On map, main         folder to categorize this plant, e.g. Trees, Shrubs, Herbals.  If left blank, will not         be displayed on map.  More folders can be added in admin interface.', max_length=100)),
                ('icon', models.ImageField(blank=True, help_text='Primary icon for category.  Please use         svg format for optimum performance.', upload_to='', verbose_name='category icon')),
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
                ('subcategory', models.CharField(blank=True, help_text='(Optional) On map,         subfolder to categorize this plant, e.g. under trees, we would have -- Apples, Nuts,         etc.  If left blank, will not be displayed on map.  More subfolders can be added', max_length=100)),
                ('icon', models.ImageField(blank=True, help_text='Primary icon for subcategory.  Please use         svg format for optimum performance.', upload_to='', verbose_name='subcategory icon')),
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
                ('friendly_name', models.CharField(blank=True, help_text="(Optional) A friendly plant name, like 'Charlie the Apple Tree'", max_length=100)),
                ('latin_name', models.CharField(blank=True, help_text='(Optional) Latin name', max_length=150)),
                ('name', models.CharField(help_text='Common Name (required)', max_length=150)),
                ('text', django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Descriptive text for plant (put anything here)')),
                ('primary_picture', models.ImageField(blank=True, help_text='(Optional) primary image', upload_to='')),
                ('year_planted', models.IntegerField(blank=True, help_text='(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', null=True)),
                ('site_code', models.CharField(help_text='(Required) A unique code for plant, comprised of year planted +         sequential number of plant.  e.g. 1501 (2015,first plant)', max_length=20, unique=True)),
                ('url_slug', models.SlugField(blank=True, help_text='(Optional) An url friendly short description.        Must be unique to each plant e.g julies-quince', unique=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('alive', models.BooleanField(help_text='Is plant alive? Unchecked        declares dead but maintains info for historical purposes.', default=True)),
                ('published', models.BooleanField(help_text='If you want to remove        the plant from being listed on the site, then uncheck this.', default=True)),
                ('category', models.ForeignKey(blank=True, to='plants.MapCategory', null=True, help_text='(Optional) On map, main folder to categorize this plant, e.g. Trees, Shrubs,         Herbals.  If left blank, will not be displayed on map.  More folders can be added        in admin interface.')),
                ('coordinates', models.ForeignKey(blank=True, to='plants.Coordinates', null=True, help_text='Exact gps coordinates of location of plant')),
                ('location', models.ForeignKey(blank=True, to='plants.Location', null=True, help_text='Assign a location (made separately)')),
                ('subcategory', models.ForeignKey(blank=True, to='plants.MapSubCategory', null=True, help_text='(Optional) On map, subfolder to categorize this plant, e.g. under trees,         we would have -- Apples, Nuts, etc.  If left blank, will not be displayed on map.          More subfolders can be added in admin interface.')),
                ('tags', taggit.managers.TaggableManager(through='taggit.TaggedItem', to='taggit.Tag', help_text='A comma-separated list of tags.', verbose_name='Tags')),
            ],
            options={
                'verbose_name_plural': 'plants',
                'verbose_name': 'plant',
            },
        ),
    ]
