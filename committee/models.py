from django.db import models, IntegrityError, transaction
from ckeditor.fields import RichTextField
import django.utils.timezone as timezone
from django.utils import text as slugify
import random


class Committee(models.Model):

    class Meta:
        verbose_name = "Committee"
        verbose_name_plural = "Committees"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify.slugify(self.name)
        try:
            # Bug in django requires this statement to catch IntegrityError
            with transaction.atomic():
                super(Committee, self).save(*args, **kwargs)
        except IntegrityError:
            self.slug = slugify.slugify("-".join([self.name, str(random.randrange(0, 100))]))
            super(Committee, self).save(*args, **kwargs)

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('committee-detail', args=[str(self.slug)])

    name = models.CharField(max_length=100, blank=False,
                            help_text="(Required) Name of the committee")
    main_contact = models.EmailField(blank=True, help_text='Main email contact for committee')
    slug = models.SlugField(unique=True, blank=True, help_text="(Optional) An url friendly \
        short description.")
    description = RichTextField(blank=True, help_text='A friendly description of the \
        committee accessible to the public.')


class Meeting(models.Model):
    """Represents a single meeting, by committee"""

    class Meta:
        verbose_name = "meeting"
        verbose_name_plural = "meetings"

    def __str__(self):
        return self.date.strftime('%b %d, %Y')

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('meeting-detail', args=[str(self.id)])

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
    notes = RichTextField(blank=True, help_text="(Optional) Cut and paste meeting notes here")
    override = models.BooleanField(
        blank=False, default=True,
        help_text="(Optional) Override. If box is unchecked, \
            meeting will not be shown on website.")
    last_modified = models.DateTimeField(auto_now=True, auto_now_add=False)
