# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coordinates',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('latitude', models.DecimalField(default=0.0, help_text=b'(Required) GPS latitude', max_digits=10, decimal_places=7)),
                ('longitude', models.DecimalField(default=0.0, help_text=b'(Required) GPS longitude', max_digits=10, decimal_places=7)),
            ],
            options={
                'verbose_name': 'Coordinates',
                'verbose_name_plural': 'Coordinates',
            },
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('gps_latitude', models.DecimalField(default=0.0, help_text=b'(Optional) GPS latitude', max_digits=10, decimal_places=7, blank=True)),
                ('gps_longitude', models.DecimalField(default=0.0, help_text=b'(Optional) GPS longitude', max_digits=10, decimal_places=7, blank=True)),
                ('friendly_location', models.CharField(help_text=b'(Optional) Description of location', max_length=200, blank=True)),
                ('greater_area', models.CharField(help_text=b'(Optional) Description of area like Phase2 Upper', max_length=200, blank=True)),
            ],
            options={
                'verbose_name': 'Location',
                'verbose_name_plural': 'Locations',
            },
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('friendly_name', models.CharField(help_text=b"(Optional) A friendly plant name, like 'Charlie the Apple Tree'", max_length=100, blank=True)),
                ('friendly_name_author', models.CharField(help_text=b'(Optional) The author of the friendly plant name', max_length=100, blank=True)),
                ('latin_name', models.CharField(help_text=b'(Optional) Latin name', max_length=150, blank=True)),
                ('name', models.CharField(help_text=b'Common Name (required)', max_length=150)),
                ('text', django_markdown.models.MarkdownField(help_text=b'(Optional) Descriptive text for plant (put anything here)', blank=True)),
                ('primary_picture', models.ImageField(help_text=b'(Optional) primary image', upload_to=b'', blank=True)),
                ('year_planted', models.IntegerField(help_text=b'(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', null=True, blank=True)),
                ('site_code', models.CharField(help_text=b'(Required) A unique        code for plant, comprised of year planted + sequential number of plant.  e.g. 1501 (2015,first plant)', unique=True, max_length=20)),
                ('url_slug', models.SlugField(help_text=b'(Optional) An url friendly short description.        Must be unique to each plant e.g julies-quince', unique=True, blank=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('alive', models.BooleanField(default=True, help_text=b'Is plant alive? Unchecked        declares dead but maintains info for historical purposes.')),
                ('published', models.BooleanField(default=True, help_text=b'If you want to remove        the plant from being listed on the site, then uncheck this.')),
                ('coordinates', models.ForeignKey(default=b'', blank=True, to='plants.Coordinates', help_text=b'Exact gps coordinates of location of plant')),
                ('location', models.ForeignKey(default=b'', blank=True, to='plants.Location', help_text=b'Assign a location (made separately)')),
            ],
            options={
                'verbose_name': 'plant',
                'verbose_name_plural': 'plants',
            },
        ),
    ]
