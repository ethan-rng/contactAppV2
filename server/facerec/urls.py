from django.urls import path
from .views import RecognizeFace, AddFace

urlpatterns = [
    path('facerec/add/<int:pk>', AddFace.as_view()),
    path('facerec/recognize', RecognizeFace.as_view()),
]