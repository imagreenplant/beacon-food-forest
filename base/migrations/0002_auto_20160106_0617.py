# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkPartyEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('work_party_date', models.DateField(default=django.utils.timezone.now, help_text=b'The date the article was originally published')),
                ('work_party_time_start', models.TimeField(default=datetime.time(10, 0), help_text=b'The time that the work party starts')),
                ('work_party_time_end', models.TimeField(default=datetime.time(14, 0), help_text=b'The time that the work party ends')),
            ],
            options={
                'verbose_name': 'Work Party Event',
                'verbose_name_plural': 'Work Party Events',
            },
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='external_publisher',
            field=models.CharField(help_text=b'The publisher of the article', max_length=100),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='external_url',
            field=models.URLField(help_text=b'The URL at which the article resides'),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='news_slug',
            field=models.CharField(help_text=b'A short description of article', max_length=500, blank=True),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='pub_date',
            field=models.DateField(default=django.utils.timezone.now, help_text=b'The date the article was originally published'),
        ),
    ]
