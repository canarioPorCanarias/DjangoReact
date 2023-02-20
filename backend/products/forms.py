from django import forms


class FormGetProductInfo(forms.Form):
    slug = forms.CharField(label="slug", required=True)

