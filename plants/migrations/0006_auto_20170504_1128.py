# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-04 18:28
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0005_remove_plant_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plant',
            old_name='ctext',
            new_name='text',
        ),
    ]