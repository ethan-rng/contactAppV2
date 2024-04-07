import cv2
import numpy as np
import base64



def base64_to_np(base64_string):
    base64_string = base64_string.split(',')[-1]

    decoded_data = base64.b64decode(base64_string)

    # Convert the binary data to a numpy array
    nparr = np.frombuffer(decoded_data, np.uint8)

    # Decode the numpy array into an image
    return cv2.imdecode(nparr, cv2.IMREAD_COLOR)


def crop_face(image):
    # Initialize the OpenCV face detector
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Detect faces in the image
    faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    return faces