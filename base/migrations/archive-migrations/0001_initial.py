# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import datetime
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('publish_date', models.DateField(help_text='The date this announcement should go live', default=django.utils.timezone.now)),
                ('expire_date', models.DateField(help_text='The date this announcement should expire', default=django.utils.timezone.now)),
                ('event_date', models.DateField(help_text='\n        (Optional) If there is a date associated with this announcement, then put it here\n        ', blank=True, null=True, default=None)),
                ('override', models.BooleanField(help_text='(Optional) Override. If box is unchecked,             announcement will immediately turn off.', default=True)),
                ('content', django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Larger content block for announcement')),
                ('link', models.URLField(blank=True, help_text='(Optional) A pertinent url for the announcement')),
                ('slug', models.CharField(blank=True, help_text='A short description of announcement', max_length=500, unique=True)),
                ('headline', models.CharField(default='HEADLINE', help_text='(Required) The short headline of the announcement', verbose_name='The short headline for the announcement', max_length=200)),
                ('primary_image', models.ImageField(upload_to='', blank=True, help_text='(Optional) Background image for announcement', verbose_name='Optional announcement background image')),
            ],
            options={
                'verbose_name_plural': 'Announcements',
                'verbose_name': 'Announcement',
            },
        ),
        migrations.CreateModel(
            name='Download',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('download_file', models.FileField(help_text='Upload file here', upload_to='downloads/', max_length=200)),
                ('publish_to_frontpage', models.BooleanField(help_text='Should this show on the front page in the downloads list?', default=False)),
                ('display_name', models.CharField(help_text='A short descriptive display name', default='', max_length=100)),
                ('file_description', models.CharField(blank=True, help_text='Optional description field (rarely used)', max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='ExternalNewsArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('external_publisher', models.CharField(help_text='The publisher of the article', max_length=100)),
                ('news_slug', models.CharField(blank=True, help_text='A short description of article', max_length=500)),
                ('external_url', models.URLField(help_text='The URL at which the article resides')),
                ('pub_date', models.DateField(help_text='The date the article was originally published', default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name_plural': 'ExternalNewsArticles',
                'verbose_name': 'ExternalNewsArticle',
            },
        ),
        migrations.CreateModel(
            name='VolunteerContact',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('volunteer_name', models.CharField(help_text="Volunteer's name, like 'Glenn Herlihy'", max_length=200)),
                ('volunteer_title_blurb', models.CharField(blank=True, help_text="Volunteer's title, like 'co-founder'", max_length=200)),
                ('volunteer_email', models.EmailField(max_length=254)),
                ('volunteer_is_active', models.BooleanField(help_text='Is volunteer active? Unchecked turns off volunteer.', default=True)),
                ('volunteer_sort_order', models.IntegerField(help_text='A higher number means that person will be listed first.', default=1)),
            ],
            options={
                'verbose_name_plural': 'VolunteerContacts',
                'verbose_name': 'VolunteerContact',
            },
        ),
        migrations.CreateModel(
            name='WorkPartyEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('work_party_date', models.DateField(help_text='The date the article was originally published', default=django.utils.timezone.now)),
                ('work_party_time_start', models.TimeField(help_text='The time that the work party starts', default=datetime.time(10, 0))),
                ('work_party_time_end', models.TimeField(help_text='The time that the work party ends', default=datetime.time(14, 0))),
            ],
            options={
                'verbose_name_plural': 'Work Party Events',
                'verbose_name': 'Work Party Event',
            },
        ),
    ]
