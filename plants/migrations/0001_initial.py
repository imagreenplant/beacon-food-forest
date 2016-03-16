# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Harvest',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField(default=django.utils.timezone.now, help_text=b"The date of the harvest.  If you \t\tdon't know, just estimate.")),
                ('amount_lbs', models.DecimalField(help_text=b'Estimated lbs of harvest', max_digits=10, decimal_places=2)),
                ('description', models.CharField(help_text=b'(Optional) Additional description of the harvest.', max_length=500, blank=True)),
                ('actor', models.CharField(help_text=b'(Optional) Who did the maintenance?', max_length=100, blank=True)),
            ],
            options={
                'verbose_name': 'harvest event',
                'verbose_name_plural': 'harvest events',
            },
        ),
        migrations.CreateModel(
            name='MaintenanceEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('description', models.TextField(help_text=b'A description of what happened to the plant')),
                ('date', models.DateField(default=django.utils.timezone.now, help_text=b"The date of the maintenance.  If you \t\tdon't know, just estimate.")),
                ('actor', models.CharField(help_text=b'(Optional) Who did the maintenance?', max_length=100, blank=True)),
            ],
            options={
                'verbose_name': 'maintenance event',
                'verbose_name_plural': 'maintenance events',
            },
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('friendly_name', models.CharField(help_text=b"(Optional) A friendly plant name, like 'Charlie the Apple Tree'", max_length=100, blank=True)),
                ('friendly_name_author', models.CharField(help_text=b'(Optional) The author of the friendly plant name', max_length=100, blank=True)),
                ('latin_name', models.CharField(help_text=b'(Optional) Latin name', max_length=150, blank=True)),
                ('name', models.CharField(help_text=b'Common Name (required)', max_length=150)),
                ('text', django_markdown.models.MarkdownField(help_text=b'(Optional) Descriptive text for plant (put anything here)', blank=True)),
                ('primary_picture', models.ImageField(help_text=b'(Optional) primary image', upload_to=b'', blank=True)),
                ('year_planted', models.IntegerField(help_text=b'(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', blank=True)),
                ('site_code', models.CharField(help_text=b'(Required) A unique \t\tcode for plant, comprised of year planted + sequential number of plant.  e.g. 1501 (2015,first plant)', unique=True, max_length=20)),
                ('url_slug', models.SlugField(help_text=b'(Optional) An url friendly short description. \t\tMust be unique to each plant e.g julies-quince', unique=True, blank=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('alive', models.BooleanField(default=True, help_text=b'Is plant alive? Unchecked \t\tdeclares dead but maintains info for historical purposes.')),
                ('published', models.BooleanField(default=True, help_text=b'If you want to remove \t\tthe plant from being listed on the site, then uncheck this.')),
            ],
            options={
                'verbose_name': 'plant',
                'verbose_name_plural': 'plants',
            },
        ),
        migrations.AddField(
            model_name='maintenanceevent',
            name='plant_affected',
            field=models.ForeignKey(to='plants.Plant'),
        ),
        migrations.AddField(
            model_name='harvest',
            name='plant_affected',
            field=models.ForeignKey(to='plants.Plant'),
        ),
    ]
