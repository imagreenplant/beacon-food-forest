# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0003_auto_20160410_0426'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plant',
            name='friendly_name_author',
        ),
        migrations.AlterField(
            model_name='coordinates',
            name='latitude',
            field=models.DecimalField(help_text='(Required) GPS latitude', decimal_places=7, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='coordinates',
            name='longitude',
            field=models.DecimalField(help_text='(Required) GPS longitude', decimal_places=7, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='location',
            name='friendly_location',
            field=models.CharField(help_text='(Optional) Description of location', max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='gps_latitude',
            field=models.DecimalField(help_text='(Optional) GPS latitude', decimal_places=7, max_digits=10, default=0.0, blank=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='gps_longitude',
            field=models.DecimalField(help_text='(Optional) GPS longitude', decimal_places=7, max_digits=10, default=0.0, blank=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='greater_area',
            field=models.CharField(help_text='(Optional) Description of area like Phase2 Upper', max_length=200, blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='alive',
            field=models.BooleanField(help_text='Is plant alive? Unchecked        declares dead but maintains info for historical purposes.', default=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='coordinates',
            field=models.ForeignKey(null=True, help_text='Exact gps coordinates of location of plant', to='plants.Coordinates', blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='friendly_name',
            field=models.CharField(help_text="(Optional) A friendly plant name, like 'Charlie the Apple Tree'", max_length=100, blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='latin_name',
            field=models.CharField(help_text='(Optional) Latin name', max_length=150, blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='location',
            field=models.ForeignKey(null=True, help_text='Assign a location (made separately)', to='plants.Location', blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='name',
            field=models.CharField(help_text='Common Name (required)', max_length=150),
        ),
        migrations.AlterField(
            model_name='plant',
            name='primary_picture',
            field=models.ImageField(help_text='(Optional) primary image', upload_to='', blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='published',
            field=models.BooleanField(help_text='If you want to remove        the plant from being listed on the site, then uncheck this.', default=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='site_code',
            field=models.CharField(help_text='(Required) A unique        code for plant, comprised of year planted + sequential number of plant.  e.g. 1501 (2015,first plant)', unique=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='plant',
            name='text',
            field=django_markdown.models.MarkdownField(help_text='(Optional) Descriptive text for plant (put anything here)', blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='url_slug',
            field=models.SlugField(help_text='(Optional) An url friendly short description.        Must be unique to each plant e.g julies-quince', unique=True, blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='year_planted',
            field=models.IntegerField(help_text='(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', null=True, blank=True),
        ),
    ]
