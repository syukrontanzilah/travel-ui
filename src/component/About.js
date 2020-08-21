import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../utils/Styles'

const hotel = {
    name: "Hotel Langham",
    price: "Rp. 2.500.000",
    location: "Jakarta",
    about: "Nikmati Hotel bintang lima kelas dunia di jantung kota Jakarta dengan view dan akses lokasi yang strategis di kawasan terpadu SCBD Sudirman"
}

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkGB
    },
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop:6,
        lineHeight:20,
        textAlign:'justify'
    }
})
