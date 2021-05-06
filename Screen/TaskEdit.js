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

import { TextInput,Button,Appbar,IconButton,Colors } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Icon from "react-native-vector-icons";
//import { DateTimePickerModal } from 'react-native-paper-datetimepicker';

//import { DatePickerModal } from 'react-native-paper-dates';
//export default class TaskAdd extends React.Component {
const TaskEdit = ({navigation,route }) => {
//console.log(navigation);
console.log(route.params);
  let editdetails=route.params.data;
console.log(editdetails.task_detail)
  let id=editdetails.id;
   var d = new Date();
  // var month = d.getMonth()+1;
  // var day = d.getDate();
  // var output = d.getFullYear() + '-' +
  //     (month<10 ? '0' : '') + month + '-' +
  //     (day<10 ? '0' : '') + day;
      var outputtime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  //item.id,item.taskdate,item.AcName,item.task_detail
 let output =editdetails.taskdate;
   
  const [isLoading, setIsLoading] = useState(true);
 const [task_head_data, settask_head_data] = useState([]);
 const [task_account_off_data, settask_account_off_data] = useState([]);
 const [task_user_data, settask_user_data] = useState([]);
  const [taskDiscription, settaskDiscription] =  React.useState(editdetails.task_detail);
  const [taskvalue, settaskvalue] =  React.useState(editdetails.task_detail);
  
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [date, setdate] = useState(output);
  const [time, settime] = useState(outputtime);
  
  const [task_head_value, settask_head_value] = useState('1154')
  const onChangetask_head = (value: string) => {  settask_head_value(value); };
  const [user_id, setuser_id] = useState('')
  const [task_user_value, settask_user_value] = useState('')
  const onChangetask_user = (value: string) => {  settask_user_value(value); };

  const [task_account_off_value, settask_account_off_value] = useState('')
  const onChangetask_account_off = (value: string) => {  settask_account_off_value(value); };

  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const ac = new AbortController();
  //useEffect(() => {
  //  setTimeout(() => {
  
 
  //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //YYYY-MM-DD
  //var date1 = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  //var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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


  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

   /// for task_head task_head  ///
   useEffect(() => {
    if(isLoading){
      AsyncStorage.getItem('speechToTextData').then((value1) =>{
        if(value1){
          settaskDiscription(value1)
        }
      }
  //console.log(value)
  
  
  );
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
            setIsLoading(false)
            var account_nam=[]
            for (var i = 0; i < responseJson.length; i++) {
              var label = responseJson[i]["AcName"];  
              var value = responseJson[i]["AcLedgerId"];  
              account_nam.push({'label':label,'value':value})
          }
         // console.log(account_nam);
          settask_head_data(account_nam);
           // settask_head_data(responseJson.map(({ itemdata }) => ({ label: AcName, value: AcLedgerId })));
           // console.log(settask_head_data);
            //settask_head_data(responseJson);
          // setstatus_countText(responseJson[0].total_count);
          })
          .catch((error) => {
            //Hide Loader
           // setLoading(false);
            console.error(error);
          });
      
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

            var account_nam=[]
            for (var i = 0; i < responseJson.length; i++) {
              var label = responseJson[i]["AcName"];  
              var value = responseJson[i]["AcLedgerId"];  
              account_nam.push({'label':label,'value':value})
          }
          
         // console.log(account_nam);
         settask_account_off_data(account_nam);
           
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
            console.log(responseJson.length);
            setIsLoading(false)
            var account_nam=[]
            for (var i = 0; i < responseJson.length; i++) {
              var label = responseJson[i]["member_name"];  
              var value = responseJson[i]["member_id"];  
              account_nam.push({'label':label,'value':value})
          }
          settask_user_data(account_nam);
            //Hide Loader
            //setLoading(false);
            //console.log(responseJson);
           // settask_user_data(responseJson.results.map(({ item }) => ({ label: item.member_name, value: item.member_id })));
           //setListItems(responseJson);
          // setstatus_countText(responseJson[0].total_count);
          })
          .catch((error) => {
            //Hide Loader
           // setLoading(false);
            console.error(error);
          });
        }
        });
        AsyncStorage.getItem('user_id').then((value) =>
        //console.log('user_id : '+value)
    setuser_id(value)
   );
  const handleSubmitButtonsave = () => {
   // setErrortext('');
    if (!date) {
      alert('Please fill Date');
      return;
    }
    if (!task_head_value) {
      alert('Please fill Work Type');
      return;
    }
   
    if (!taskDiscription) {
      alert('Please fill Discription');
      return;
    }
    
    
    //Show Loader
   // setLoading(true);
     var dataToSend = {
       id:id,
      taskdate: date,
      task_head: task_head_value,
      value: task_account_off_value,
      task_detail: taskDiscription,
      task_allot: task_user_value,
      task_user:user_id,
      status:"Pending",
      taskvalue:taskvalue,
    }; 
    
   /*  var dataToSend = {
      taskdate: '2021-05-06',
      task_head: 10,
      value: '20',
      task_detail: 'taskDiscription',
      task_allot: '1',
     status:"Panding",
    }; */
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
      console.log(formBody);
      fetch('https://olyextech.co.in/task/apiphp/update.php', {
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
          setTimeout(() => {
            navigation.replace('DrawerNavigationRoutes')
          }, 5000);
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

 const getPreviousDate = () => {
    const { selectedDate } = date;
    const currentDayInMilli = new Date(date).getTime()
    const oneDay = 1000 * 60 *60 *24
    const previousDayInMilli = currentDayInMilli - oneDay
    const previousDate = new Date(previousDayInMilli)
    //console.log(previousDate,'line 333');
    setdate(previousDate)
   // this.setDate(previousDate)

  }

const  getNextDate = () => {
    const { selectedDate } = date

    const currentDayInMilli = new Date(date).getTime()
    const oneDay = 1000 * 60 *60 *24
    const nextDayInMilli = currentDayInMilli + oneDay
    const nextDate = new Date(nextDayInMilli)
    console.log(nextDate,'line 345');
    //this.setDate(nextDate)
    setdate(nextDate)

  }
  
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
        <Text style={styles.successTextStyle}>Task Update Successful.</Text>
        {/* <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity> */}
      </View>
    );
   
  }
 
  
  return (
    <View style={{flex: 1, backgroundColor: '#DFF1F7'}}>
      <Loader loading={loading} />
      <Appbar.Header style={{marginTop:25,backgroundColor:'#177ad1'}}>
      <Appbar.BackAction onPress ={() => {navigation.goBack()}} />
      <Appbar.Content title="Task Edit" subtitle="" />
      <Appbar.Action icon="content-save-edit-outline" size={35}  ></Appbar.Action>
    </Appbar.Header>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          
        <View style={styles.SectionStyle} >
        <View style={{width:'50%'}}>
       <DatePicker
        style={{width: 150,borderColor:'#000000',color:'#FFFFFF'}}
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
        onDateChange={(date) => {setdate(date)}}
      />
    </View>
    <View style={{width:'25%'}}>
       {/* <DatePicker
        style={{width: 160,borderColor:'#000000',color:'white'}}
        date={time}
        mode="time"
        placeholder="select date"
        format={'h:mm: a'}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 26
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(time) => {settime(time)}}
      /> */}
      <TouchableOpacity
           style={{backgroundColor: '#FAD916',
           borderWidth: 0,
           color: '#FFFFFF',
           borderColor: '#2C35BA',
           height: 40,
           alignItems: 'center',
           borderRadius: 15,
           marginLeft: 10,
           marginRight: 10,
          }}
          activeOpacity={0.5}
         >
           <IconButton
    icon="minus"
    color={Colors.red500}
    size={20}
    onPress={() => getPreviousDate()}
  />
          
        </TouchableOpacity>
      
       {/* <button onClick={()=>getPreviousDate}>Previous</button>
        <button onClick={()=>getNextDate}>Next</button> */}
    </View>
    <View style={{width:'25%'}}>
    <TouchableOpacity
         style={{backgroundColor: '#FC8A8A',
         borderWidth: 0,
         color: '#FFFFFF',
         borderColor: '#2C35BA',
         height: 40,
         alignItems: 'center',
         borderRadius: 15,
         marginLeft: 10,
         marginRight: 10,
        }}
          activeOpacity={0.5}
          >
          <View>
          <IconButton
    icon="plus"
    color={Colors.red500}
    size={20}
    onPress={() => getNextDate()}
  />
     </View>
         
        </TouchableOpacity>
    </View>
    </View>
          <View style={styles.container}>
          <Dropdown
            label="Task Category"
            style={{fontSize:10}}
            data={task_head_data}
            //enableSearch
            value={task_head_value}
            onChange={onChangetask_head}
          />
          </View>
          <View style={{flex: 1, backgroundColor: '#DFF1F7',marginLeft: 20,marginRight: 20,marginTop: 30, flexDirection: 'row',}}>
          <TextInput
            label="Description"
            mode='outlined'
            multiline
            numberOfLines= {5}
            value={taskDiscription}
            autoCapitalize="sentences"
            returnKeyType="next"
            onChangeText={(taskDiscription) => settaskDiscription(taskDiscription)}
            blurOnSubmit={false}
            style={{color: "black",width:"100%",}}
           // left={props => <TextInput.Icon {...props} icon="folder" />}
          //  right={
          //     <TextInput.Icon
          //       name={<Icon name="rocket" size={20} color="#000000" />} 
          //       onPress={() => {alert('hello')}}
          //     />
          //   }
          />
          {/* <Icon name="rocket" size={30} color="#900" />
          <Icon
    name='what_ever_icon_you_want'
    color='#000'
    size={14}
  /> */}
          </View>
          <View style={styles.container}>
          <Dropdown

            label="On Account Off"
            data={task_account_off_data}
            enableSearch
            value={task_account_off_value}
            onChange={onChangetask_account_off}
          />
          </View>
          <View style={{flex: 1, backgroundColor: '#DFF1F7',marginLeft: 20,marginRight: 20,marginTop: 30, flexDirection: 'row',}}>
          <TextInput
          
          label="Value"
          mode='outlined'
          multiline
          value={taskvalue}
          autoCapitalize="sentences"
          returnKeyType="next"
          onChangeText={(taskvalue) => settaskvalue(taskvalue)}
          blurOnSubmit={false}
          style={{color: "black",width:"100%"}}
         
        />
        </View>
          
          <View style={styles.container}>
          <Dropdown
            label="Share With"
            data={task_user_data}
            enableSearch
            multiple
            value={task_user_value}
            onChange={onChangetask_user}
           
          />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          {/* <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Save Task</Text>
          </TouchableOpacity> */}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default TaskEdit;

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
    backgroundColor: '#2C35BA',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#2C35BA',
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
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});
