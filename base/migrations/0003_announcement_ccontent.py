# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-04 03:18
from __future__ import unicode_literals

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20170414_1551'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='ccontent',
            field=ckeditor.fields.RichTextField(blank=True, help_text='(Optional) Larger content block for announcement'),
        ),
    ]
