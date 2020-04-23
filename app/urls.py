from django.urls import path
from app import views


urlpatterns = [
    path("", views.AccountView.as_view()),
    path("account/create/", views.CreateAccount.as_view()),
    path("account/<int:pk>/", views.DetailAccount.as_view()),
    path("account/delete/<int:pk>/", views.DeleteAccount.as_view(), name='account_delete_url'),
    path("account/update/<int:pk>/", views.UpdateAccount.as_view(), name='account_update_url'),
]
