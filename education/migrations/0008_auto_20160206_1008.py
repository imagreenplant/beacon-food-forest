# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0007_auto_20160206_0800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_slug_url',
            field=models.SlugField(help_text=b'An url friendly short description.  Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', unique=True),
        ),
    ]
