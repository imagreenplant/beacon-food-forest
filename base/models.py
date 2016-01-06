from django.db import models
import django.utils.timezone as timezone
import datetime

class ExternalNewsArticle(models.Model):

    class Meta:
        verbose_name = "ExternalNewsArticle"
        verbose_name_plural = "ExternalNewsArticles"

    def __str__(self):
        return ": ".join([self.external_publisher,self.news_slug, self.pub_date.strftime('%b %d,%Y')])

    external_publisher = models.CharField(max_length=100, blank=False, help_text="The publisher of the article")
    news_slug = models.CharField(max_length=500, blank=True, help_text="A short description of article")
    external_url = models.URLField(blank=False, help_text="The URL at which the article resides")
    pub_date = models.DateField(auto_now=False, auto_now_add=False, blank=False, default=timezone.now, help_text="The date the article was originally published")

class WorkPartyEvent(models.Model):

    class Meta:
        verbose_name = "Work Party Event"
        verbose_name_plural = "Work Party Events"

    def __str__(self):
        return self.work_party_date.strftime('%b %d,%Y')

    work_party_date = models.DateField(auto_now=False, auto_now_add=False, blank=False, default=timezone.now, help_text="The date the article was originally published")
    work_party_time_start = models.TimeField(auto_now=False, auto_now_add=False, blank=False, default=datetime.time(10), help_text="The time that the work party starts")
    work_party_time_end = models.TimeField(auto_now=False, auto_now_add=False, blank=False, default=datetime.time(14), help_text="The time that the work party ends") 