from django.test import TestCase
from django.core.urlresolvers import reverse


class ResponseStatus(TestCase):

    def test_faq(self):
        response = self.client.get(reverse('faq'))
        self.assertEqual(response.status_code, 200)

    def test_project(self):
        response = self.client.get(reverse('project'))
        self.assertEqual(response.status_code, 200)

    def test_permaculture(self):
        response = self.client.get(reverse('permaculture'))
        self.assertEqual(response.status_code, 200)

    def test_how_started(self):
        response = self.client.get(reverse('how-we-started'))
        self.assertEqual(response.status_code, 200)

    def test_get_involved(self):
        response = self.client.get(reverse('get-involved'))
        self.assertEqual(response.status_code, 200)

    def test_code_of_conduct(self):
        response = self.client.get(reverse('code-of-conduct'))
        self.assertEqual(response.status_code, 200)

    def test_thanks(self):
        response = self.client.get('/thanks/')
        self.assertEqual(response.status_code, 200)

    def test_faq_redir(self):
        response = self.client.get('/faq.html')
        self.assertEqual(response.status_code, 301)

    def test_project_redir(self):
        response = self.client.get('/project.html')
        self.assertEqual(response.status_code, 301)

    def test_permaculture_redir(self):
        response = self.client.get('/permaculture.html')
        self.assertEqual(response.status_code, 301)

    def test_howstarted_redir(self):
        response = self.client.get('/howwestarted.html')
        self.assertEqual(response.status_code, 301)
