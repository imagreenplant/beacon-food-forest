# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0003_auto_20160322_0439'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.SlugField(unique=True, blank=True, help_text='An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.'),
        ),
    ]
