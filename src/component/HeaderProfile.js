import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { gs, colors, } from '../utils/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';

export class HeaderProfile extends Component {
    render() {
        const user = this.props.user
        const name = `${user.name.first} ${user.name.last}`
        return (
            <LinearGradient colors={['#f97878', '#ea3372']} >
                <View style={{ marginHorizontal: 20, paddingTop: 24, paddingBottom: 60 }}>
                    <View style={gs.rowBetween}>
                        <Ionicons name="md-arrow-back" color="#fff" size={30} />
                        <Entypo name="dots-three-vertical" color="#fff" size={24} />
                    </View>
                    <View style={styles.imageConteiner}>
                        <View>
                            <View style={styles.check}>
                                <Ionicons name="md-checkmark" size={20} color='#ea3372' />
                            </View>
                            <Image source={{ uri: user.picture.large }} style={{ height: 100, width: 100, borderRadius: 32 }} />
                        </View>
                    </View>

                    <View style={[gs.center, { marginVertical: 12 }]}>
                        <Text style={gs.title}>{name}</Text>
                        <Text style={[gs.subTitle, { marginTop: 5 }]}>Traveller | Bloger</Text>
                        <TouchableOpacity style={styles.follow}>
                            <Entypo name="plus" size={20} color="rgba(225,225,225,0.6)" />
                            <Text style={styles.textFollow}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

        )
    }
}

export default HeaderProfile;

const styles = StyleSheet.create({
    imageConteiner: {
        ...gs.center,
        shadowColor: colors.darkGB,
        shadowOffset: { height: 3, width: 1 },
        shadowOpacity: 0.5
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 32 / 2,
        height: 32,
        width: 32,
        position: 'absolute',
        zIndex: 2,
        right: -16,
        bottom: 16
    },
    follow: {
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 5,
        marginTop: 15,
        borderColor: 'rgba(225,225,225,0.5)',
        borderWidth: 1
    },
    textFollow: {
        fontSize: 16,
        color: "rgba(225,225,225,0.6)",
        marginLeft: 4
    }
})

