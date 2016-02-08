# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0006_auto_20160204_1710'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_location',
            field=models.CharField(default=b'S. Dakota Street and 16th Avenue South', max_length=300, verbose_name=b'text of location', blank=True),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_location_link',
            field=models.URLField(default=b'https://goo.gl/maps/fpdzyHy5kjr', verbose_name=b'map service link to class', blank=True),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.CharField(help_text=b'An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='expire_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'date to expire posting'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='publish_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=b'date to publicize posting'),
        ),
    ]
