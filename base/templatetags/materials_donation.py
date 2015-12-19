from django import template
from base.forms import MaterialsDonationForm

print "Entered base templatetags"

register = template.Library()
@register.inclusion_tag('material_donation.html')
def materials_donation_form():
    form = MaterialsDonationForm()
    print form
    return {'donation_form': form, "tester":"three asldfkj asldfkj asldfkj asldfkjasldfkjasldfkjasldfkj asldfkj asldfkj"}