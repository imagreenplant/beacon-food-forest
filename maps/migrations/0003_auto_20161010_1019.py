# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('maps', '0002_auto_20160725_2003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kmlmap',
            name='slug',
            field=models.SlugField(help_text="Unique url-friendly text to locate map e.g                             maps/<here>/ where here is 'fruits' etc", unique=True),
        ),
    ]
