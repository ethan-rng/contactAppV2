from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Face
from .utils.facerec import base64_to_np, crop_face
import cv2
import base64

# Create your views here.

class RecognizeFace(APIView):
    def get(self, request):
        return Response("", status=200)

    def post(self, request):
        image_data = request.data['image']
        image_np = base64_to_np(image_data)

        # Load pre-trained Haar Cascade classifier
        face_classifier = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

        # Convert image to grayscale
        gray_image = cv2.cvtColor(image_np, cv2.COLOR_BGR2GRAY)

        # Perform face detection
        faces = face_classifier.detectMultiScale(gray_image, scaleFactor=1.1, minNeighbors=5, minSize=(40, 40))

        # Draw bounding boxes around detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(image_np, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Convert the image back to base64 format
        _, buffer = cv2.imencode('.jpg', image_np)
        image_data_with_boxes = base64.b64encode(buffer).decode('utf-8')

        return Response({'image_with_boxes': image_data_with_boxes}, status=200)

class AddFace(APIView):
    model = Face

    def post(self, request, pk):
        image_data = request.data['image']
        self.model.create(contact_id=pk, image64=image_data)
        return Response({'message': 'Face added successfully'}, status=200)


class CompareFace(APIView):
    def post(self, request):
        image1_base64 = request.data.get('image1')
        image2_base64 = request.data.get('image2')
        
        if not image1_base64 or not image2_base64:
            return Response({'error': 'Both images are required'}, status=400)
        
        image1_np = base64_to_np(image1_base64)
        image2_np = base64_to_np(image2_base64)
        
        recognized_faces1 = RecognizeFace(image1_np)
        recognized_faces2 = RecognizeFace(image2_np)
        
        if recognized_faces1 and recognized_faces2:
            faces_match = CompareFace(recognized_faces1, recognized_faces2)
            
            if faces_match:
                return Response({'match': True}, status=200)
            else:
                return Response({'match': False}, status=200)
        else:
            return Response({'error': 'No faces detected in one or both images'}, status=400)