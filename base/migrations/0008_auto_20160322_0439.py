# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
import django.utils.timezone
import django_markdown.models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20160210_2232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='announcement_content',
            field=django_markdown.models.MarkdownField(blank=True, help_text='(Optional) Larger content block for announcement'),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='announcement_expire_date',
            field=models.DateField(help_text='The date this announcement should expire', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='announcement_link',
            field=models.URLField(blank=True, help_text='(Optional) A pertinent url for the announcement'),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='announcement_publish_date',
            field=models.DateField(help_text='The date this announcement should go live', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='announcement_publish_override',
            field=models.BooleanField(help_text='(Optional) Override for turning announcement On/off.', default=True),
        ),
        migrations.AlterField(
            model_name='announcement',
            name='announcement_slug',
            field=models.CharField(blank=True, help_text='A short description of announcement', max_length=500),
        ),
        migrations.AlterField(
            model_name='download',
            name='display_name',
            field=models.CharField(help_text='A short descriptive display name', max_length=100, default=''),
        ),
        migrations.AlterField(
            model_name='download',
            name='download_file',
            field=models.FileField(upload_to='downloads/', help_text='Upload file here', max_length=200),
        ),
        migrations.AlterField(
            model_name='download',
            name='file_description',
            field=models.CharField(blank=True, help_text='Optional description field (rarely used)', max_length=500),
        ),
        migrations.AlterField(
            model_name='download',
            name='publish_to_frontpage',
            field=models.BooleanField(help_text='Should this show on the front page in the downloads list?', default=False),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='external_publisher',
            field=models.CharField(help_text='The publisher of the article', max_length=100),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='external_url',
            field=models.URLField(help_text='The URL at which the article resides'),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='news_slug',
            field=models.CharField(blank=True, help_text='A short description of article', max_length=500),
        ),
        migrations.AlterField(
            model_name='externalnewsarticle',
            name='pub_date',
            field=models.DateField(help_text='The date the article was originally published', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='volunteercontact',
            name='volunteer_is_active',
            field=models.BooleanField(help_text='Is volunteer active? Unchecked turns off volunteer.', default=True),
        ),
        migrations.AlterField(
            model_name='volunteercontact',
            name='volunteer_name',
            field=models.CharField(help_text="Volunteer's name, like 'Glenn Herlihy'", max_length=200),
        ),
        migrations.AlterField(
            model_name='volunteercontact',
            name='volunteer_sort_order',
            field=models.IntegerField(help_text='A higher number means that person will be listed first.', default=1),
        ),
        migrations.AlterField(
            model_name='volunteercontact',
            name='volunteer_title_blurb',
            field=models.CharField(blank=True, help_text="Volunteer's title, like 'co-founder'", max_length=200),
        ),
        migrations.AlterField(
            model_name='workpartyevent',
            name='work_party_date',
            field=models.DateField(help_text='The date the article was originally published', default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='workpartyevent',
            name='work_party_time_end',
            field=models.TimeField(help_text='The time that the work party ends', default=datetime.time(14, 0)),
        ),
        migrations.AlterField(
            model_name='workpartyevent',
            name='work_party_time_start',
            field=models.TimeField(help_text='The time that the work party starts', default=datetime.time(10, 0)),
        ),
    ]
