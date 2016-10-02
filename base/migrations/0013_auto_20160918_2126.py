# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_announcement_event_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='event_date',
            field=models.DateField(default=None, help_text='\n        (Optional) If there is a date associated with this announcement, then put it here\n        ', blank=True),
        ),
    ]
