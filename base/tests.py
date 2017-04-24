from django.test import TestCase


class ResponseStatus(TestCase):

    def test_thanks(self):
        response = self.client.get('/thanks/')
        self.assertEqual(response.status_code, 200)

    def test_404(self):
        response = self.client.get('/asdlfaskdjfalsdkfj/')
        self.assertEqual(response.status_code, 404)

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
