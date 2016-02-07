# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0004_auto_20160204_1628'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='classevent',
            name='announcement_slug',
        ),
        migrations.AddField(
            model_name='classevent',
            name='class_slug_url',
            field=models.CharField(help_text=b'An url friendly short description', max_length=500, blank=True),
        ),
    ]
