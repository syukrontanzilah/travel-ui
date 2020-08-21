import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ImageHotel8 } from '../asset';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { gs } from '../utils/Styles';

const Header = () => {
  return (
    <View>
      <Image source={ImageHotel8}
        style={{ width: '100%', height: 380 }} />
      <View style={styles.topButton}>
        <AntDesign name="close" size={24} color="#fff" />
        <View style={gs.rowCenter}>
          <AntDesign name="save" size={24} color="#fff" style={styles.topButtonRight} />
          <AntDesign name="sharealt" size={24} color="#fff" style={styles.topButtonRight} />
          <Entypo name="dots-three-vertical" size={18} color="#fff" style={styles.topButtonRight} />
        </View>
      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  topButton: {
    ...gs.rowBetween,
    position: 'absolute',
    top: 15,
    left: 15, 
    right:20
  },
  topButtonRight: {
    marginLeft: 12
  }
})
