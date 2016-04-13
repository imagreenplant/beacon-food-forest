# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import datetime
from decimal import Decimal
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0004_auto_20160412_2104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_description',
            field=django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Desciption of class (can be long) with formatting'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_location',
            field=models.CharField(max_length=300, verbose_name='text of location', help_text='(Optional) Describe in text the location of the event', blank=True, default='S. Dakota Street and 16th Avenue South'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_location_link',
            field=models.URLField(verbose_name='Map link to class', help_text='(Optional) Using a service like Google maps, provide a link to location.', blank=True, default='https://goo.gl/maps/fpdzyHy5kjr'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_primary_image',
            field=models.ImageField(verbose_name='optional class image', help_text='(Optional) Primary image for the class', blank=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.SlugField(blank=True, help_text='(Optional) An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_date',
            field=models.DateField(verbose_name='date class is held', help_text='(Required) The date of the event'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_end_time',
            field=models.TimeField(verbose_name='time class ends', help_text='(Required) The end time of the class', blank=True, default=datetime.time(14, 0)),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_start_time',
            field=models.TimeField(verbose_name='time class starts', help_text='(Required) The starting time of the class', blank=True, default=datetime.time(10, 0)),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='expire_date',
            field=models.DateField(verbose_name='date to expire posting', help_text='(Required) The date that you want to unpublish the class on the website', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6, help_text='(Optional) Main pricing for event.  Putting in price helps with advertisement', default=Decimal('0')),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='publish_date',
            field=models.DateField(verbose_name='date to publicize posting', help_text='(Required) The date that you want to publish the class on the website', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='ticket_link',
            field=models.URLField(verbose_name='link to tickets', help_text='(Optional) An url link where to get tickets', blank=True),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='title',
            field=models.CharField(max_length=200, verbose_name='The short title of the class', help_text='(Required) The short title of the class'),
        ),
    ]
