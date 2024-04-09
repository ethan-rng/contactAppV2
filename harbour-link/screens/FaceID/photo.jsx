import {takePictureAsync } from 'expo-camera/next';
import { Camera } from 'expo-camera';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
<View style={{ flex: 1 }}>
  <Camera style={{ flex: 1 }} ref={cameraRef} />
  <View style={{ backgroundColor: 'white', alignItems: 'flex-end' }}>
    <Button title="Take Picture" onPress={takePicture} />
  </View>
</View>
const takePicture = async() =>{
    if (cameraRef.current){
      const options = {quality: 1, base64: true, exif: false};
      const photo = await cameraRef.current.takePictureAsync(options);
      setPhoto(photo)
    }
  }
  const savePhoto = async () => {
    if (photo?.uri) {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      setPhoto(undefined);
    }
  };