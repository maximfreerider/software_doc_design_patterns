from django.shortcuts import render, redirect
from django.views.generic.base import View
from app.forms import PostForm
from app.models import Post, Account


class PostView(View):
    def get(self, request):
        posts = Post.objects.all()
        return render(request, "app/posts.html", {"post_list": posts})


class AccountView(View):
    def get(self, request):
        accounts = Account.objects.all()
        return render(request, "app/accounts.html", {"account_list": accounts})


class CreatePost(View):
    def get(self, request):
        return render(request, "app/post_creation.html", {})

    def post(self, request):
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/posts/")


class DetailPost(View):
    def get(self, request, pk):
        post = Post.objects.get(id=pk)
        return render(request, "app/post_detail.html", {"post": post})


class DeletePost(View):
    def get(self, request, pk):
        post = Post.objects.get(id=pk)
        return render(request, 'app/post_delete.html', {"post": post})

    def post(self, request, pk):
        post = Post.objects.get(id=pk)
        post.delete()
        return redirect("/posts/")


class UpdatePost(View):
    def get(self, request, pk):
        post = Post.objects.get(id=pk)
        b_form = PostForm(instance=post)
        return render(request, 'app/update_post.html', {"form":b_form, "pk": pk})

    def post(self, request, pk):
        post = Post.objects.get(id=pk)
        updated_post = PostForm(request.POST, instance=post)
        if updated_post.is_valid():
            updated_post.save()
            return redirect(f"/posts/")
