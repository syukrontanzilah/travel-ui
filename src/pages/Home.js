import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import { colors } from '../utils/Styles'
import Hotel from './Hotel'
import Header from '../component/Header'
import Bookmark from '../component/Bookmark'
import About from '../component/About'
import Stats from '../component/Stats'
import Fasilitas from '../component/Fasilitas'
import Address from '../component/Address'
import Extra from '../component/Extra'

const Home = () => {
    return (
        <ScrollView style={styles.page}>
            <StatusBar barStyle="light-content"
                backgroundColor={colors.darkGB}
            />
            <Header />
            <View>
                <Bookmark />
                <View style={{ marginTop: -56 }}>
                    <About />
                </View>
                <Stats />
                <Fasilitas />
                <Address />
                <Extra />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.darkGB
    }
})
