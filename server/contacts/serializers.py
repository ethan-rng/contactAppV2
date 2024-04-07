from rest_framework import serializers
from .models import Profile, Event, Relationship_Type, Photo, Contact, Relationship, MapContactEvent

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class RelationshipTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationship_Type
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class RelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationship
        fields = '__all__'

class MapContactEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapContactEvent
        fields = '__all__'