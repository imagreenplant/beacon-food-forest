# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_auto_20160918_2126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='event_date',
            field=models.DateField(null=True, help_text='\n        (Optional) If there is a date associated with this announcement, then put it here\n        ', default=None, blank=True),
        ),
    ]
