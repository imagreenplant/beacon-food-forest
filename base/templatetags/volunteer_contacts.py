from django import template
from base.models import VolunteerContact

register = template.Library()


@register.inclusion_tag('base/volunteer_contacts.html')
def show_contact_us():
    volunteer_contacts = VolunteerContact.objects.filter(volunteer_is_active=True).order_by('-volunteer_sort_order')

    return {'volunteer_contacts': volunteer_contacts}
