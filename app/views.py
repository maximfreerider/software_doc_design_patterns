from django.shortcuts import render, redirect
from django.views.generic.base import View
from app.forms import AccountForm
from app.models import Account


class AccountView(View):
    """list of accounts"""
    def get(self, request):
        accounts = Account.objects.all()
        return render(request, "app/accounts.html", {"account_list": accounts})


class CreateAccount(View):
    """create an account"""
    def get(self, request):
        return render(request, "app/account_creation.html", {})

    def post(self, request):
        """create new account"""
        form = AccountForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/accounts/")


class DetailAccount(View):
    """see data of current account by pk(id)"""
    def get(self, request, pk):
        account = Account.objects.get(id=pk)
        return render(request, "app/account_detail.html", {"account": account})


class DeleteAccount(View):
    """delete account"""
    def get(self, request, pk):
        account = Account.objects.get(id=pk)
        return render(request, "app/account_delete.html", {"account": account})

    def post(self, request, pk):
        account = Account.objects.get(id=pk)
        account.delete()
        return redirect("/accounts/")


class UpdateAccount(View):
    """update account"""
    def get(self, request, pk):
        account = Account.objects.get(id=pk)
        current_data = AccountForm(instance=account)
        return render(request, "app/account_update.html", {"form": current_data, "pk": pk})

    def post(self, request, pk):
        account = Account.objects.get(id=pk)
        updated_account = AccountForm(request.POST, instance=account)
        if updated_account.is_valid():
            updated_account.save()
        return redirect("/accounts/")
