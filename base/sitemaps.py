from django.contrib import sitemaps
from django.core.urlresolvers import reverse

class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.9
    changefreq = 'weekly'

    def items(self):
        return ['homepage', 'faq', 'project', 'permaculture', 'how-we-started',]

    def location(self, item):
        return reverse(item)