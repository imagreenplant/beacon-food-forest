# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0007_auto_20160726_2146'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapcategory',
            name='icon',
            field=models.ImageField(blank=True, help_text='Primary icon for category.  Please use         svg format for optimum performance.', verbose_name='category icon', upload_to=''),
        ),
        migrations.AddField(
            model_name='mapsubcategory',
            name='icon',
            field=models.ImageField(blank=True, help_text='Primary icon for subcategory.  Please use         svg format for optimum performance.', verbose_name='subcategory icon', upload_to=''),
        ),
    ]
