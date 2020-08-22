import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'
import { colors, gs } from '../utils/Styles'
import HeaderProfile from '../component/HeaderProfile'
import StatProfile from '../component/StatProfile'

export class Profile extends Component {
    state = {
        user: {},
        isLoading: true
    }
    async componentDidMount() {
        try {
            let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
            let users = await res.json()
            this.setState({ user: users.results[0] }, () => {
                this.setState({ isLoading: false })
            })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={[gs.center, styles.container]}>
                    <StatusBar 
                    backgroundColor='#f97878'
                     />
                    <ActivityIndicator size="large"/>
                </View>
            )
        } 
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#f97878' /> 
                <HeaderProfile user ={this.state.user} />
                <StatProfile/>
            </View>
        )
    }
}

export default Profile
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGB,
        flex: 1
    }
})
