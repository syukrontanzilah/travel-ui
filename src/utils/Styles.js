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
    }
})