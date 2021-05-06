// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image,AsyncStorage} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';
//import  { StackActions } from '@react-navigation/native';
//import { StackActions } from '@react-navigation/stack';
//import { NavigationActions } from 'react-navigation';
//import {decode, encode} from 'base-64'
//const navigation = useNavigation();
const SplashScreen = ({navigation}) => {
//console.log(navigation);
  //State for ActivityIndicator animation
const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen 
      //navigation.replace('DrawerNavigationRoutes');
       //var result =  AsyncStorage.getItem('user_id');

      //navigation.replace('DrawerNavigationRoutes');
      AsyncStorage.getItem('user_id').then((value) =>
       navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
