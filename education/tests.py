from django.test import TestCase
from education.models import ClassEvent
from django.utils.timezone import localtime, now
from datetime import timedelta


class ClassEventTestCase(TestCase):

    def setUp(self):
        self.classevent = ClassEvent.objects.create(
            title="Class within 4 days from now",
            event_date=localtime(now()).date() + timedelta(days=2)
        )

    def test_days_away_if_event_is_close(self):
        """If a class is within 4 days, it will show as an announcement"""
        # two_days_away = ClassEvent.objects.get(title="Class within 4 days from now")
        self.assertEqual(self.classevent.days_away(), 2)

    def test_class_detail_resp(self):
        response = self.client.get(self.classevent.get_absolute_url())
        self.assertEqual(response.status_code, 200)
