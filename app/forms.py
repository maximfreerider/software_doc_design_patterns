from django import forms
from app.models import Account


class AccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = ("username", "name", "surname", "email", "city", "country", "money", "number_of_card")
