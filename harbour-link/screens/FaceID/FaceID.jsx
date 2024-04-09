import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState(null);
  const [hasFace, setHasFace] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
    setPhoto(null);
  }, []);

  const isFace = (base64img) => {
    fetch(`${apiUrl}/facerec/recognize/`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: base64img,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setHasFace(data["hasFace"]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    isFace(newPhoto.base64);
  };

  if (photo) {
    return (
      <SafeAreaView style={styles.container}>
        {/* {
        // Send Picture To Backend
        fetch("http://127.0.0.1:8000/facerec/recognize", {
          method: "POST",
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify({
            "image": photo.base64
          })
        })
        .then(response => {
          if(!response.ok){
            throw new Error('Network reponse was not ok.')
          }else{
            return response.json()
          }
        })
        .then(data => {
          return(
            <>

            </>
          )
        }).catch(error => {console.error("u fuck up loser", error)})
      } */}
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button
          title="Find Another Person UwU"
          onPress={() => setPhoto(undefined)}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Take Picture" onPress={takePic} />
          </View>
        </View>
        <StatusBar style="auto" />
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 45,
    color: "white",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 95,
    backgroundColor: "#9C9C9C",
  },
});
