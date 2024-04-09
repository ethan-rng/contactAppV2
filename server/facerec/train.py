import os
import cv2
import numpy as np

def load_images_from_folder(folder):
    images = []
    labels = []
    try:
        for filename in os.listdir(folder):
            img_path = os.path.join(folder, filename)
            label = int(filename.split('_')[0])
            img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
            if img is not None:
                images.append(img)
                labels.append(label)
            else:
                print(f"Unable to read image: {img_path}")
    except Exception as e:
        print(f"Error loading images from folder: {e}")
    return images, labels


# Path to the directory containing face images
dataset_folder = 'server/facerec/data/lfw-deepfunneled/Aaron_Eckhart'

# Load face images and labels from the dataset
images, labels = load_images_from_folder(dataset_folder)

# Convert labels to numpy array
labels = np.array(labels)

# Create LBPH face recognizer
face_recognizer = cv2.face.LBPHFaceRecognizer_create()

# Train the face recognizer
face_recognizer.train(images, labels)

# Save the trained model to a file
face_recognizer.save('lbph_classifier.yml')

print("LBPH model trained and saved successfully!")
