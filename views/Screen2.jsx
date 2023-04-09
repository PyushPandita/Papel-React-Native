import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { inputTextWallpaper } from '../atoms/WallpaperInputText';
// import RNFetchBlob from 'react-native-fetch-blob'

const Screen2 = ({ route }) => {
    const { clickedImage } = route.params;

    const [imageData, setImageData] = useState()
    const [searchValue, setSearchValue] = useRecoilState(inputTextWallpaper);

    useEffect(() => {
        setImageData(JSON.parse(clickedImage)?.cover_photo.urls.regular)
    }, [])
    // console.log(imageData)

    // const downloadImage = () => {

// let imgUrl = imageData

// let newImgUri = imgUrl.lastIndexOf('/');
// let imageName = imgUrl.substring(newImgUri);

// let dirs = RNFetchBlob.fs.dirs;
// let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;

//  RNFetchBlob.config({
//      fileCache: true,
//      appendExt: 'png',
//      indicator: true,
//      IOSBackgroundTask: true,
//      path: path,
//      addAndroidDownloads: {
//          useDownloadManager: true,
//          notification: true,
//          path: path,
//          description: 'Image'
//       },

//      }).fetch("GET", imgUrl).then(res => { 
//             console.log(res, 'end downloaded') 
//    });
//     }

    const showNextImage = async () => {
      // console.log(searchValue)
     const data = await fetch(`https://source.unsplash.com/900x1600/?${searchValue}`)
      // console.log(data.url)
      setImageData(data.url)
    }
    
  return (
  <View style={styles.container}>
      <Image style={styles.img} source={{uri: imageData}}/>
    
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.btnStyles} onPress={() => {}}>
        <Text style={styles.textStyle}>Download</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyles} onPress={showNextImage}>
        <Text style={styles.textStyle}>Next</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },

  img: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },

  btnStyles: {
    width: '30%',
    backgroundColor: 'grey',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    // elevation: 4,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#eee',
    letterSpacing: 2,
  }
});

export default Screen2;