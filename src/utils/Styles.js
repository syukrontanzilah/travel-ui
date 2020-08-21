import { StyleSheet } from 'react-native'

export const colors = {
    darkGB: '#222',
    lightBG: '#333',
    darkHL: "#666",
    lightHL: '#888',
    pink: '#ea3372',
    text: '#fff',
    textSec: '#aaa'

}

export const gs = StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    }, 
    sectionContainer:{
        paddingVertical:24,
        paddingHorizontal:32,
        marginBottom:8,
        backgroundColor: colors.lightBG
    }, 
    title:{
        color:colors.text,
        fontSize:30, 
    },
    divider:{
        borderBottomColor:'#444',
        borderBottomWidth:0.8,
        marginVertical:20
    },
    sectionTitle:{
        fontWeight:'700',
        color:colors.text
    }
})