# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0006_auto_20160726_2117'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plant',
            old_name='map_folder',
            new_name='category',
        ),
        migrations.RenameField(
            model_name='plant',
            old_name='map_subfolder',
            new_name='subcategory',
        ),
    ]
