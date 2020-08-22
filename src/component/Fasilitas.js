import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'


const Fasilitas = () => {
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Fasilitas</Text>
            <View style={styles.fasilitasContainer}>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <Feather name="wifi" size={24} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>WI-FII</Text>
                </View>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <Ionicons name="md-restaurant" size={20} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>Hotel Restaurant</Text>
                </View>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <FontAwesome5 name="swimmer" size={20} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>Kolam Renang</Text>
                </View>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <Feather name="coffee" size={22} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>Cafe</Text>
                </View>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>Parking Spot</Text>
                </View>
                <View style={styles.fasilitasWrap}>
                    <View style={styles.fasilitas}>
                        <Ionicons name='musical-notes' size={22} color={colors.lightHL} />
                    </View>
                    <Text style={styles.title}>Music</Text>
                </View>
            </View>
        </View>
    )
}

export default Fasilitas

const styles = StyleSheet.create({
    fasilitasContainer: {
        marginTop: 16,
        marginHorizontal: 15,
        ...gs.rowBetween,
        flexWrap: 'wrap'
    },
    fasilitasWrap: {
        alignItems: 'center',
        width:95,
        marginVertical:12,
    },
    fasilitas:{
        width:48,
        height:48,
        ...gs.center,
        backgroundColor:'#444',
        borderRadius:48/2
    },
    title:{
        color:colors.lightHL,
        fontSize:12,
        fontWeight:'600',
        marginTop:6,
        textAlign:'center'

    }
})
