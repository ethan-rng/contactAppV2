# Generated by Django 5.0.3 on 2024-04-09 21:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0014_alter_contact_birthdate_alter_contact_email_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'ordering': ['-updated_at']},
        ),
    ]
