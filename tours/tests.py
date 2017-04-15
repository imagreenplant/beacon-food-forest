from django.test import TestCase
from django.core.urlresolvers import reverse


class ToursResponseStatus(TestCase):

    def test_audio_tour(self):
        response = self.client.get(reverse('audio-tour'))
        self.assertEqual(response.status_code, 200)
