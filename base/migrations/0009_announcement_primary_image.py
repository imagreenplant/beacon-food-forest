# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_auto_20160322_0439'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='primary_image',
            field=models.ImageField(help_text=b'(Optional) Background image for announcement', upload_to=b'', verbose_name=b'Optional announcement background image', blank=True),
        ),
    ]
