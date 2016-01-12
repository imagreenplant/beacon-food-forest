from django import template
from base.forms import MaterialsDonationForm
from django.core.context_processors import csrf

register = template.Library()

@register.inclusion_tag('base/donate.html')
def money_donation_instructions():
    return {}

@register.inclusion_tag('base/material_donation.html', takes_context=True)
def materials_donation_form(context):
	request = context['request']
	form_context = {'donation_form': MaterialsDonationForm() }
	form_context.update( csrf(request) )
	return form_context
