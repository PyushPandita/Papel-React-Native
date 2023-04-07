import { StyleSheet, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { inputTextWallpaper } from '../atoms/WallpaperInputText';

const Navbar = () => {

  //for react recoil, this will store the value in inputTextWallpaper
  const [searchValue, setSearchValue] = useRecoilState(inputTextWallpaper);

  //stores the search
  const [search, setSearch] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/ios/512/search.png"}}/>
        <TextInput style={styles.searchIput} placeholder='Search Images...'
          value={search}
          onChangeText={(searchData) => {
            setSearch(searchData)
            setSearchValue(searchData)
            // console.log((searchValue));
            // console.log(setSearch(searchData))
          }} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    width: '100%',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    padding: 5,
    borderRadius: 10,
    width: '80%',
  },

  img: {
    width: 20,
    height: 20, 
  },

  searchIput: {
    fontSize: 20,
    width: '90%',
    padding: 6,
    paddingLeft: 10,
        
  }
});

export default Navbar;
