import datetime
from django import template
from education.models import ClassEvent
from base.models import ExternalNewsArticle, WorkPartyEvent, Announcement
register = template.Library()


def getUpcomingWorkParties():
    days_before_workparty_to_show_announce = 5
    display_delta = datetime.datetime.now(
    ) + datetime.timedelta(days=days_before_workparty_to_show_announce)
    work_parties = WorkPartyEvent.objects.filter(work_party_date__lte=display_delta)\
        .filter(work_party_date__gte=datetime.date.today())
    return work_parties


def getNewClasses():
    days_to_show_new_class = 3
    display_delta = datetime.datetime.now() - datetime.timedelta(days=days_to_show_new_class)
    new_classes = ClassEvent.objects.filter(publish_date__gte=display_delta)\
        .filter(publish_date__lte=datetime.date.today())
    return new_classes


def getUpcomingClasses():
    days_before_class_to_show = 4
    display_delta = datetime.datetime.now() + datetime.timedelta(days=days_before_class_to_show)
    upcoming_classes = ClassEvent.objects.filter(event_date__lte=display_delta)\
        .filter(event_date__gte=datetime.date.today())
    return upcoming_classes


def getRecentArticles():
    # Returns any articles recently published within n recency_days
    return None


def getDynamicAnnouncements():
    # Returns any annoucements published in database for current time
    dynamic = Announcement.objects.filter(publish_date__lte=datetime.date.today()) \
    	.filter(expire_date__gt=datetime.date.today()) \
    	.order_by('publish_date')[:10]
    return dynamic


def gatherAnnouncements():
    announcements = {
        'workParties': getUpcomingWorkParties(),
        'newClasses': getNewClasses(),
        'upcomingClasses': getUpcomingClasses(),
        # 'articles':getRecentArticles(),
        'dynamic': getDynamicAnnouncements(),
    }
    return announcements


@register.inclusion_tag('base/announcements.html')
def show_all_announcements():
    announcements = gatherAnnouncements()
    return {'announcements': announcements}
