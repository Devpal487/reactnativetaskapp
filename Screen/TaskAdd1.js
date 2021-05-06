// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
//import DateTimePickerModal from "react-native-modal-datetime-picker";
//import Loader from '../../Components/Loader';
import { DateInput } from 'react-native-date-input';
import dayjs from 'dayjs';

const TaskAdd = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
    const nameInputRef = createRef();
    const emailInputRef = createRef();
    const ageInputRef = createRef();
    const addressInputRef = createRef();
  
    const handleSubmitButton = () => {
      setErrortext('');
      if (!userName) {
        alert('Please fill Name');
        return;
      }
      if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!userAge) {
        alert('Please fill Age');
        return;
      }
      if (!userAddress) {
        alert('Please fill Address');
        return;
      }
      //Show Loader
      setLoading(true);
      var dataToSend = {
        user_name: userName,
        user_email: userEmail,
        user_age: userAge,
        user_address: userAddress,
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
      //fetch('https://aboutreact.herokuapp.com/register.php', {
        fetch('https://businesserpnew.com/reactapi/api/user/register.php', {
        method: 'POST',
        body: formBody,
        headers: {
          //Header Defination
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          setLoading(false);
          console.log(responseJson);
          // If server response message same as Data Matched
          if (responseJson.status == 1) {
            setIsRegistraionSuccess(true);
            console.log('Registration Successful. Please Login to proceed');
          } else {
            setErrortext('Registration Unsuccessful');
          }
        })
        .catch((error) => {
          //Hide Loader
          setLoading(false);
          console.error(error);
        });
    };
    const [date, setDate] = useState('');
  let dateInput = null;
 
  const handleChange = (date) => {
    setDate(date);
  };
 
  const focus = () => {
    if (!dateInput) {
      return;
    }
 
    dateInput.focus();
  };

    if (isRegistraionSuccess) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#307ecc',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../Image/success.png')}
            style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <Text style={styles.successTextStyle}>Registration Successful.</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: '#307ecc'}}>
        {/* <Loader loading={loading} /> */}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
         
          <KeyboardAvoidingView enabled>
         
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
   <DateInput
    style={styles.DateInputStyle}
     placeholder="Enter Address"
     underlineColorAndroid="#f000"
        placeholderTextColor="#8b9cb5"
      keyboardType="email-address"
      dateFormat={'DD/MM/YYYY'}
      defaultValue={new Date(dayjs().subtract(5, 'year').format('DD/MM/YYYY'))}
      defaultDate={new Date(dayjs().subtract(5, 'year'))}
      minimumDate={new Date(dayjs().subtract(10, 'year'))}
      maximumDate={new Date()}
      handleChange={handleChange}
      onRef={(input) => (dateInput = input)}
    />
    </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  ageInputRef.current && ageInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAge) => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="Enter Age"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={ageInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  addressInputRef.current && addressInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAddress) => setUserAddress(UserAddress)}
                underlineColorAndroid="#f000"
                placeholder="Enter Address"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                ref={addressInputRef}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  };

export default TaskAdd;
const styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    DateInputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
      },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  });
  