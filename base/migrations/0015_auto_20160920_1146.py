# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_auto_20160918_2129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='override',
            field=models.BooleanField(help_text='(Optional) Override. If box is unchecked, announcement will immediately turn off.', default=True),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='slug',
            field=models.CharField(help_text='A short description of announcement', max_length=500, blank=True, unique=True),
        ),
    ]
