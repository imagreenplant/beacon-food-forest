# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Committee',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, help_text='(Required) Name of the committee')),
                ('main_contact', models.EmailField(max_length=254, blank=True, help_text='Main email contact for committee')),
            ],
            options={
                'verbose_name_plural': 'Committees',
                'verbose_name': 'Committee',
            },
        ),
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('author', models.CharField(max_length=100, blank=True, help_text='(Optional) Author of the meeting notes')),
                ('date', models.DateField(help_text='The date the meeting took place', default=django.utils.timezone.now)),
                ('notes', django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Cut and paste meeting notes here')),
                ('override', models.BooleanField(help_text='(Optional) Override. If box is unchecked,             meeting will not be shown on website.', default=True)),
                ('committee', models.ForeignKey(help_text='(Recommended) Choose the committee this meeting belongs to', null=True, blank=True, to='committee.Committee')),
            ],
            options={
                'verbose_name_plural': 'meetings',
                'verbose_name': 'meeting',
            },
        ),
    ]
