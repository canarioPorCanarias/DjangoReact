from django.views import View
from django.views.generic.edit import FormView
from .forms import FormGetProductInfo
# Create your views here.


class GetProductInfo(FormView):
    form_class = FormGetProductInfo
    def post(self):
        if form:=self.form_valid():
            print(form)

    def form_valid(self, form):
        form.send_email()
        return super().form_valid(form)
