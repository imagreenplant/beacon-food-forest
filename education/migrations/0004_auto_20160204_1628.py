# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0003_auto_20160204_1626'),
    ]

    operations = [
        migrations.RenameField(
            model_name='classevent',
            old_name='lesson_location',
            new_name='class_location',
        ),
        migrations.RenameField(
            model_name='classevent',
            old_name='lesson_location_link',
            new_name='class_location_link',
        ),
        migrations.AddField(
            model_name='classevent',
            name='announcement_slug',
            field=models.CharField(help_text=b'A short description of announcement', max_length=500, blank=True),
        ),
    ]
