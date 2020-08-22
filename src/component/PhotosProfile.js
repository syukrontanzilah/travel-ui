import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ImageHotel1, ImageHotel2, ImageHotel3, ImageHotel4, ImageHotel5, ImageHotel6, ImageHotel7, ImageHotel8, ImageHotel9, ImageHotel10 } from '../asset'
import { gs } from '../utils/Styles'

const photos = [
    ImageHotel1,
    ImageHotel2,
    ImageHotel3,
    ImageHotel4,
    ImageHotel5,
    ImageHotel6,
    ImageHotel7,
    ImageHotel8,
    ImageHotel9,
    ImageHotel10
]

const PhotosProfile = () => {
    return (
        <View style={[gs.sectionContainer, { marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>My Photos</Text>
            <View style={styles.photoContainer}>
                {photos.map((photo, index) => {
                    return (
                        <Image source={photo} key={index} style={[styles.photo, 
                            // {marginRight: (index + 1) % 3 === 0 ? 0 : 15,}
                    ]} />
                    )
                })}
            </View>
        </View>
    )
}

export default PhotosProfile

const styles = StyleSheet.create({
    container: {

    },
    photoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        justifyContent:'space-between'
    },
    photo: {
        width: 108,
        height: 108,
        marginBottom: 12,
        borderRadius: 0,
    }
})
