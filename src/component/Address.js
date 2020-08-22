import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { ImageMap, Pin1, Pin2, Pin3, MapSVG } from '../asset'
import { gs, colors } from '../utils/Styles'

const Address = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#000' }}>
                <Image source={ImageMap} style={{ height: 200, opacity: 0.2 }} />
            </View>
            <View style={styles.addressContainer}>
                {/* <Image source={Pin1} style={{ width: 50, height: 50, opacity: 0.4 }} /> */}

                <MapSVG style={{ height: 45, width: 45, opacity: 0.8 }} />
                <View style={{ marginLeft: 5, marginTop: 12 }}>
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={styles.address}>
                        {`Jln. Senopati, SCBD Jakarta Selatan\n23299, Indonesia`}
                    </Text>
                    <View style={{ marginTop: 16 }}>
                        <TouchableOpacity style={styles.ceckButton}>
                            <Text style={gs.smallText}>Check it</Text>
                            <Entypo name="chevron-right" size={12} color="#fff" style={{ marginLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    addressContainer: {
        ...gs.absoluteFull,
        flexDirection: 'row',
        paddingHorizontal: 22,
        paddingVertical: 10
    },
    address: {
        ...gs.smallText,
        color: colors.darkHL,
        marginTop: 6,
        letterSpacing: 1,
        lineHeight: 20
    },
    ceckButton: {
        ...gs.button,
        paddingVertical:8,
        paddingHorizontal:16,
        alignSelf:'flex-start',
        flexDirection:'row'
    }
})
