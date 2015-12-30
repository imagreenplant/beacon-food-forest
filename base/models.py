from django.db import models
import django.utils.timezone as timezone

# Create your models here.
class ExternalNewsArticle(models.Model):

    class Meta:
        verbose_name = "ExternalNewsArticle"
        verbose_name_plural = "ExternalNewsArticles"

    def __str__(self):
        return ": ".join([self.external_publisher,self.news_slug, self.pub_date.strftime('%b %d,%Y')])

    external_publisher = models.CharField(max_length=100, blank=False)
    news_slug = models.CharField(max_length=500, blank=True)
    external_url = models.URLField(blank=False)
    pub_date = models.DateField(auto_now=False, auto_now_add=False, blank=False, default=timezone.now)