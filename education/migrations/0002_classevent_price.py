# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from decimal import Decimal


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0001_squashed_0009_auto_20160206_1100'),
    ]

    operations = [
        migrations.AddField(
            model_name='classevent',
            name='price',
            field=models.DecimalField(default=Decimal('0'), help_text=b'Main pricing for event.  Putting in price helps with advertisement', max_digits=6, decimal_places=2),
        ),
    ]
