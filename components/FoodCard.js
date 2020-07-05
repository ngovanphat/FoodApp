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
            image={{uri: this.props.detail.strMealThumb}}
            imageStyle={{borderRadius: 20, width: 175, height: 170}}
            >
                <View style={{ flexDirection: 'column', justifyContent: 'space-between',alignItems:'center'}}>
                    <Text style={styles.name}>{this.props.detail.strMeal}</Text>
                    <Text style={styles.category}>{this.props.category}</Text>
                </View>
               
            </Card>
           
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop:10, 
        borderWidth: 0,
        borderRadius: 20,
        flex: 0.5,
        textAlign: 'center'
    },
    name: {
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        marginTop: 3,
        textAlign: 'center'
    },
    category: {
        fontSize: 16,
        paddingTop: 10
    }

});