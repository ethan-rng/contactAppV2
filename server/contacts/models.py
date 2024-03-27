from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.user)

class Event(models.Model):
    name = models.CharField(max_length=255, null = True)
    location = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()

    def __str__(self) -> str:
        return self.name

class Relationship_Type(models.Model):
    description = models.TextField()

    def __str__(self) -> str:
        return self.description

class Photo(models.Model):
    photo_url = models.ImageField()

class Contact(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.BigIntegerField()
    birthdate = models.DateField()
    photo = models.ForeignKey(Photo, on_delete=models.SET_NULL, null=True, blank=True)
    notes = models.TextField()

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name

class Relationship(models.Model):
    from_contact = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name = "from_contact")
    to_contact = models.ForeignKey(Contact, on_delete=models.CASCADE, related_name = "to_contact")
    relationship_type = models.ForeignKey(Relationship_Type, on_delete=models.CASCADE)

class MapContactEvent(models.Model):
     event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
     contact = models.ForeignKey(Contact, on_delete=models.CASCADE, null=True)