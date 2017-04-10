from django.contrib import sitemaps
from django.core.urlresolvers import reverse


class ToursSitemap(sitemaps.Sitemap):
    changefreq = "weekly"
    priority = 0.9

    def items(self):
        return ['audio-tour', ]

    def location(self, item):
        return reverse(item)
