# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_volunteercontact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Download',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('download_file', models.FileField(help_text=b'Upload file here', max_length=200, upload_to=b'downloads/')),
                ('publish_to_frontpage', models.BooleanField(default=False, help_text=b'Should this show on the front page in the downloads list?')),
            ],
        ),
    ]
