from django.contrib.sitemaps import Sitemap
from education.models import ClassEvent

class ClassEventSitemap(Sitemap):
    changefreq = "weekly"
    priority = 1.0

    def items(self):
        return ClassEvent.objects.all()
