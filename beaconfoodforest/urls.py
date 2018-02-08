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
from beaconfoodforest import settings

# Views
from home.views import index as home_index
from infopages.views import faq, project, permaculture, howWeStarted, getInvolved
from base.views import material_donation_notify, material_donation_thanks, announcement,\
    robots, debuginfo, handler500, handler404, google_verify

# Redirects from old site pages
from django.views.generic.base import RedirectView

# Sitemaps
from django.contrib.sitemaps.views import sitemap
from base.sitemaps import StaticViewSitemap
from plants.sitemaps import PlantSitemap, PlantStaticSitemap
from education.sitemaps import ClassEventSitemap, EducationSitemap
from maps.sitemaps import KmlMapSitemap
from tours.sitemaps import ToursSitemap
from committee.sitemaps import CommitteeStaticSitemap, CommitteeSitemap, MeetingSitemap

# Apps
from maps import urls as map_urls
from education import urls as education_urls
from plants import urls as plant_urls
from tours import urls as tours_urls
from committee import urls as committee_urls

sitemaps = {
    'static': StaticViewSitemap,
    'plants': PlantSitemap,
    'plants-static': PlantStaticSitemap,
    'education-static': EducationSitemap,
    'classes': ClassEventSitemap,
    'maps': KmlMapSitemap,
    'tours': ToursSitemap,
}

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    # Homepage
    url(r'^$', home_index, name="homepage"),

    # Info Sub-pages
    url(r'^faq/$', faq, name="faq"),
    url(r'^project/$', project, name="project"),
    url(r'^permaculture/$', permaculture, name="permaculture"),
    url(r'^how-we-started/$', howWeStarted, name="how-we-started"),
    url(r'^get-involved/$', getInvolved, name="get-involved"),

    # Forms
    url(r'^material_donation_notify/$', material_donation_notify, ),
    url(r'^thanks/$', material_donation_thanks, ),

    # Redirects from old pages to retain SEO juice
    url(r'^faq.html$', RedirectView.as_view(permanent=True, pattern_name="faq")),
    url(r'^project.html$', RedirectView.as_view(permanent=True, pattern_name="project")),
    url(r'^permaculture.html$', RedirectView.as_view(permanent=True, pattern_name="permaculture")),
    url(r'^howwestarted.html$', RedirectView.as_view(permanent=True, pattern_name="how-we-started")),

    # Maps
    url(r'^maps/', include(map_urls), name="maps"),

    # Education
    url(r'^education/', include(education_urls), name="education"),

    # Plants
    url(r'^plants/', include(plant_urls), name="plants"),

    # Tours
    url(r'^tours/', include(tours_urls), name="tours"),

    # Committees
    url(r'^committees?/', include(committee_urls), name="committees"),

    # Announcements
    url(r'^announcement/(?P<slug>[\w-]+)/$', announcement, name="announcement-detail"),

    # Other
    url(r'^google4d7d768ede13abd5\.html', google_verify),
    url(r'^robots.txt', robots),
    url(r'^debug/$', debuginfo),
    url(r'^captcha/', include('captcha.urls')),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},
        name='django.contrib.sitemaps.views.sitemap'),
]

if settings.DEBUG:
    urlpatterns += [
        url(r'^500/$', handler500),
        url(r'^404/$', handler404),
    ]

##############################################################################

from django.conf import settings
from django.contrib.staticfiles.views import serve as serve_static
from django.views.static import serve as serve_media
from django.views.decorators.cache import never_cache

admin.site.site_header = 'Beacon Food Forest Admin'

if settings.DEBUG:
    urlpatterns.append(url(r'^static/(?P<path>.*)$', never_cache(serve_static)))
    urlpatterns.append(url(r'^media/(?P<path>.*)$', serve_media, {
        'document_root': settings.MEDIA_ROOT}))

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]
