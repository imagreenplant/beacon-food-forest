# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-14 22:51
from __future__ import unicode_literals

from django.db import migrations
import markdownx.models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classevent',
            name='class_description',
            field=markdownx.models.MarkdownxField(blank=True, help_text='(Optional) Desciption of class (can be long) with formatting'),
        ),
    ]
