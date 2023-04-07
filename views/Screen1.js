import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { inputTextWallpaper } from '../atoms/WallpaperInputText';

const Screen1 = () => {

  const accessKey = "zZyqR965RmNX_6PaG8mo3nhINQhqVhrgZ7OGpcj1DZA";
  //Here it will display the text of search bar from navbar
  const [searchValue, setSearchValue] = useRecoilState(inputTextWallpaper);
  // console.log(searchValue)

  const [imageCollection, setImageCollection] = useState([])
  const getImageCollection = async () => {
    const res = await fetch(`https://api.unsplash.com/search/collections?page=1&query=${searchValue}&client_id=${accessKey}`)
     const jsonData = await res.json();
    //  console.log(jsonData)
    setImageCollection(jsonData)
  }

  useEffect(() => {
    getImageCollection();
  }, [searchValue])
  
  return (
    <View style={styles.container}>
      <FlatList data={imageCollection.results}
        renderItem={({item}) => {
          return (
            <View> style={styles.imgContainer}
              <Text>{item.title}</Text>
              <Image style={styles.img} source={{uri: item.cover_photo.urls.regular}}/>
            </View>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  },

  img: {
    width: 100,
    height: 100,
  }
});

export default Screen1;
