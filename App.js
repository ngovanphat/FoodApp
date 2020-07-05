// Main app
import React, { Component } from 'react';
import {
  StyleSheet, Platform, View, Text, Image, TouchableOpacity,
  YellowBox, Dimensions
} from 'react-native';
import Button from 'react-native-button';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// import all the screens
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/SearchPage';
import DetailCategoryPage from './components/DetailCategoryPage';
import DetailMealPage from './components/DetailMealPage';
// import custom Drawer \ sidebar
import SideMenu from './sidemenu';

// Navigation Menu for all screen
class NavigationMenuStructure extends Component{
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render(){
    return(
      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image 
            source = {require('./icons/menu-icon.png')}
            style={{ width: 25, height: 25, marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigation Home
const HomeActivity = createStackNavigator({
  //All Screen of Home Activity will appear here
  Home: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: () => <NavigationMenuStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
      headerTitle: 'Home',
      headerTitleStyle: {color: 'black'},
      headerTitleAlign: 'center'
    }),
  },
})

//Stack Navigation Category
const CategoryActivity = createStackNavigator({
  //All Screen of Category Activity will appear here
  Category: {
    screen: CategoryPage,
    navigationOptions: ({navigation}) => ({
      title: 'Categories',
      headerLeft: () => <NavigationMenuStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
      headerTitle: 'Categories',
      headerTitleStyle: {color: 'black'},
      headerTitleAlign: 'center'
    }),
  },
})

//Stack Navigation Search
const SearchActivity = createStackNavigator({
  //All Screen of Home Activity will appear here
  Search: {
    screen: SearchPage,
    navigationOptions: ({navigation}) => ({
      title: 'Search',
      headerLeft: () => <NavigationMenuStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
      headerTitle: 'Search',
      headerTitleStyle: {color: 'black'},
      headerTitleAlign: 'center'
    }),
  },
})

const DetailCategoryScreen = createStackNavigator({
  DetailCategory: {
    screen: DetailCategoryPage,
    navigationOptions: ({navigation}) => ({
      title: 'Category',
      headerLeft: () => <NavigationMenuStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
      headerTitle: 'Category',
      headerTitleStyle: {color: 'black'},
      headerTitleAlign: 'center'
    })
  }
});

const DetailMealScreen = createStackNavigator({
  DetailMeal: {
    screen: DetailMealPage,
    navigationOptions: ({navigation}) => ({
      title: 'Detail Meal',
      headerLeft: () => <NavigationMenuStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
      headerTitle: 'Detail Meal',
      headerTitleStyle: {color: 'black'},
      headerTitleAlign: 'center'
    })
  }
}) 
// create Drawer navigator

const Drawer = createDrawerNavigator({
  HomeScreen: { screen: HomeActivity },
  CategoryScreen: { screen: CategoryActivity },
  SearchScreen: { screen: SearchActivity },
  DetailCategory: {screen: DetailCategoryScreen},
  DetailMeal: {screen: DetailMealScreen},
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width-120,
  }
);

const App = createAppContainer(Drawer);
export default App;