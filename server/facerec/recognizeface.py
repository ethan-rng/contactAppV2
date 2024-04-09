import cv2

imagePath = 'input_image.jpg'
img = cv2.imread(imagePath)

if img is None:
    print("Failed to load image!")
else:
    print("Image loaded successfully!")
    print("Image dimensions:", img.shape)
    # Continue with further processing


textFilePath = 'image_data.txt'

with open(textFilePath, 'r') as file:
    image_data = file.read()

img = cv2.imread(image_data)

print("Image dimensions:", img.shape)

# gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)


# print("Grayscale image dimensions:", gray_image.shape)

# # Step 5: Load the pre-trained Haar Cascade classifier
# face_classifier = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# faces = face_classifier.detectMultiScale(gray_image, scaleFactor=1.1, minNeighbors=5, minSize=(40, 40))

# print("Number of faces detected:", len(faces))

# for (x, y, w, h) in faces:
#     cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 4)

# img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# # Display the image with detected faces
# cv2.imshow('Detected Faces', img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()