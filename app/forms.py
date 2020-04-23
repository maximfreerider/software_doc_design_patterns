from django import forms
from app.models import Post, Account


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ("name", "description")


class AccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = ("username", "name", "surname", "email", "city", "country", "money", "number_of_card")
