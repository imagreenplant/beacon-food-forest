from django.test import TestCase
from django.core.urlresolvers import reverse


class ResponseStatus(TestCase):

    def test_committees(self):
        response = self.client.get(reverse('committee-hub'))
        self.assertEqual(response.status_code, 200)

    def test_committee(self):
        response = self.client.get('/committee/')
        self.assertEqual(response.status_code, 200)


