# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from decimal import Decimal
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0002_classevent_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_description',
            field=django_markdown.models.MarkdownField(blank=True, help_text='Description'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_location',
            field=models.CharField(blank=True, verbose_name='text of location', max_length=300, default='S. Dakota Street and 16th Avenue South'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_location_link',
            field=models.URLField(blank=True, verbose_name='map service link to class', default='https://goo.gl/maps/fpdzyHy5kjr'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_primary_image',
            field=models.ImageField(blank=True, verbose_name='optional class image', upload_to=''),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.SlugField(help_text='An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_date',
            field=models.DateField(verbose_name='date class is held'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_end_time',
            field=models.TimeField(blank=True, verbose_name='time class ends'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='event_start_time',
            field=models.TimeField(blank=True, verbose_name='time class starts'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='expire_date',
            field=models.DateField(verbose_name='date to expire posting', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='price',
            field=models.DecimalField(help_text='Main pricing for event.  Putting in price helps with advertisement', max_digits=6, default=Decimal('0'), decimal_places=2),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='publish_date',
            field=models.DateField(verbose_name='date to publicize posting', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='ticket_link',
            field=models.URLField(blank=True, verbose_name='link to tickets'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='title',
            field=models.CharField(verbose_name='class title', max_length=200),
        ),
    ]
