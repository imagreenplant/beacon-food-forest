# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coordinates',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('latitude', models.DecimalField(default=0.0, help_text=b'(Required) GPS latitude', max_digits=10, decimal_places=7)),
                ('longitude', models.DecimalField(default=0.0, help_text=b'(Required) GPS longitude', max_digits=10, decimal_places=7)),
            ],
            options={
                'verbose_name': 'Coordinates',
                'verbose_name_plural': 'Coordinates',
            },
        ),
        migrations.AlterField(
            model_name='plant',
            name='alive',
            field=models.BooleanField(default=True, help_text=b'Is plant alive? Unchecked        declares dead but maintains info for historical purposes.'),
        ),
        migrations.AlterField(
            model_name='plant',
            name='published',
            field=models.BooleanField(default=True, help_text=b'If you want to remove        the plant from being listed on the site, then uncheck this.'),
        ),
        migrations.AlterField(
            model_name='plant',
            name='site_code',
            field=models.CharField(help_text=b'(Required) A unique        code for plant, comprised of year planted + sequential number of plant.  e.g. 1501 (2015,first plant)', unique=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='plant',
            name='url_slug',
            field=models.SlugField(help_text=b'(Optional) An url friendly short description.        Must be unique to each plant e.g julies-quince', unique=True, blank=True),
        ),
        migrations.AlterField(
            model_name='plant',
            name='year_planted',
            field=models.IntegerField(help_text=b'(Optional) Year planted at Beacon Food forest.  Use -1 for unknown.', null=True, blank=True),
        ),
        migrations.AddField(
            model_name='plant',
            name='coordinates',
            field=models.ForeignKey(default=b'', blank=True, to='plants.Coordinates', help_text=b'Exact gps coordinates of location of plant'),
        ),
    ]
