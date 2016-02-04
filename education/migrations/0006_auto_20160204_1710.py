# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0005_auto_20160204_1629'),
    ]

    operations = [
        migrations.RenameField(
            model_name='classevent',
            old_name='unpublish_date',
            new_name='expire_date',
        ),
    ]
