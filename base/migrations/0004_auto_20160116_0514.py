# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_announcement'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='announcement_slug',
            field=models.CharField(help_text=b'A short description of announcement', max_length=500, blank=True),
        ),
    ]
