import React from 'react';
import {ImageBackground, View, Text, StyleSheet } from 'react-native';

const Icons = (props) => { // props pour recuperer le contenu 
    return (
        <View style={styles.item}>
            <ImageBackground  source={props.ImageCover} imageStyle={{borderRadius: 30}} style={[styles.imagePlayer]}>
                <ImageBackground source={props.ImageCover} imageStyle={{borderRadius: 45}} style={[styles.ImageBackground]} />
            </ImageBackground>   
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: 300,
        height: 300,
        margin: 20
    },

    imagePlayer: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },

    ImageBackground: {
        width: '100%',
        height: '100%',
        position: 'relative',
        /*
        width: '105%',
        height: '105%',
        left: '-5%',
        top: '-2.5%',*/
        backgroundColor: "transparent",
        zIndex: -1000,
        borderRadius: 30,
        filter: 'blur(30px)',
    },
    
    imageCover: {
        width: '100%',
        height: '100%',
    },
});

export default Icons;