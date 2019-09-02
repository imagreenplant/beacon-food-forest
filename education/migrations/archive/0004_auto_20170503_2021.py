# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-04 03:21
from __future__ import unicode_literals

from django.db import migrations


def migrate_markdown_to_richtext(apps, schema_editor):
    ClassEvent = apps.get_model("education", "ClassEvent")

    for classevent in ClassEvent.objects.all():
        classevent.cclass_description = classevent.class_description
        classevent.save()


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0003_classevent_cclass_description'),
    ]

    operations = [
        migrations.RunPython(migrate_markdown_to_richtext)
    ]