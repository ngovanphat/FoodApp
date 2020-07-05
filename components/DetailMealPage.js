import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList, Image, TouchableHighlight, ScrollView} from 'react-native';
import {  withNavigation } from 'react-navigation';


class DetailMealPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            mealData: [],
          };
    }
    componentDidMount(){
        const idMeal  = this.props.navigation.getParam('idMeal','0');
        //const params = this.props.navigation.state;
        //console.warn(params);
        const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+idMeal;
        fetch(url)
        .then(response => response.json())
        .then((responseJson) => {
        this.setState({
            loading: false,
            mealData: responseJson.meals[0]
        });
        })
        .catch(error => console.log(error));// to catch any error when loading
    }
    
  //Screen1 Component
  render(){
     // console.log(this.state.items);
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
           <ScrollView>
                <Image source={{uri: this.state.mealData.strMealThumb}}
                    style={{width: '100%', height: 250}}
                />
                <Text style={{alignItems:'center', textAlign:'center',fontSize: 30,marginTop: 20, fontWeight: 'bold'}}>{this.state.mealData.strMeal} </Text>
                <Text style={{alignItems:'center', textAlign:'center',fontSize: 20,marginTop: 10, color: 'cyan', fontWeight: 'bold'}}>{this.state.mealData.strCategory}</Text>
                
                <View style={{ marginVertical: 10, alignItems:'flex-start', marginHorizontal: 25}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Area</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strArea}</Text>
                </View>
                
                <View style={{ marginVertical: 10, alignItems:'flex-start', marginHorizontal: 25}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Instruction</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strInstructions}</Text>
                </View>
                <View style={{ marginVertical: 10, alignItems:'flex-start', marginHorizontal: 25}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Ingredients</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient1}: {this.state.mealData.strMeasure1}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient2}: {this.state.mealData.strMeasure2}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient3}: {this.state.mealData.strMeasure3}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient4}: {this.state.mealData.strMeasure4}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient5}: {this.state.mealData.strMeasure5}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient6}: {this.state.mealData.strMeasure6}</Text>
                    <Text style={{fontSize: 17, marginTop: 10, fontWeight: '600',}}>{this.state.mealData.strIngredient7}: {this.state.mealData.strMeasure7}</Text>
                </View>

           </ScrollView>
        </View>
    );
  }
}
export default withNavigation(DetailMealPage);