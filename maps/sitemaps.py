from django.contrib.sitemaps import Sitemap
from maps.models import KmlMap

class KmlMapSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
    	# Uncomment these lines to activate sitemapping/crawling for maps
        # return KmlMap.objects.filter(active=True)
        return []
