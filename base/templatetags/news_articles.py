import datetime
from django import template
from base.models import ExternalNewsArticle

register = template.Library()

@register.inclusion_tag('base/external_news_articles.html')
def show_recent_articles():
	recent_external_articles = ExternalNewsArticle.objects.filter(pub_date__gt=datetime.datetime.now() - \
		datetime.timedelta(weeks=52)).order_by('-pub_date')[:5]
	
	return {'recent_articles':recent_external_articles}
