# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='KmlMap',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('kml', models.FileField(help_text='Upload file here', upload_to='kml/', max_length=200)),
                ('active', models.BooleanField(help_text='Should this entry be live on the site?', default=True)),
                ('name', models.CharField(help_text='A short descriptive display name', default='', max_length=100)),
                ('description', models.CharField(blank=True, help_text='Optional description for map', max_length=500)),
                ('slug', models.SlugField(help_text="Unique url-friendly text to locate map e.g                             maps/<here>/ where here is 'fruits' etc", unique=True)),
            ],
        ),
    ]
