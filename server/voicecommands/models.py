from django.db import models
from typing import Tuple

# Create your models here.


class VoiceCommand(models.Model):
    MEANING_CHOICES = ((1, "add contact"), (2, "find contact"))

    command = models.TextField()
    meaning = models.IntegerField(choices=MEANING_CHOICES)

    # parse command
    # example: "add contact Bob Miller" -> (1, "Bob Miller")
    def parse_command(self, input_command: str) -> Tuple[int, str]:
        for voice_command in VoiceCommand.objects.all():
            if voice_command.command in input_command:
                return (
                    voice_command.meaning,
                    input_command.replace(voice_command.command, "").strip(),
                )
