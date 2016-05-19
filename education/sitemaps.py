from django.contrib.sitemaps import Sitemap
from education.models import ClassEvent
from django.core.urlresolvers import reverse

class EducationSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.9

    def items(self):
        return ['education-hub', 'current-classes', 'past-classes', 'teacher-criteria', 'teacher-expectations', 'teacher-proposal',]

    def location(self, item):
        return reverse(item)

class ClassEventSitemap(Sitemap):
    changefreq = "weekly"
    priority = 1.0

    def items(self):
        return ClassEvent.objects.all()
