from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Face
from .utils.facerec import base64_to_np, crop_face
import cv2
import os

# Create your views here.


class RecognizeFace(APIView):
    def get(self, request):
        return Response("", status=200)

    def post(self, request):
        # Get the image data from the request
        image_data = request.data["image"]

        # Convert the base64-encoded image data to a numpy array
        image_np = base64_to_np(image_data)

        # Crop the face from the image
        cropped_face = crop_face(image_np)

        # Check if the cropped face is already grayscale
        if len(cropped_face) == 0:
            return Response({"hasFace": "false"}, status=200)
        # if len(cropped_face.shape) == 2:
        #     cropped_face_gray = cropped_face
        # else:  # Convert to grayscale
        #     cropped_face_gray = cv2.cvtColor(cropped_face, cv2.COLOR_RGB2GRAY)

        # # Load the trained face recognition model (LBPH)
        # face_recognizer = cv2.face.LBPHFaceRecognizer_create()
        # print(os.listdir())
        # face_recognizer.read(r"server\facerec\haarcascade_frontalface_default.xml")

        # for face in Face.objects.all():
        #     # Convert the base64-encoded image data of the face in the database to a numpy array
        #     database_face_np = base64_to_np(face.image64)

        #     # Crop the face from the database image
        #     database_face_cropped = crop_face(database_face_np)
        #     database_face_gray = cv2.cvtColor(database_face_cropped, cv2.COLOR_RGB2GRAY)

        #     # Use the face recognition model to predict the identity of the face
        #     label, confidence = face_recognizer.predict(database_face_gray)

        #     # Check if the recognized face matches any face in the database within a certain threshold
        #     if label == 1 and confidence < 50:  # Adjust threshold as needed
        #         return Response({"hasFace": "true"}, status=200)

        # # If no matching face is found in the database
        return Response({"hasFace": "true"}, status=200)


class AddFace(APIView):
    model = Face

    def post(self, request, pk):
        image_data = request.data["image"]
        self.model.create(contact_id=pk, image64=image_data)
        return Response({"message": "Face added successfully"}, status=200)


class CompareFace(APIView):
    def post(self, request):
        image1_base64 = request.data.get("image1")
        image2_base64 = request.data.get("image2")

        if not image1_base64 or not image2_base64:
            return Response({"error": "Both images are required"}, status=400)

        image1_np = base64_to_np(image1_base64)
        image2_np = base64_to_np(image2_base64)

        recognized_faces1 = RecognizeFace(image1_np)
        recognized_faces2 = RecognizeFace(image2_np)

        if recognized_faces1 and recognized_faces2:
            faces_match = CompareFace(recognized_faces1, recognized_faces2)

            if faces_match:
                return Response({"match": True}, status=200)
            else:
                return Response({"match": False}, status=200)
        else:
            return Response(
                {"error": "No faces detected in one or both images"}, status=400
            )
