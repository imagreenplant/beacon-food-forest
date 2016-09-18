# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_auto_20160918_2100'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='event_date',
            field=models.DateField(default=django.utils.timezone.now, help_text='\n        (Optional) If there is a date associated with this announcement, then put it here\n        ', blank=True),
        ),
    ]
