from django.contrib.sitemaps import Sitemap
from committee.models import Committee, Meeting
from django.core.urlresolvers import reverse


class CommitteeStaticSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return ['committees', ]

    def location(self, item):
        return reverse(item)


class CommitteeSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return Committee.objects.all()


class MeetingSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return Meeting.objects.all()
