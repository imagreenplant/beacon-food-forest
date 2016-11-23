# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_auto_20160920_1146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='override',
            field=models.BooleanField(default=True, help_text='(Optional) Override. If box is unchecked,             announcement will immediately turn off.'),
        ),
    ]
