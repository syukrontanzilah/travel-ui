import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import { colors } from '../utils/Styles'
import Hotel from './Hotel'
import Header from '../component/Header'
import Bookmark from '../component/Bookmark'
import About from '../component/About'

const Home = () => {
    return (
        <ScrollView style={styles.page}>
            <StatusBar barStyle="light-content"
                backgroundColor={colors.darkGB}
            />
            <Header />
           <View>
                <Bookmark/>
                <About/>
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
