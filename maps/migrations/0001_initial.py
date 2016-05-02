# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='KmlMap',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('kml', models.FileField(help_text=b'Upload file here', max_length=200, upload_to=b'kml/')),
                ('active', models.BooleanField(default=True, help_text=b'Should this entry be live on the site?')),
                ('name', models.CharField(default=b'', help_text=b'A short descriptive display name', max_length=100)),
                ('description', models.CharField(help_text=b'Optional description for map', max_length=500, blank=True)),
                ('slug', models.SlugField(help_text=b"Unique url-friendly text to locate map e.g maps/<here>/ where here is 'fruits' etc", unique=True)),
            ],
        ),
    ]
