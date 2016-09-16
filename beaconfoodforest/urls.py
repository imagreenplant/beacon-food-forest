"""beaconfoodforest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

# Redirects from old site pages
from django.views.generic.base import RedirectView

# Sitemaps
from django.contrib.sitemaps.views import sitemap
from base.sitemaps import StaticViewSitemap
from plants.sitemaps import PlantSitemap, PlantStaticSitemap
from education.sitemaps import ClassEventSitemap, EducationSitemap
from maps.sitemaps import KmlMapSitemap

sitemaps = {
    'static': StaticViewSitemap,
    'plants': PlantSitemap,
    'plants-static': PlantStaticSitemap,
    'education-static': EducationSitemap,
    'classes': ClassEventSitemap,
    'maps': KmlMapSitemap,

}


# Apps
from maps import urls as map_urls
from education import urls as education_urls
from plants import urls as plant_urls



urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^markdown/', include( 'django_markdown.urls')),
    # url(r'^lessons/', views.listLessons, name="lessons"),
    
    # Homepage
    url(r'^$', 'home.views.index', name="homepage"),
    
    # Info Sub-pages
    url(r'^faq/$', 'infopages.views.faq', name="faq"),
    url(r'^project/$', 'infopages.views.project', name="project"),
    url(r'^permaculture/$', 'infopages.views.permaculture', name="permaculture"),
    url(r'^how-we-started/$', 'infopages.views.howWeStarted', name="how-we-started"),

    # Forms
    url(r'^material_donation_notify/$', 'base.views.material_donation_notify', ),
    url(r'^thanks/$', 'base.views.material_donation_thanks', ),

    # Redirects from old pages to retain SEO juice
    url(r'^faq.html$', RedirectView.as_view(permanent=True, pattern_name="faq" )),
    url(r'^project.html$', RedirectView.as_view(permanent=True, pattern_name="project" )),
    url(r'^permaculture.html$', RedirectView.as_view(permanent=True, pattern_name="permaculture" )),
    url(r'^howwestarted.html$', RedirectView.as_view(permanent=True, pattern_name="how-we-started" )),

    # Maps
    url(r'^maps/', include(map_urls), name="maps"),

    # Education
    url(r'^education/', include(education_urls), name="education"),

    # Plants
    url(r'^plants/', include(plant_urls), name="plants"),

    # Announcements
    url(r'^announcement/(?P<slug>[\w-]+)/$', 'base.views.announcement' , name="announcement-detail"),

    # Other
    url(r'^google4d7d768ede13abd5\.html', 'base.views.google_verify'),
    url(r'^robots.txt', 'base.views.robots'),
    url(r'^debug/$', 'base.views.debuginfo'),
    url(r'^debug/files/$', 'base.views.debugfiles'),
    url(r'^captcha/', include('captcha.urls')),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},name='django.contrib.sitemaps.views.sitemap'),
]

from django.conf import settings
from django.contrib.staticfiles.views import serve as serve_static
from django.views.decorators.cache import never_cache

admin.site.site_header = 'Beacon Food Forest Admin'

if settings.DEBUG:
    urlpatterns.append( url(r'^static/(?P<path>.*)$', never_cache(serve_static)) )
    urlpatterns.append( url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT}))
