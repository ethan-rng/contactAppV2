from django.urls import path
from .views import VoiceCommandView, TextCommandView

urlpatterns = [
    path("voicecommand/", VoiceCommandView.as_view()),
    path("textcommand", TextCommandView.as_view()),
]
