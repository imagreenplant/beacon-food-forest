# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0002_auto_20151001_0547'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, verbose_name=b'class title')),
                ('publish_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'date to publicize')),
                ('unpublish_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'date to publicize')),
                ('event_date', models.DateField(verbose_name=b'date class is held')),
                ('event_start_time', models.TimeField(verbose_name=b'time class starts', blank=True)),
                ('event_end_time', models.TimeField(verbose_name=b'time class ends', blank=True)),
                ('ticket_link', models.URLField(verbose_name=b'link to tickets', blank=True)),
                ('class_description', django_markdown.models.MarkdownField(help_text=b'Description', blank=True)),
                ('class_primary_image', models.ImageField(upload_to=b'', verbose_name=b'optional class image', blank=True)),
                ('lesson_location', models.CharField(default=b'S. Dakota Street and 16th Avenue South', max_length=300, verbose_name=b'text of location')),
                ('lesson_location_link', models.URLField(default=b'https://goo.gl/maps/fpdzyHy5kjr', verbose_name=b'map service link to class')),
            ],
        ),
        migrations.DeleteModel(
            name='Lesson',
        ),
    ]
