from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.user)


class Event(models.Model):
    name = models.CharField(max_length=255, null=True)
    location = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()

    def __str__(self) -> str:
        return self.name


class Relationship_Type(models.Model):
    description = models.TextField()

    def __str__(self) -> str:
        return self.description


class Contact(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(null=True)
    phone_number = models.BigIntegerField(null=True)
    birthdate = models.DateField(null=True)
    photo = models.ImageField(upload_to="photos/", null=True)
    notes = models.TextField(default="")

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name

    @classmethod
    def get_contact_by_name(cls, name: str):
        name_parts = name.split(" ")
        if len(name_parts) > 2:
            raise NotImplementedError("Only first and last names are supported")

        if len(name_parts) == 2:
            queryset = cls.objects.filter(
                first_name=name_parts[0], last_name=name_parts[1]
            )
        else:
            queryset = cls.objects.filter(first_name=name_parts[0])

        if len(name_parts) == 1:
            queryset = queryset.union(
                cls.objects.filter(last_name=name_parts[0]),
                cls.objects.filter(first_name=name_parts[0]),
            )

        if queryset == None:
            return None

        if queryset.exists():
            return queryset.first()
        else:
            return None

    def create_contact_by_name(cls, name: str) -> None:
        name_parts = name.split(" ")
        if len(name_parts) > 2:
            raise NotImplementedError("Only first and last names are supported")

        if len(name_parts) == 2:
            cls.objects.create(first_name=name_parts[0], last_name=name_parts[1])
        else:
            cls.objects.create(first_name=name_parts[0])


class Relationship(models.Model):
    from_contact = models.ForeignKey(
        Contact, on_delete=models.CASCADE, related_name="from_contact"
    )
    to_contact = models.ForeignKey(
        Contact, on_delete=models.CASCADE, related_name="to_contact"
    )
    relationship_type = models.ForeignKey(Relationship_Type, on_delete=models.CASCADE)


class MapContactEvent(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, null=True)
