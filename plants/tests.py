from django.test import TestCase
from .models import Plant
from django.core.urlresolvers import reverse


class ClassEventTestCase(TestCase):

    def setUp(self):
        self.plant = Plant.objects.create(name="Test Plant", site_code="1401")
        self.plant.save()

    def test_plant_detail_resp(self):
        response = self.client.get(self.plant.get_absolute_url())
        self.assertEqual(response.status_code, 200)


class ResponseStatus(TestCase):

    def test_plant_hub(self):
        response = self.client.get(reverse('plants-hub'))
        self.assertEqual(response.status_code, 200)

    def test_plant_json(self):
        response = self.client.get(reverse('plants-index-json'))
        self.assertEqual(response.status_code, 200)
