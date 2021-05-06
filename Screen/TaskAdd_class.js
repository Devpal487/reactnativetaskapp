// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {
  Dropdown
} from 'sharingan-rn-modal-dropdown';
//import AsyncStorage from '@react-native-community/async-storage';
import Loader from './Components/Loader';
//import { DateInput } from 'react-native-date-input';
import dayjs from 'dayjs';
import { TextInput,Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
//import { DateTimePickerModal } from 'react-native-paper-datetimepicker';

//import { DatePickerModal } from 'react-native-paper-dates';
export default class TaskAdd extends React.Component {
//const TaskAdd = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      task_head_data: [],
      task_account_off_data: [],
      task_user_data: [],
      taskDiscription: null,
      userEmail: null,
      userAge: null,
      loading: null,
      errortext: null,
      isRegistraionSuccess:null,
      date:null,
      task_head_value:null,
      task_account_off_value:null,
      task_user_value:null,
      
    }
}

 //const [task_head_data, settask_head_data] = useState([]);
 //const [task_account_off_data, settask_account_off_data] = useState([]);
 //const [task_user_data, settask_user_data] = useState([]);
  //const [taskDiscription, settaskDiscription] =  React.useState('');
  // const [userEmail, setUserEmail] = useState('');
  // const [userAge, setUserAge] = useState('');
  // const [userAddress, setUserAddress] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [errortext, setErrortext] = useState('');
  //const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  //const [date, setdate] = useState('2016-05-15');
  //const [task_head_value, settask_head_value] = useState('')
 // const onChangetask_head = (value: string) => {  settask_head_value(value); };

 // const [task_user_value, settask_user_value] = useState('')
  //const onChangetask_user = (value: string) => {  settask_user_value(value); };

  //const [task_account_off_value, settask_account_off_value] = useState('')
 //const onChangetask_account_off = (value: string) => {  settask_account_off_value(value); };

 // const nameInputRef = createRef();
 // const emailInputRef = createRef();
 // const ageInputRef = createRef();
 // const addressInputRef = createRef();
 // const ac = new AbortController();
  //useEffect(() => {
  //  setTimeout(() => {
 // AsyncStorage.getItem('speechToTextData').then((value) =>
  //console.log(value)
 // settaskDiscription(value)
 // );
//}, 500)
//}, [])


// export const task_head_data = [
//   {
//     value: 'Pending',
//     label: 'Pending',
//   },
//   {
//     value: 'Onprocess',
//     label: 'Onprocess',
//   },
//   {
//     value: 'Closed',
//     label: 'Closed',
//   }
// ]; 

// export const task_account_off_data = [
//   {
//     value: 'Pending',
//     label: 'Pending',
//   },
//   {
//     value: 'Onprocess',
//     label: 'Onprocess',
//   },
//   {
//     value: 'Closed',
//     label: 'Closed',
//   }
// ];
// export const task_user_data = [
//   {
//     value: 'Pending',
//     label: 'Pending',
//   },
//   {
//     value: 'Onprocess',
//     label: 'Onprocess',
//   },
//   {
//     value: 'Closed',
//     label: 'Closed',
//   }
// ];

   /// for task_head task_head  ///
   useEffect(() => {
   
    var dataToSend = {
      search_acname: 'search_acname',
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //fetch('https://aboutreact.herokuapp.com/register.php', {
          fetch('https://olyextech.co.in/task/apiphp/search_acname.php', {
          method: 'POST',
          body: formBody,
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },{signal: ac.signal}).then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            //setLoading(false);
            //console.log(responseJson);
            settask_head_data(responseJson.map(({ item }) => ({ label: item.AcName, value: item.AcLedgerId })));
            console.log(settask_head_data);
            //settask_head_data(responseJson);
          // setstatus_countText(responseJson[0].total_count);
          })
          .catch((error) => {
            //Hide Loader
           // setLoading(false);
            console.error(error);
          });
        });


         /// for task account off  ///
  useEffect(() => {

    var dataToSend = {
      search_acname: 'search_acname',
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //fetch('https://aboutreact.herokuapp.com/register.php', {
          fetch('https://olyextech.co.in/task/apiphp/search_account.php', {
          method: 'POST',
          body: formBody,
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },{signal: ac.signal}).then((response) => response.json())
          .then((responseJson) => {
            settask_account_off_data(responseJson.results.map(({ item }) => ({ label: item.AcName, value: item.AcLedgerId })));
            //Hide Loader
            //setLoading(false);
           // console.log(responseJson);
           //setListItems(responseJson);
          // setstatus_countText(responseJson[0].total_count);
          })
          .catch((error) => {
            //Hide Loader
           // setLoading(false);
            console.error(error);
          });
        });

        /// for task account off  ///
  useEffect(() => {
    var dataToSend = {
      search_acname: 'search_acname',
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //fetch('https://aboutreact.herokuapp.com/register.php', {
          fetch('https://olyextech.co.in/task/apiphp/search_user.php', {
          method: 'POST',
          body: formBody,
          headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },{signal: ac.signal}).then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            //setLoading(false);
            //console.log(responseJson);
            settask_user_data(responseJson.results.map(({ item }) => ({ label: item.member_name, value: item.member_id })));
           //setListItems(responseJson);
          // setstatus_countText(responseJson[0].total_count);
          })
          .catch((error) => {
            //Hide Loader
           // setLoading(false);
            console.error(error);
          });
        });
  
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
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
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
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        
        <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
   {/* <DateInput
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
    /> */}
       <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setdate({date: date})}}
      />
     
    </View>
         
          <View style={styles.SectionStyle}>
          <Dropdown
            label="Work Type"
            data={task_head_data}
            //enableSearch
            value={task_head_value}
            onChange={onChangetask_head}
          />
          </View>
          <View style={styles.SectionStyle}>
          <Dropdown
            label="On Account Off"
            data={task_account_off_data}
            enableSearch
            value={task_account_off_value}
            onChange={onChangetask_account_off}
          />
          </View>
          <View style={{flex: 1, backgroundColor: '#307ecc',marginLeft: 35,marginRight: 35,marginTop: 20,}}>
          <TextInput
            label="Description"
            mode='outlined'
            value={taskDiscription}
            autoCapitalize="sentences"
            returnKeyType="next"
            onChangeText={(taskDiscription) => settaskDiscription(taskDiscription)}
            blurOnSubmit={false}
          />
          </View>
          <View style={styles.SectionStyle}>
          <Dropdown
            label="Share With"
            data={task_user_data}
            enableSearch
            value={task_user_value}
            onChange={onChangetask_user}
           
          />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Save Task</Text>
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
