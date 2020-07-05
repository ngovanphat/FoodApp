import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

class SideMenu extends Component {
  constructor() {
    super();
    /*Array of the sidebar navigation option with 
    Heading, Subheading and screen to navigate.*/
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
    this.options = [
      {
        mainHeading: 'HOME',
        navigationPath: 'Home'
      },
      {
        mainHeading: 'CATEGORIES',
        navigationPath: 'Category'
      },
      {
        mainHeading: 'SEARCH',
        navigationPath: 'Search'
      },
    ];
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View>
                  <View style={styles.mainHeading} key={key}>
                    <Text onPress={this.navigateToScreen(option.navigationPath)} style={{fontWeight: "700", fontSize: 18}}>
                      {option.mainHeading}
                    </Text>
                  </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginLeft:20,
  
  },
});

export default SideMenu;