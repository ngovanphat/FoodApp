import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList } from 'react-native';
// import all basic components
import CategoryCard from './CategoryCard';
import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationActions, withNavigation } from 'react-navigation';
 class CategoryPage extends Component {
  static navigationOptions = {
    title: 'Categories'
  }
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      categoryData: [],
    };
  }
  //When start the screen the function below will load the data from api
  componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        loading: false,
        categoryData: responseJson.categories
      });
    })
    .catch(error => console.log(error));// to catch any error when loading
  }
  //on click item of flat list
  actionOnRow(item){
   //console.log(item.strCategory);
   // this.props.navigation.setParams('category',item.strCategory);
  //this.props.navigation.navigate('DetailCategory',{category: item.strCategory});
  this.props.navigation.push('DetailCategory',{category: item.strCategory});
  }
  //Screen2 Component
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      <FlatList data={this.state.categoryData}
       style={{marginTop: 5}}
       keyExtractor={item => item.idCategory}
       renderItem={({item}) => (
        <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>
          <CategoryCard detail={item} style={{marginTop: 15}}
          />
        </TouchableWithoutFeedback>
       )} />
   </View>
    );
  }
}
export default withNavigation(CategoryPage);