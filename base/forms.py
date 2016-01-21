from django import forms  
from captcha.fields import CaptchaField

DONATION_CHOICES = (("food","Food"),("plants","Plants and Materials"),("other","Other"))

class MaterialsDonationForm(forms.Form):
    your_name = forms.CharField(label='Your First and Last Name', max_length=100, required=True ,
    	widget=forms.TextInput(attrs={'autofocus': '', 'required': 'required', 'placeholder': 'Your name', 'class':'full-width'}))
    your_email = forms.EmailField(label='Email', required=True, widget=forms.EmailInput(
    	attrs={'required': 'required', 'placeholder': 'Your email', 'class':'full-width'}))
    donation_type = forms.ChoiceField(label="Please Select a Donation Type", required=True, choices=DONATION_CHOICES )
    donation_description = forms.CharField(label='Please describe the donation:', max_length=2000, required=True, 
    	widget=forms.Textarea(attrs={'required': 'required', 'placeholder': 'Description here:',
    		'rows':'4'}))
    donation_captcha = CaptchaField(label='To prove you are human, please solve this math problem:',required=True)
