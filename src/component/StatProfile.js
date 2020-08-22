import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../utils/Styles'

const StatProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>12k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>
            <View style={[styles.statContainer, styles.divider]}>
                <Text style={styles.statNumber}>12k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>
            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>12k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>
        </View>
    )
}

export default StatProfile

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: -48
    },
    statContainer: {
        ...gs.center,
        flex: 1
    },
    statNumber: {
        fontSize: 20,
        color: colors.text
    },
    stat: {
        fontSize: 11,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: colors.lightHL,
        marginTop: 5
    },
    divider:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor: colors.darkHL


    }
})
