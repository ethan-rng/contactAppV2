from django.urls import path
from .views import ProfileList, ContactListCreate, RelationshipListCreate

urlpatterns = [
    #path('contacts/', ProfileList.as_view()),
    path('contacts/',  ContactListCreate.as_view(), name='contact-list-create'),
    path('contact/<int:pk>/',  ContactListCreate.as_view(), name='contact-list-create'),
    path('relationship/<int:pk>/',  RelationshipListCreate.as_view(), name='contact-list-create'),
    path('contacts/', ContactListCreate.as_view(), name='contact-list-create')
]