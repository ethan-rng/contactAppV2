from django.urls import path
from .views import RecognizeFace, AddFace, CompareFace

urlpatterns = [
    path('add/<int:pk>', AddFace.as_view()),
    path('recognize', RecognizeFace.as_view()),
    path('compare', CompareFace.as_view()),
]