import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { MapSVG } from '../asset'
import { gs, colors } from '../utils/Styles';
import Entypo from 'react-native-vector-icons/Entypo'

const LocationProfile = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: 40, height: 40, backgroundColor: '#ea3372', borderRadius: 40 / 2, opacity: 0.3 }}>
                <MapSVG />
            </View>
            <View style={{flex:1, marginLeft:15}}>
                <Text style={styles.location}>Jakarta, Indonesia</Text>
                <Text style={styles.distance}>64km away</Text>
            </View>
            <Entypo name="chevron-right" size={24} color={colors.darkHL}/>
        </View>
    )
}

export default LocationProfile

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        backgroundColor: colors.lightBG,
        paddingHorizontal:16,
        paddingVertical:20
    },
    location:{
        fontSize:18,
        color: colors.text,
    },
    distance:{
        ...gs.smallText,
        color: colors.darkHL,
        marginTop:3,
        // textTransform:'uppercase'

    }
})
