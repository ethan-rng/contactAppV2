import json
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import VoiceCommand
from contacts.models import Contact

# Create your views here.


class VoiceCommandView(APIView):
    model = VoiceCommand

    def post(self, request):
        audio = request.data["audio"]
        # convert audio to text
        text = "add contact bob miller"
        command_pk, name = VoiceCommand.parse_command(text)

        if command_pk == 1:
            Contact.create_contact_by_name(name)
            return Response({"message": "Contact Created"}, status=200)
        elif command_pk == 2:
            contactObj = Contact.get_contact_by_name(name)
            if contactObj == None:
                return Response({"message": "Contact not found"}, status=404)
            return Response(
                {"message": "Contact found", "contact_pk": str(contactObj.pk)},
                status=200,
            )
        else:
            return Response({"message": "Command not Recognized"}, status=404)


class TextCommandView(APIView):
    model = VoiceCommand

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        text = data["command"]
        command_pk, name = VoiceCommand.parse_command(text)

        if command_pk == 1:
            Contact.create_contact_by_name(name)
            return Response(
                {"message": "Contact Created with name: " + name}, status=200
            )
        elif command_pk == 2:
            contactObj = Contact.get_contact_by_name(name)
            if contactObj == None:
                return Response({"message": "Contact not found"}, status=200)
            return Response(
                {"message": "Do you mean " + str(contactObj) + "?"},
                status=200,
            )
        else:
            return Response({"message": "Command not Recognized"}, status=200)
