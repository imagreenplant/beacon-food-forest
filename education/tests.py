from django.test import TestCase
from education.models import ClassEvent
from django.utils.timezone import localtime, now
from datetime import timedelta


class ClassEventTestCase(TestCase):
    def setUp(self):
        ClassEvent.objects.create(
            title="Class within 4 days from now", 
            event_date=localtime(now()) + timedelta(days=2)
            )

    def test_days_away_if_event_is_close(self):
        """If a class is within 4 days, it will show as an announcement"""
        two_days_away = ClassEvent.objects.get(title="Class within 4 days from now")
        self.assertEqual(two_days_away.days_away(), 2)
