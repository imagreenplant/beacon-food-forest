# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('committee', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='meeting',
            name='last_modified',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2017, 4, 11, 4, 42, 1, 145593, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='committee',
            name='slug',
            field=models.SlugField(blank=True, help_text='(Optional) An url friendly         short description.', unique=True),
        ),
    ]
