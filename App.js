// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';
import { Text,Buttons,TouchableOpacity,StyleSheet,Colors,View,Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import  TaskAdd,{handleSubmitButtonsave} from './Screen/TaskAdd';
import TaskEdit from './Screen/TaskEdit';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="TaskAdd"
        component={TaskAdd}
        options={{
          title: 'Task App', //Set Header Title
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#307ecc', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         
        }}
      />
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigationRoutes}
        />
      </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        {}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {}
     <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigationRoutes}
        />
        {}
        {/* <Stack.Screen
        name="TaskAdd"
        component={TaskAdd}
        
         options={{   headerRight: (<Image source={require('./Image/aboutreact.png')} />
          // <View style={styles.iconContainer} >
          //   <Icon type="ionicon" name="md-search" />
           
          // </View>
        ),headerTintColor: Colors.Green,
    headerStyle: {
      backgroundColor: 'red'
    } }}
         /> */}
          <Stack.Screen
        name="TaskAdd"
        component={TaskAdd}
        options={{
          title: 'Task App', //Set Header Title
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#307ecc', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          //headerRight: <Image source={require('./Image/aboutreact.png')} />
          headerRight : () => (
            <TouchableOpacity onPress = {() => {handleSubmitButtonsave}} > 
         <View style={styles.iconContainer} >
           <Icon  name="save" size={30} color='#900' />
          </View>
         </TouchableOpacity>
          )
        }}
      />
        {}
        <Stack.Screen
        name="TaskEdit"
        component={TaskEdit}
        // options={{  headerRight: (<TouchableOpacity onPress = {() => { alert('hello') }} > 
        // <Text>FSFD</Text>
        // </TouchableOpacity>) }}
         />
        {}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
