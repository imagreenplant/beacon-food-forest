from django.test import TestCase
from django.core.urlresolvers import reverse


class ResponseStatus(TestCase):

    def test_volunteers(self):
        response = self.client.get(reverse('volunteers-hub'))
        self.assertEqual(response.status_code, 200)

    def test_log_indiv_hours(self):
        response = self.client.get(reverse('log-individual-hours'))
        self.assertEqual(response.status_code, 200)

    def test_log_group_hours(self):
        response = self.client.get(reverse('log-group-hours'))
        self.assertEqual(response.status_code, 200)
