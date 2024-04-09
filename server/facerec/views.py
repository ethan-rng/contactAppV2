from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Face
from .utils.facerec import base64_to_np, crop_face

# Create your views here.

class RecognizeFace(APIView):
    def get(self, request):
        return Response("HIIi", status=200)

    def post(self, request):
        image_data = request.data['image']
        image_data = base64_to_np(image_data)
        image_data = crop_face(image_data)

        for face in Face.objects.all():
            # if face.image == image_data:
            return Response("")

        return Response(status=200)



class AddFace(APIView):
    model = Face

    def post(self, request, pk):
        image_data = request.data['image']
        self.model.create(contact_id=pk, image64=image_data)
        return Response({'message': 'Face added successfully'}, status=200)


# class CompareFaces(APIView):
#     def post(self, request):
#         image1_base64 = request.data.get('image1')
#         image2_base64 = request.data.get('image2')
        
#         if not image1_base64 or not image2_base64:
#             return Response({'error': 'Both images are required'}, status=400)
        
#         image1_np = base64_to_np(image1_base64)
#         image2_np = base64_to_np(image2_base64)
        
#         recognized_faces1 = recognize_face(image1_np)
#         recognized_faces2 = recognize_face(image2_np)
        
#         if recognized_faces1 and recognized_faces2:
#             faces_match = compare_faces(recognized_faces1, recognized_faces2)
            
#             if faces_match:
#                 return Response({'match': True}, status=200)
#             else:
#                 return Response({'match': False}, status=200)
#         else:
#             return Response({'error': 'No faces detected in one or both images'}, status=400)


