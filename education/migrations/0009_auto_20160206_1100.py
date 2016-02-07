# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0008_auto_20160206_1008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='expire_date',
            field=models.DateField(default=django.utils.timezone.now, verbose_name=b'date to expire posting'),
        ),
        migrations.AlterField(
            model_name='classevent',
            name='publish_date',
            field=models.DateField(default=django.utils.timezone.now, verbose_name=b'date to publicize posting'),
        ),
    ]
