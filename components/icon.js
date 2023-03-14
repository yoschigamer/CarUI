import React from 'react';
import {Linking, TouchableOpacity, ImageBackground, View, StyleSheet } from 'react-native';

const Icons = (props) => { // props pour recuperer le contenu 
    return (

        <TouchableOpacity  style={styles.item} onPress={() => Linking.openURL(props.Url)}>
            <ImageBackground source={props.ImageIcon} style={styles.image}></ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#D9D9D9',
        width: 130,
        height: 130,
        borderRadius: 32,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 22.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 45,
        elevation: 50,
    },

    image: {
        width: '100%',
        height: '100%',
    }
});

export default Icons;