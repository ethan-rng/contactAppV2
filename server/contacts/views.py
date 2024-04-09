from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Profile, Event, Relationship_Type, Contact, Relationship, MapContactEvent
from .serializers import ProfileSerializer, EventSerializer, RelationshipTypeSerializer, ContactSerializer, RelationshipSerializer, MapContactEventSerializer
from django.contrib.auth import get_user_model

class ProfileList(APIView):
    model = Profile
    serializer_class = ProfileSerializer

    def get(self, request, format=None):
        profiles = self.model.objects.all()
        serializer = self.serializer_class(profiles, many=True)
        return Response(serializer.data)

class ContactList(APIView):
    model = Contact
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def get_queryset(self):
        # Set the primary key to 1
        pk = 1
        
        # Retrieve the profile/user based on the provided primary key (pk)
        profile = Profile.objects.get(pk=pk)
        
        # Return all contacts associated with the profile
        return Contact.objects.filter(user=profile)

class ContactDetail(APIView):
    model = Contact
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def get_queryset(self):
        # Return the contact associated with the profile
        pk = self.kwargs.get('pk')
        return Contact.objects.get(pk=pk)

    def get(self, request, pk, format=None):
        contact = self.get_queryset()
        serializer = self.serializer_class(contact)  # Remove many=True
        return Response(serializer.data)
    
    User = get_user_model()

    def post(self, request, pk, format=None):
        # Fetch the Profile associated with the current user
        try:
            user_profile = Profile.objects.get(user=request.user)
        except Profile.DoesNotExist:
            return Response({"error": "Profile not found for the current user."},
                            status=status.HTTP_404_NOT_FOUND)
        
        # Create a contact using the retrieved profile
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                            
class EventListCreate(generics.ListCreateAPIView):
    model = Event
    serializer_class = EventSerializer

    def get(self, request, pk, format=None):
        profile = self.model.objects.get(pk=pk)  # Correct syntax to get profile by its primary key
        serializer = self.serializer_class(profile)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # Associate the contact with the user profile
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RelationshipTypeListCreate(generics.ListCreateAPIView):
    model = Relationship_Type
    serializer_class = RelationshipTypeSerializer

    def get(self, request, pk, format=None):
        profile = self.model.objects.get(pk=pk)  # Correct syntax to get profile by its primary key
        serializer = self.serializer_class(profile)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class RelationshipListCreate(generics.ListCreateAPIView):
    model = Relationship
    serializer_class = RelationshipSerializer
    queryset = Relationship.objects.all()

    def get_queryset(self):
        # Retrieve the profile/user based on the provided primary key (pk)
        pk = self.kwargs.get('pk')
        profile = Profile.objects.get(pk=pk)
        
        # Return all relationships associated with the profile
        return Relationship.objects.filter(user=profile)

    def get(self, request, pk, format=None):
        relationships = self.get_queryset()
        serializer = self.serializer_class(relationships, many=True)
        return Response(serializer.data)
    
    # User = get_user_model()

    # def post(self, request, pk, format=None):
    #     try:
    #         # Retrieve the profile associated with the provided primary key
    #         profile = Profile.objects.get(pk=pk)
    #     except Profile.DoesNotExist:
    #         return Response({"error": "Profile does not exist."},
    #                         status=status.HTTP_404_NOT_FOUND)

    #     # Check if the profile associated with the contact matches the user's profile
    #     if profile.user == request.user:
    #         # Fetch the Profile associated with the current user
    #         try:
    #             user_profile = Profile.objects.get(user=request.user)
    #         except Profile.DoesNotExist:
    #             return Response({"error": "Profile not found for the current user."},
    #                             status=status.HTTP_404_NOT_FOUND)
            
    #         # Create a contact using the retrieved profile
    #         serializer = self.serializer_class(data=request.data)
            
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data, status=status.HTTP_201_CREATED)
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #     else:
    #         return Response({"error": "You can only create relationships under your own profile."},
    #                         status=status.HTTP_403_FORBIDDEN)

class MapContactEventListCreate(generics.ListCreateAPIView):
    model = MapContactEvent
    serializer_class = MapContactEventSerializer

    def get(self, request, pk, format=None):
        profile = self.model.objects.get(pk=pk)  # Correct syntax to get profile by its primary key
        serializer = self.serializer_class(profile)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    