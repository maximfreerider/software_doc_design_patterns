from django.urls import path
from app import views


urlpatterns = [
    path("posts/", views.PostView.as_view()),
    path("post/create/", views.CreatePost.as_view(), name='add_post'),
    path("post/<int:pk>/", views.DetailPost.as_view()),
    path("post/update/<int:pk>/", views.UpdatePost.as_view(), name='post_update_url'),
    path("post/delete/<int:pk>/", views.DeletePost.as_view(), name='post_delete_url'),
]
