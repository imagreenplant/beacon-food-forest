# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_auto_20160918_1321'),
    ]

    operations = [
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_content',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_expire_date',
            new_name='expire_date',
        ),
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_link',
            new_name='link',
        ),
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_publish_override',
            new_name='override',
        ),
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_publish_date',
            new_name='publish_date',
        ),
        migrations.RenameField(
            model_name='announcement',
            old_name='announcement_slug',
            new_name='slug',
        ),
    ]
