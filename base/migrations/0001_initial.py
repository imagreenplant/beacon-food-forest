# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExternalNewsArticle',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('external_publisher', models.CharField(max_length=100)),
                ('news_slug', models.CharField(max_length=500, blank=True)),
                ('external_url', models.URLField()),
                ('pub_date', models.DateField(default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name': 'ExternalNewsArticle',
                'verbose_name_plural': 'ExternalNewsArticles',
            },
        ),
    ]
