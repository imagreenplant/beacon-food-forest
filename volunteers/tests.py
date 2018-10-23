from django.test import TestCase
from django.core.urlresolvers import reverse


class ResponseStatus(TestCase):

    def test_volunteers(self):
        response = self.client.get(reverse('volunteers-hub'))
        self.assertEqual(response.status_code, 200)
