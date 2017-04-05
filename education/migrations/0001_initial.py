# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from decimal import Decimal
import django.utils.timezone
import datetime
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClassEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('title', models.CharField(help_text='(Required) The short title of the class', verbose_name='The short title of the class', max_length=200)),
                ('publish_date', models.DateField(default=django.utils.timezone.now, help_text='(Required) The date that you want to publish the class on the website', verbose_name='date to publicize posting')),
                ('expire_date', models.DateField(default=django.utils.timezone.now, help_text='(Required) The date that you want to unpublish the class on the website', verbose_name='date to expire posting')),
                ('event_date', models.DateField(help_text='(Required) The date of the event', verbose_name='date class is held')),
                ('event_start_time', models.TimeField(default=datetime.time(10, 0), blank=True, help_text='(Required) The starting time of the class', verbose_name='time class starts')),
                ('event_end_time', models.TimeField(default=datetime.time(14, 0), blank=True, help_text='(Required) The end time of the class', verbose_name='time class ends')),
                ('ticket_link', models.URLField(blank=True, help_text='(Optional) An url link where to get tickets', verbose_name='link to tickets')),
                ('class_description', django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Desciption of class (can be long) with formatting')),
                ('class_primary_image', models.ImageField(upload_to='', blank=True, help_text='(Optional) Primary image for the class', verbose_name='optional class image')),
                ('class_location', models.CharField(default='S. Dakota Street and 16th Avenue South', blank=True, help_text='(Optional) Describe in text the location of the event', verbose_name='text of location', max_length=300)),
                ('class_location_link', models.URLField(default='https://goo.gl/maps/fpdzyHy5kjr', blank=True, help_text='(Optional) Using a service like Google maps, provide a link to location.', verbose_name='Map link to class')),
                ('class_slug_url', models.SlugField(blank=True, help_text='(Optional) An url friendly short description.              Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True)),
                ('price', models.DecimalField(max_digits=6, help_text='(Optional) Main pricing for event.  Putting in price helps with advertisement', default=Decimal('0'), decimal_places=2)),
            ],
        ),
    ]
