import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { colors, gs } from '../utils/Styles';

const Bookmark = () => {
    return (
        <View style={styles.bookmark}>
            <Feather name="bookmark" size={24} color={colors.pink} />
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    bookmark: {
        // position: 'absolute',
        width:56,
        height:56,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius:56/2,
        right:32,
        top:-56/2,
        alignSelf:'flex-end',
        zIndex:10
        
      
        

    }
})
