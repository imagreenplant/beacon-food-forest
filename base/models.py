from django.db import models, IntegrityError, transaction
# from django_markdown.models import MarkdownField
from markdownx.models import MarkdownxField
from django.utils import timezone
from django.utils.timezone import localtime, now
from django.utils import text as slugify
import datetime
import random


class ExternalNewsArticle(models.Model):

    class Meta:
        verbose_name = "ExternalNewsArticle"
        verbose_name_plural = "ExternalNewsArticles"

    def __str__(self):
        return ": ".join([self.external_publisher, self.news_slug,
                          self.pub_date.strftime('%b %d,%Y')])

    external_publisher = models.CharField(
        max_length=100, blank=False, help_text="The publisher of the article")
    news_slug = models.CharField(
        max_length=500, blank=True, help_text="A short description of article")
    external_url = models.URLField(
        blank=False, help_text="The URL at which the article resides")
    pub_date = models.DateField(
        auto_now=False,
        auto_now_add=False,
        blank=False,
        default=timezone.now,
        help_text="The date the article was originally published")


class WorkPartyEvent(models.Model):

    class Meta:
        verbose_name = "Work Party Event"
        verbose_name_plural = "Work Party Events"

    def __str__(self):
        return self.work_party_date.strftime('%b %d,%Y')

    def is_within_n_days(self, n):
        n_days = timezone.timedelta(days=n)
        return self.work_party_date - n_days <= timezone.datetime.today()  \
            and self.work_party_date >= timezone.datetime.today()

    def days_away(self):
        away = self.work_party_date - localtime(now()).date()
        return away.days

    work_party_date = models.DateField(
        auto_now=False,
        auto_now_add=False,
        blank=False,
        default=timezone.now,
        help_text="The date the article was originally published")
    work_party_time_start = models.TimeField(
        auto_now=False,
        auto_now_add=False,
        blank=False,
        default=datetime.time(10, 0, 0),
        help_text="The time that the work party starts")
    work_party_time_end = models.TimeField(
        auto_now=False,
        auto_now_add=False,
        blank=False,
        default=datetime.time(14, 0, 0),
        help_text="The time that the work party ends")


class Announcement(models.Model):

    class Meta:
        verbose_name = "Announcement"
        verbose_name_plural = "Announcements"

    def __str__(self):
        return ": ".join([self.publish_date.strftime('%b %d,%Y'), self.slug, ])

    def create_slug(self, headline, date, randomize=None):
        if not headline:
            headline = self.headline
        if not date:
            date = self.publish_date

        if not randomize:
            return slugify.slugify("-".join([headline, date.strftime("%B-%d-%Y")]))[:50]
        return slugify.slugify("-".join([headline, date.strftime("%B-%d-%Y"),
                                         str(random.randrange(0, 100))]))[:50]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.create_slug(self.headline, self.event_date)
        try:
            # Bug in django requires this statement to catch IntegrityError
            with transaction.atomic():
                super(Announcement, self).save(*args, **kwargs)
        except IntegrityError:
            self.slug = self.create_slug(self.headline, self.event_date, True)
            super(Announcement, self).save(*args, **kwargs)

    def is_active_announcement(self):
        return self.publish_date <= timezone.datetime.today() \
            and self.expire_date >= timezone.datetime.today()

    publish_date = models.DateField(
        auto_now=False, auto_now_add=False, blank=False,
        default=timezone.now, help_text="The date this announcement should go live")
    expire_date = models.DateField(
        auto_now=False, auto_now_add=False, blank=False,
        default=timezone.now, help_text="The date this announcement should expire")
    event_date = models.DateField(
        auto_now=False, auto_now_add=False, blank=True, null=True,
        default=None, help_text="""
        (Optional) If there is a date associated with this announcement, then put it here
        """)
    override = models.BooleanField(
        blank=False, default=True,
        help_text="(Optional) Override. If box is unchecked, \
            announcement will immediately turn off.")
    content = MarkdownxField(
        blank=True, help_text="(Optional) Larger content block for announcement")
    link = models.URLField(
        blank=True, help_text="(Optional) A pertinent url for the announcement")
    slug = models.CharField(
        max_length=500, blank=True, unique=True, help_text="A short description of announcement")
    headline = models.CharField(
        'The short headline for the announcement', max_length=200, blank=False,
        default="HEADLINE", help_text='(Required) The short headline of the announcement')
    primary_image = models.ImageField(
        "Optional announcement background image",
        blank=True,
        help_text='(Optional) Background image for announcement')


class VolunteerContact(models.Model):
    volunteer_name = models.CharField(
        max_length=200, blank=False, help_text="Volunteer's name, like 'Glenn Herlihy'")
    volunteer_title_blurb = models.CharField(
        max_length=200, blank=True, help_text="Volunteer's title, like 'co-founder'")
    volunteer_email = models.EmailField(max_length=254)
    volunteer_is_active = models.BooleanField(
        blank=False, default=True, help_text="Is volunteer active? Unchecked turns off volunteer.")
    volunteer_sort_order = models.IntegerField(
        blank=False, default=1, help_text="A higher number means that person will be listed first.")

    class Meta:
        verbose_name = "VolunteerContact"
        verbose_name_plural = "VolunteerContacts"

    def __str__(self):
        return ": ".join([self.volunteer_name, self.volunteer_email, ])


class Download(models.Model):
    download_file = models.FileField(
        upload_to="downloads/", max_length=200, help_text='Upload file here')
    publish_to_frontpage = models.BooleanField(
        blank=False,
        default=False,
        help_text='Should this show on the front page in the downloads list?')
    display_name = models.CharField(
        max_length=100, blank=False, default="", help_text="A short descriptive display name")
    file_description = models.CharField(
        max_length=500, blank=True, help_text="Optional description field (rarely used)")

    def __str__(self):
        return self.display_name
