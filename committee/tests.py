from django.test import TestCase
from django.core.urlresolvers import reverse
from committee.models import Committee, Meeting


class ResponseStatus(TestCase):

    def test_committees(self):
        response = self.client.get(reverse('committee-hub'))
        self.assertEqual(response.status_code, 200)

    def test_committee(self):
        response = self.client.get('/committee/')
        self.assertEqual(response.status_code, 200)

    def test_committee_detail_resp(self):
        committee = Committee(name="Committee Name", main_contact="Main Contact", slug="commitee-name")
        committee.save()

        response = self.client.get(committee.get_absolute_url())
        self.assertEqual(response.status_code,200)



