import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../utils/Styles'

const AboutProfile = () => {
    return (
        <View style={styles.conteiner}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
           <Text style={styles.about}>Adventure lover, hiking lover, nature lover, and all about beautifull Creations , please follow me to know more about me, Thanks!</Text>
        </View>
    )
}

export default AboutProfile

const styles = StyleSheet.create({
    conteiner: {
        margin: 32
    },
    about:{
        fontSize:15,
        color: colors.darkHL,
        marginTop:8,
        lineHeight:22
    }
})
