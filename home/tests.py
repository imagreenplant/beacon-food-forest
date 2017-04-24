from django.test import TestCase
from django.core.urlresolvers import reverse


class ResponseStatus(TestCase):

    def test_homepage(self):
        response = self.client.get(reverse('homepage'))
        self.assertEqual(response.status_code, 200)
