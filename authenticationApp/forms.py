from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import UserProfile
from django import forms



class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = "__all__"


# class CreateProfile(forms.ModelForm):
#     class Meta:
#         model = UserProfile
#         fields = "__all__"