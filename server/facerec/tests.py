from django.test import TestCase

from rest_framework.test import APITestCase
from rest_framework import status
import os

class FaceRecognitionTests(APITestCase):
    def read_image_data_from_file(self, file_path):
        with open(file_path, 'r') as f:
            return str(f.read())
        
    def test_add_face(self):
        image_data = self.read_image_data_from_file('./facerec/image_data.txt')
        response = self.client.post('/facerec/add/100', {'image': image_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_recognize_face(self):
        image_data = self.read_image_data_from_file('./facerec/image_data.txt')
        response = self.client.post('/facerec/recognize', {'image': image_data}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        expected_data = {'some_expected_data': 'here'}
        #self.assertEqual(response.data, expected_data)

   