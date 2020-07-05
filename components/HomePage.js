import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

import data from '../data/data';
// import all basic components
import FoodCard from './FoodCard';

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
  
  //Screen1 Component
  render() {
     // console.log(this.state.items);
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
           <FlatList data={data.items}
            style={{marginTop: 5}}
            keyExtractor={item => item.name}
            numColumns={2}
            renderItem={({item}) => <FoodCard detail={item} category={item.category}
            />} />
        </View>
    );
  }
}
