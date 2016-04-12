# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0002_auto_20160410_0356'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant',
            name='coordinates',
            field=models.ForeignKey(blank=True, to='plants.Coordinates', help_text=b'Exact gps coordinates of location of plant', null=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='location',
            field=models.ForeignKey(blank=True, to='plants.Location', help_text=b'Assign a location (made separately)', null=True),
        ),
    ]
