import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class TransactionScreen extends Component {

    render() {



        return (
            <View style={styles.container}> 
                <Text style={styles.text}>This is TransactionScreen</Text>
            </View>
          


        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#12fb6f'
        

    },
    text:{
        color:'#ffffff',
        fontSize:25,


    }
})
