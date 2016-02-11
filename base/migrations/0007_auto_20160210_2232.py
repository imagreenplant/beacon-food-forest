# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_download'),
    ]

    operations = [
        migrations.AddField(
            model_name='download',
            name='display_name',
            field=models.CharField(default=b'', help_text=b'A short descriptive display name', max_length=100),
        ),
        migrations.AddField(
            model_name='download',
            name='file_description',
            field=models.CharField(help_text=b'Optional description field (rarely used)', max_length=500, blank=True),
        ),
    ]
