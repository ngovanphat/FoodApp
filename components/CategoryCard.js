// card forecast to show info weather in each area

import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {
    Text,
    Card, 
    Divider
} from 'react-native-elements';

export default class FoodCard extends Component {
    render(){
        return( 
            <Card containerStyle={styles.card}
            image={{uri: this.props.detail.strCategoryThumb}}
            imageStyle={{borderRadius: 20,}}
            >
                <View style={{ flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
                    <Text style={styles.name}>{this.props.detail.strCategory}</Text>
                </View>
               
            </Card>
           
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderRadius: 20,
        
        marginTop:17,
    },
    name: {
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        marginTop: 3,
        textAlign: 'center'
    },
});