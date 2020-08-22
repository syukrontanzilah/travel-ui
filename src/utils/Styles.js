import { StyleSheet } from 'react-native'
import { RangeObservable } from 'rxjs/observable/RangeObservable'

export const colors = {
    darkGB: '#222',
    lightBG: '#333',
    darkHL: "#666",
    lightHL: '#888',
    pink: '#ea3372',
    text: '#fff',
    textSec: '#aaa',
    orange: '#f97878'

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
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lightBG
    },
    title: {
        color: colors.text,
        fontSize: 30,
    },
    subTitle: {
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 15,
        letterSpacing: 1
    },
    divider: {
        borderBottomColor: '#444',
        borderBottomWidth: 0.8,
        marginVertical: 20
    },
    sectionTitle: {
        fontWeight: '700',
        color: colors.text
    },
    absoluteFull: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    smallText: {
        fontSize: 12,
        color: colors.text
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
        borderRadius: 100
    }
})