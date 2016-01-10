from django import forms  

DONATION_CHOICES = (("food","Food"),("plants","Plants and Materials"),("other","Other"))

class MaterialsDonationForm(forms.Form):
    your_name = forms.CharField(label='Your First and Last Name', max_length=100, required=True ,
    	widget=forms.TextInput(attrs={'autofocus': '', 'required': 'required', 'placeholder': 'Your name'}))
    your_email = forms.EmailField(label='your@email.com', required=True)
    donation_type = forms.ChoiceField(label="Please Select a Donation Type", required=True, choices=DONATION_CHOICES )
    donation_description = forms.CharField(label='Donation Type', max_length=2000, required=True, 
    	widget=forms.TextInput(attrs={'required': 'required', 'placeholder': 'A short description of your donation:'}))
