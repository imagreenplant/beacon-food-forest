# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20160106_0617'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('announcement_publish_date', models.DateField(default=django.utils.timezone.now, help_text=b'The date this announcement should go live')),
                ('announcement_expire_date', models.DateField(default=django.utils.timezone.now, help_text=b'The date this announcement should expire')),
                ('announcement_publish_override', models.BooleanField(default=True, help_text=b'(Optional) Override for turning announcement On/off.')),
                ('announcement_content', django_markdown.models.MarkdownField(help_text=b'(Optional) Larger content block for announcement', blank=True)),
                ('announcement_link', models.URLField(help_text=b'(Optional) A pertinent url for the announcement', blank=True)),
                ('announcement_slug', models.CharField(help_text=b'A short description of announcement', max_length=500)),
            ],
            options={
                'verbose_name': 'Announcement',
                'verbose_name_plural': 'Announcements',
            },
        ),
    ]
