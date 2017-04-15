from django.test import TestCase


class ResponseStatus(TestCase):

    def test_homepage(self):
        response = self.client.get('')
        self.assertEqual(response.status_code, 200)

    def test_404(self):
        response = self.client.get('/asdlfaskdjfalsdkfj/')
        self.assertEqual(response.status_code, 404)

    def test_faq(self):
        response = self.client.get('/faq/')
        self.assertEqual(response.status_code, 200)

    def test_project(self):
        response = self.client.get('/project/')
        self.assertEqual(response.status_code, 200)

    def test_permaculture(self):
        response = self.client.get('/permaculture/')
        self.assertEqual(response.status_code, 200)

    def test_how_started(self):
        response = self.client.get('/how-we-started/')
        self.assertEqual(response.status_code, 200)

    def test_get_involved(self):
        response = self.client.get('/get-involved/')
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

    # def test_announcement(self):
    #     response = self.client.get('/faq/')
    #     self.assertEqual(response.status_code, 200)

    def test_goog_verify(self):
        response = self.client.get('/google4d7d768ede13abd5.html')
        self.assertEqual(response.status_code, 200)

    def test_robots_txt(self):
        response = self.client.get('/robots.txt')
        self.assertEqual(response.status_code, 200)

    def test_sitemap(self):
        response = self.client.get('/sitemap.xml')
        self.assertEqual(response.status_code, 200)
