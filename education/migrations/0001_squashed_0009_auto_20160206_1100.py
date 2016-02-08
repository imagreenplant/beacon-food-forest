# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    replaces = [(b'education', '0001_initial'), (b'education', '0002_auto_20151001_0547'), (b'education', '0003_auto_20160204_1626'), (b'education', '0004_auto_20160204_1628'), (b'education', '0005_auto_20160204_1629'), (b'education', '0006_auto_20160204_1710'), (b'education', '0007_auto_20160206_0800'), (b'education', '0008_auto_20160206_1008'), (b'education', '0009_auto_20160206_1100')]

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'class title')),
                ('publish_date', models.DateField(default=django.utils.timezone.now, verbose_name=b'date to publicize posting')),
                ('expire_date', models.DateField(default=django.utils.timezone.now, verbose_name=b'date to expire posting')),
                ('event_date', models.DateField(verbose_name=b'date class is held')),
                ('event_start_time', models.TimeField(verbose_name=b'time class starts', blank=True)),
                ('event_end_time', models.TimeField(verbose_name=b'time class ends', blank=True)),
                ('ticket_link', models.URLField(verbose_name=b'link to tickets', blank=True)),
                ('class_description', django_markdown.models.MarkdownField(help_text=b'Description', blank=True)),
                ('class_primary_image', models.ImageField(upload_to=b'', verbose_name=b'optional class image', blank=True)),
                ('class_location', models.CharField(default=b'S. Dakota Street and 16th Avenue South', max_length=300, verbose_name=b'text of location', blank=True)),
                ('class_location_link', models.URLField(default=b'https://goo.gl/maps/fpdzyHy5kjr', verbose_name=b'map service link to class', blank=True)),
                ('class_slug_url', models.SlugField(help_text=b'An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True)),
            ],
        ),
    ]
