from django.contrib.sitemaps import Sitemap
from plants.models import Plant
from django.core.urlresolvers import reverse

class PlantStaticSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.5

    def items(self):
        return ['plants-hub',]

    def location(self, item):
        return reverse(item)

class PlantSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.3

    def items(self):
        return Plant.objects.filter(published=True)

    def lastmod(self, obj):
        return obj.last_modified