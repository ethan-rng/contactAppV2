from django.urls import path
from .views import ContactList, ContactDetail, RecentThreeContacts

urlpatterns = [
    path("contacts/", ContactList.as_view(), name="contact-list"),  # get contact list
    path(
        "contact/<int:pk>/", ContactDetail.as_view(), name="contact-list-create"
    ),  # get contact with pk
    path("contact/", ContactDetail.as_view()),  # post 1 contact
    path(
        "recentcontacts/", RecentThreeContacts.as_view(), name="recent-contact-list"
    ),  # get recent contact list
]
