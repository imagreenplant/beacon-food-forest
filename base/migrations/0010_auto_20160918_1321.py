# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_announcement_primary_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='headline',
            field=models.CharField(max_length=200, help_text='(Required) The short headline of the announcement', verbose_name='The short headline for the announcement', default='HEADLINE'),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='primary_image',
            field=models.ImageField(blank=True, upload_to='', help_text='(Optional) Background image for announcement', verbose_name='Optional announcement background image'),
        ),
    ]
