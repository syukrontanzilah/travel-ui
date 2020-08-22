import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { gs, colors } from '../utils/Styles'

const Extra = () => {
    const extras = [
        "Payment at Checkout",
        "Wifi Network is off by 12:00pm",
        "No Swimming after 10:00pm",
        "No more than 2 bags of luggage",
        "No signing while showering",
        "No Refunds"
    ]
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>
            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return <Text style={styles.listItem} key={key}>&ndash; {extra}</Text>
                })}
            </View>
            <View style={{ marginTop: 32, marginBottom: -45 }}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ color: '#fff', fontWeight:'bold' }}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Extra

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 50
    },
    list: {
        marginTop: 16,
        marginLeft: 8,
    },
    listItem: {
        color: colors.lightHL,
        marginVertical: 2
    },
    filterButton: {
        ...gs.button,
        paddingVertical:16

    }
})
