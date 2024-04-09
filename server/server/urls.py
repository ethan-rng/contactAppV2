"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
#from contacts.views import ProfileListCreate, EventListCreate, RelationshipTypeListCreate, PhotoListCreate, ContactListCreate, RelationshipListCreate, MapContactEventListCreate

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contacts.urls'))
    # path('api/profiles/', ProfileListCreate.as_view(), name='profile-list-create'),
    # path('api/events/', EventListCreate.as_view(), name='event-list-create'),
    # path('api/relationship-types/', RelationshipTypeListCreate.as_view(), name='relationship-type-list-create'),
    # path('api/photos/', PhotoListCreate.as_view(), name='photo-list-create'),
    # path('api/contacts/', ContactListCreate.as_view(), name='contact-list-create'),
    # path('api/relationships/', RelationshipListCreate.as_view(), name='relationship-list-create'),
    # path('api/map-contact-events/', MapContactEventListCreate.as_view(), name='map-contact-event-list-create'),
]
