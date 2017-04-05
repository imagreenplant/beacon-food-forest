# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0005_auto_20160413_0426'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.SlugField(unique=True, help_text='(Optional) An url friendly short description.              Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', blank=True),
        ),
    ]
