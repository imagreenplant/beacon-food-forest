from django.db import models
from django_markdown.models import MarkdownField
import django.utils.timezone as timezone
# from django.utils import text as slugify


class Committee(models.Model):

    class Meta:
        verbose_name = "Committee"
        verbose_name_plural = "Committees"

    def __str__(self):
        return self.name

    name = models.CharField(max_length=100, blank=False, help_text="(Required) Name of the committee")
    main_contact = models.EmailField(blank=True, help_text='Main email contact for committee')


class Meeting(models.Model):
    """Represents a single meeting, by committee"""

    class Meta:
        verbose_name = "meeting"
        verbose_name_plural = "meetings"

    def __str__(self):
        return self.date.strftime('%b %d, %Y')

    committee = models.ForeignKey(
        Committee, on_delete=models.CASCADE, blank=True, null=True,
        help_text="(Recommended) Choose the committee this meeting belongs to")
    author = models.CharField(
        max_length=100, blank=True, 
        help_text='(Optional) Author of the meeting notes')
    date = models.DateField(
        auto_now=False,
        auto_now_add=False,
        blank=False,
        default=timezone.now,
        help_text="The date the meeting took place")
    notes = MarkdownField(blank=True, help_text="(Optional) Cut and paste meeting notes here")
    override = models.BooleanField(
        blank=False, default=True,
        help_text="(Optional) Override. If box is unchecked, \
            meeting will not be shown on website.")
