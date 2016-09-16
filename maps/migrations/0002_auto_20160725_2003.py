# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('maps', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kmlmap',
            name='active',
            field=models.BooleanField(help_text='Should this entry be live on the site?', default=True),
        ),
        migrations.AlterField(
            model_name='kmlmap',
            name='description',
            field=models.CharField(help_text='Optional description for map', blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='kmlmap',
            name='kml',
            field=models.FileField(help_text='Upload file here', upload_to='kml/', max_length=200),
        ),
        migrations.AlterField(
            model_name='kmlmap',
            name='name',
            field=models.CharField(help_text='A short descriptive display name', default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='kmlmap',
            name='slug',
            field=models.SlugField(unique=True, help_text="Unique url-friendly text to locate map e.g maps/<here>/ where here is 'fruits' etc"),
        ),
    ]
