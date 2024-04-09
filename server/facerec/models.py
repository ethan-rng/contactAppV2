from django.db import models
from contacts.models import Contact

# Create your models here.

class Face(models.Model):
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    image64 = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk) + " " + self.contact.first_name + " " + self.contact.last_name
    
    @classmethod
    def create(cls, contact_id: int, image64: str) -> None:
        contactObj = Contact.objects.get(id=contact_id)
        cls.objects.create(
            contact=contactObj,
            image64=image64
        )