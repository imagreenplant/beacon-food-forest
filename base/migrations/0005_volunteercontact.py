# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_auto_20160116_0514'),
    ]

    operations = [
        migrations.CreateModel(
            name='VolunteerContact',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('volunteer_name', models.CharField(help_text=b"Volunteer's name, like 'Glenn Herlihy'", max_length=200)),
                ('volunteer_title_blurb', models.CharField(help_text=b"Volunteer's title, like 'co-founder'", max_length=200, blank=True)),
                ('volunteer_email', models.EmailField(max_length=254)),
                ('volunteer_is_active', models.BooleanField(default=True, help_text=b'Is volunteer active? Unchecked turns off volunteer.')),
                ('volunteer_sort_order', models.IntegerField(default=1, help_text=b'A higher number means that person will be listed first.')),
            ],
            options={
                'verbose_name': 'VolunteerContact',
                'verbose_name_plural': 'VolunteerContacts',
            },
        ),
    ]
