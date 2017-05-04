# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-04 03:21
from __future__ import unicode_literals

from django.db import migrations


def migrate_markdown_to_richtext(apps, schema_editor):
    Plant = apps.get_model("plants", "Plant")

    for plant in Plant.objects.all():
        plant.ctext = plant.text
        plant.save()


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0003_plant_ctext'),
    ]

    operations = [
        migrations.RunPython(migrate_markdown_to_richtext)
    ]
