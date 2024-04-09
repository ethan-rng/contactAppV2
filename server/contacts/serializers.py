from rest_framework import serializers
from .models import (
    Profile,
    Event,
    Relationship_Type,
    Contact,
    Relationship,
    MapContactEvent,
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"


class RelationshipTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationship_Type
        fields = "__all__"


class ContactSummarySerializer(serializers.Serializer):
    def to_representation(self, instance):
        return {
            "id": instance.id,
            "first_name": instance.first_name,
            "last_name": instance.last_name,
            "pronouns": instance.pronouns,
            "photo_url": instance.photo.url,
        }


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class RelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationship
        fields = "__all__"


class MapContactEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapContactEvent
        fields = "__all__"
