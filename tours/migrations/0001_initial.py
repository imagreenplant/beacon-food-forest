# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AudioTourModel',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, help_text='Title for audio tour area')),
                ('soundcloud_id', models.IntegerField(help_text='Specific Id from SoundCloud service to embed')),
                ('index', models.DecimalField(max_digits=4, help_text='Locations will be sorted by this index.                      You can use up to 2 decimal places up to 99.99', decimal_places=2, unique=True)),
            ],
        ),
    ]
