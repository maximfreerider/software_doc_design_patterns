from django.urls import path
from app import views


urlpatterns = [
    path("posts/", views.PostView.as_view()),
    path("post/create/", views.CreatePost.as_view()),
    path("post/<int:pk>/", views.DetailPost.as_view()),
    path("post/update/<int:pk>/", views.UpdatePost.as_view(), name='post_update_url'),
    path("post/delete/<int:pk>/", views.DeletePost.as_view(), name='post_delete_url'),

    path("accounts/", views.AccountView.as_view()),
    path("account/create/", views.CreateAcccount.as_view()),
    path("account/<int:pk>/", views.DetailAccount.as_view()),
    path("account/delete/<int:pk>/", views.DeleteAccount.as_view(), name='account_delete_url'),
    path("account/update/<int:pk>/", views.UpdateAccount.as_view(), name='account_update_url'),
]
