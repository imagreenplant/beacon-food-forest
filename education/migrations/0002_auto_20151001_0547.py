# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='lesson_location',
            field=models.CharField(default=b'S. Dakota Street and 16th Avenue South', max_length=300, verbose_name=b'text of location'),
        ),
        migrations.AddField(
            model_name='lesson',
            name='lesson_location_link',
            field=models.URLField(default=b'https://goo.gl/maps/fpdzyHy5kjr', verbose_name=b'map service link to class'),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='event_end_time',
            field=models.TimeField(verbose_name=b'time class ends', blank=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='event_start_time',
            field=models.TimeField(verbose_name=b'time class starts', blank=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='lesson_description',
            field=models.TextField(verbose_name=b'class description', blank=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='lesson_image',
            field=models.ImageField(upload_to=b'', verbose_name=b'optional class image', blank=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='lesson_link',
            field=models.URLField(verbose_name=b'link to class', blank=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='publish_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'date to publicize'),
        ),
    ]
