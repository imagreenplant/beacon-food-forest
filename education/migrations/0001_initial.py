# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('lesson_title', models.CharField(max_length=200, verbose_name=b'class title')),
                ('publish_date', models.DateTimeField(verbose_name=b'date to publicize')),
                ('event_date', models.DateField(verbose_name=b'date class is held')),
                ('event_start_time', models.TimeField(verbose_name=b'time class starts')),
                ('event_end_time', models.TimeField(verbose_name=b'time class ends')),
                ('lesson_link', models.URLField(verbose_name=b'link to class')),
                ('lesson_description', models.TextField(verbose_name=b'class description')),
                ('lesson_image', models.ImageField(upload_to=b'', verbose_name=b'optional class image')),
            ],
        ),
    ]
