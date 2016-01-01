from django.db import models
import django.utils.timezone as timezone

# Create your models here.
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
