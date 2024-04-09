from django.urls import path
from .views import RecognizeFace, AddFace

urlpatterns = [
    path('add/<int:pk>', AddFace.as_view()),
    path('recognize', RecognizeFace.as_view()),
]