from django import forms  

class MaterialsDonationForm(forms.Form):
    your_name = forms.CharField(label='Your First and Last Name', max_length=100, required=True)
    your_email = forms.EmailField(label='your@email.com', required=True)
    donation_type = forms.ChoiceField(label="Please Select a Donation Type", required=True, )
    donation_description = forms.CharField(label='Donation Type', max_length=2000, required=True)

    