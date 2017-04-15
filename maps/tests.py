from django.test import TestCase
from maps.models import KmlMap


class ResponseStatus(TestCase):

    def setUp(self):
        self.testKML = KmlMap(name="Test KML", slug="test-kml", kml="blah blah blah")
        print(self.testKML.get_absolute_url())
        self.testKML.save()

    def test_kml_map(self):
        response = self.client.get(self.testKML.get_absolute_url())
        self.assertEqual(response.status_code, 200)
