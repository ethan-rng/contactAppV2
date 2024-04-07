from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import Face
from .utils.facerec import base64_to_np, crop_face

# Create your views here.

class RecognizeFace(APIView):
    def post(self, request):
        image_data = request.data['image']
    
        image_data = base64_to_np(image_data)
        image_data = crop_face(image_data)

        for face in Face.objects.all():
            # if face.image == image_data:
                return Response("")
        
        return Response(status=404)


class AddFace(APIView):
    model = Face

    def post(self, request, pk):
        image_data = request.data['image']
        self.model.create(contact_id=pk, image64=image_data)
        return Response(status=200)