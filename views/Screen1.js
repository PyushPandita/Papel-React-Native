import { FlatList, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { inputTextWallpaper } from '../atoms/WallpaperInputText';
import Navbar from './Navbar';
// import { useNavigation } from '@react-navigation/native';

const Screen1 = ({navigation}) => {

  // const navigation = useNavigation();

  const accessKey = "zZyqR965RmNX_6PaG8mo3nhINQhqVhrgZ7OGpcj1DZA";
  //Here it will display the text of search bar from navbar
  const [searchValue, setSearchValue] = useRecoilState(inputTextWallpaper);
  // console.log(searchValue)

  const [imageCollection, setImageCollection] = useState([])
  const [isLoading, SetIsLoading] = useState(false)
  const getImageCollection = async () => {
    SetIsLoading(true)
    const res = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchValue}&client_id=${accessKey}`)
     const jsonData = await res.json();
    //  console.log(jsonData)
    setImageCollection(jsonData)
    SetIsLoading(false)
  }

  useEffect(() => {
    getImageCollection();
  }, [searchValue])

  const showWallpaper = (item) => {
    // console.log(item);
    return (navigation.navigate('Screen2', {clickedImage: `${JSON.stringify(item)}`
    }))
  }
  
  imageCollection.total === 0 && setSearchValue('all')
  return (
    <View style={styles.container}>
      <Navbar />
      <FlatList numColumns={2}
      data={imageCollection.results}
      keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {showWallpaper(item)}}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: item.cover_photo.urls.regular}}/>
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    // marginTop: 30,
  },

  imgContainer: {
    width: 170,
    height: 170,
    margin: 3,
  },

  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
});

export default Screen1;
