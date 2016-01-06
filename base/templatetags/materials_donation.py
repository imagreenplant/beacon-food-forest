from django import template
from base.forms import MaterialsDonationForm

register = template.Library()

@register.inclusion_tag('base/donate.html')
def money_donation_instructions():
    return {}

@register.inclusion_tag('base/material_donation.html')
def materials_donation_form():
    form = MaterialsDonationForm()
    return {'donation_form': form}