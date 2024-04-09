from django.test import TestCase
from .models import Contact, Profile

contact = Contact.objects.create(
    user="jD",
    first_name='John',
    last_name='Doe',
    email='john@example.com',
    phone_number='123456789',
    birthdate='2000-01-01',
)

