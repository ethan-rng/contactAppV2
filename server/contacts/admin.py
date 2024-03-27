from django.contrib import admin
from .models import Profile, Contact, Relationship, Relationship_Type, Event, Photo, MapContactEvent

# Register your models here.
admin.site.register(Profile)
admin.site.register(Contact)
admin.site.register(Relationship)
admin.site.register(Event)
admin.site.register(Relationship_Type)
admin.site.register(Photo)
admin.site.register(MapContactEvent)