import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList, Image, TouchableHighlight} from 'react-native';
import { Navigation } from 'react-native-screens';
import {  withNavigation } from 'react-navigation';
import data from '../data/data';
// import all basic components
import FoodCard from './FoodCard';

class DetailCategoryPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            categoryData: [],
          };
    }
    componentDidMount(){
        const category  = this.props.navigation.getParam('category','Beef');
        console.log(category);
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+category;
        fetch(url)
        .then(response => response.json())
        .then((responseJson) => {
        this.setState({
            loading: false,
            categoryData: responseJson.meals
        });
        })
        .catch(error => console.log(error));// to catch any error when loading
    }
    //onClick Item of FlatList
    _actionOnRow(item){
     this.props.navigation.navigate('DetailMeal', {idMeal: item.idMeal});
     //this.props.navigation.push('DetailMeal',{idMeal: item.idMeal});
    }


  //Screen1 Component
  render(){
     // console.log(this.state.items);
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
           <FlatList data={this.state.categoryData}
            numColumns={2}
            style={{marginTop: 5}}
            keyExtractor={item => item.idMeal}
            
            renderItem={({item}) =>
            (
            <TouchableHighlight
            style={{flex:0.5, justifyContent:'center',alignItems:'center'}}
            onPress={() => this._actionOnRow(item)}
            underlayColor={'white'}>
                <FoodCard detail={item} />
            </TouchableHighlight>
            )}/>
        </View>
    );
  }
}
export default withNavigation(DetailCategoryPage);