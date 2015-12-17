from django import template
from base.forms import MaterialsDonationForm

register = template.Library()
@register.inclusion_tag('donate.html')
def materials_donation_form():
    form = MaterialsDonationForm()
    print form
    return {'materials_donation_form': form, "tester":"three"}