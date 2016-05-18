from django.contrib.sitemaps import Sitemap
from plants.models import Plant

class PlantSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.3

    def items(self):
        return Plant.objects.filter(published=True)

    def lastmod(self, obj):
        return obj.last_modified