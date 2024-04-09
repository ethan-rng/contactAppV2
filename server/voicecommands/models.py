from django.db import models
from typing import Tuple

# Create your models here.


class VoiceCommand(models.Model):
    MEANING_CHOICES = ((1, "add contact"), (2, "find contact"))

    command = models.TextField()
    meaning = models.IntegerField(choices=MEANING_CHOICES)

    # parse command
    # example: "add contact Bob Miller" -> (1, "Bob Miller")
    @classmethod
    def parse_command(cls, input_command: str) -> Tuple[int, str]:
        for voice_command in cls.objects.all():
            if voice_command.command in input_command:
                return (
                    voice_command.meaning,
                    input_command.replace(voice_command.command, "").strip(),
                )
        else:
            return (0, "Unknown")
