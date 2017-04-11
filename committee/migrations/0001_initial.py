# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import uuid
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Committee',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('name', models.CharField(help_text='(Required) Name of the committee', max_length=100)),
                ('main_contact', models.EmailField(help_text='Main email contact for committee', max_length=254, blank=True)),
                ('slug', models.SlugField(help_text='(Optional) An url friendly         short description. Must be unique to each event e.g brew-your-own-kombucha-feb-2015.', default=uuid.uuid1, unique=True, blank=True)),
            ],
            options={
                'verbose_name_plural': 'Committees',
                'verbose_name': 'Committee',
            },
        ),
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('author', models.CharField(help_text='(Optional) Author of the meeting notes', max_length=100, blank=True)),
                ('date', models.DateField(help_text='The date the meeting took place', default=django.utils.timezone.now)),
                ('notes', django_markdown.models.MarkdownField(help_text='(Optional) Cut and paste meeting notes here', blank=True)),
                ('override', models.BooleanField(help_text='(Optional) Override. If box is unchecked,             meeting will not be shown on website.', default=True)),
                ('committee', models.ForeignKey(help_text='(Recommended) Choose the committee this meeting belongs to', to='committee.Committee', null=True, blank=True)),
            ],
            options={
                'verbose_name_plural': 'meetings',
                'verbose_name': 'meeting',
            },
        ),
    ]
