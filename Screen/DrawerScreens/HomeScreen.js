// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef,useEffect} from 'react';
import {View,Modal, FlatList,Image, Text, StyleSheet, SafeAreaView, StatusBar,Pressable,AsyncStorage,TouchableOpacity} from 'react-native';
import {
  Dropdown
} from 'sharingan-rn-modal-dropdown';
//import Modal from 'react-native-modal';
import { FAB ,Portal,Paragraph, Dialog,Divider,Button,Provider,TouchableRipple,Appbar, Drawer  } from 'react-native-paper';
//import { List } from 'react-native-paper';
//import AsyncStorage from '@react-native-community/async-storage';
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPicker from "rn-modal-picker";
//import { createAppContainer, createDrawerNavigator } from "react-navigation";
//import AwesomeAlert from 'react-native-awesome-alerts';
/* import GoogleCloudSpeechToText, {
  SpeechRecognizeEvent,
  VoiceStartEvent,
  SpeechErrorEvent,
  VoiceEvent,
  SpeechStartEvent,
} from 'react-native-google-cloud-speech-to-text'; */
import SpeechToText from 'react-native-google-speech-to-text';
import Loader from '../../Screen/Components/Loader';

import {   Menu, MenuOptions,  MenuOption, MenuTrigger, MenuProvider,MenuContext  } from 'react-native-popup-menu';

import { base_url } from "../baseurl";
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

 //const DATA="";
 let taskTexttitle="";
 let taskTextdate  =""; 
 let taskTextdesc  ="";

 //let items="";
 //let status_countText="0000";
 let isLoading=true;
 //const [isLoading, setIsLoading] = useState(true);

export const task_status_data = [
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'Onprocess',
    label: 'Onprocess',
  },
  {
    value: 'Closed',
    label: 'Closed',
  }
];
// export const task_status_data = [
//   {
//     id: 'Pending',
//     name: 'Pending',
//   },
//   {
//     id: 'Onprocess',
//     name: 'Onprocess',
//   },
//   {
//     id: 'Closed',
//     name: 'Closed',
//   }
// ];
//alert({base_url});

const HomeScreen = ({navigation}) => {
  const Separator = () => <View style={styles.separator} />;
  const [loading, setLoading] = useState(false);
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [user_id, setuser_id] = useState('')
  const [member_type, setmember_type] = useState('')
  const [task_status_value, settask_status_value] = useState('Pending')
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [transcript, setResult] = React.useState('');
  //setLoading(true);
const [voiceText, setvoiceText] = useState("Not Data");
const [status_countText, setstatus_countText] = useState("0000");
const [visiblemenu, setVisiblemenu] = React.useState(true);
const [modalvisiblemenu, setmodalvisiblemenu] = React.useState(false);
const [visible, setVisible] = React.useState(false);
const hideDialog = () => setVisible(false);
const [items, setListItems] = useState([]);
const [items1, setListItems1] = useState([]);
const [visible2, setVisible2] = React.useState(false);
const [offset, setoffset] = useState(0);
const hideDialog2 = () => setVisible2(false);

const [visible3, setVisible3] = React.useState(false);
const hideDialog3 = () => setVisible3(false);
const [Page,setPage] = useState(0)
const [opened,setopened] = useState(false)

const actions = [
  {
    text: "Speak",
    icon: <Icon name="microphone" size={25} color="#fff" />,
    onPress: () => navigation.navigate('TaskAdd'),
    name: "bt_speak",
    position: 2
  },
  {
    text: "Add",
    icon: <Icon name="plus" size={25} color="#fff" />,
    name: "bt_add",
    position: 1
  }
];
const containerStyle = {backgroundColor: 'white', padding: 20,margin:20};

// const onChangeSS = (value , string) => {  
//   console.log(value,string,"110")
//   settask_status_value(value)
//   setPage(1)
//   gettasklist() 
// };

const speechToTextHandler = async () => {
  let speechToTextData = null;
      try {
          speechToTextData = await SpeechToText.startSpeech('Try saying something', 'en_IN');
          console.log('speechToTextData: ', speechToTextData);
          setVisible(true);
          AsyncStorage.setItem('speechToTextData', speechToTextData);
          setvoiceText(speechToTextData);
          
      } catch (error) {
          console.log('error: ', error);
      }
}
//console.log('hello');
const getData = async () => {
  try {
    const userid = await AsyncStorage.getItem('user_id')
    const membertype = await AsyncStorage.getItem('member_type')
    if(userid !== null) {
      setuser_id(userid);
      // value previously stored
    }
    if(membertype !== null) {
      setmember_type(membertype);
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

//  const statusselectedValue =(index, item) => {
//    // array ko iterate kar rha hai
//   console.log(item,'line 163')
//    //settask_status_value(item.id)
//    settask_status_value(item.value)
//    setPage(1)
//    gettasklist(user_id,member_type)
//  }
 const statusselectedValue =(item) => {
  // array ko iterate kar rha hai
 //console.log(item,'line 163')
  //settask_status_value(item.id)
  settask_status_value(item)
  setPage(0)
  gettasklist(user_id,member_type)
}


 //AsyncStorage.getItem('user_id').then((value) =>setuser_id(value));
 //  AsyncStorage.getItem('member_type').then((value) =>setmember_type(value));

 const taskdelete = (id) => {
  //console.log(id,'187')
   //Show Loader
   setLoading(true);
    var dataToSend = {
     id: id,
   }; 
  
   var formBody = [];
   for (var key in dataToSend) {
     var encodedKey = encodeURIComponent(key);
     var encodedValue = encodeURIComponent(dataToSend[key]);
     formBody.push(encodedKey + '=' + encodedValue);
   }
   formBody = formBody.join('&');
  //console.log(formBody);
   
     fetch('https://olyextech.co.in/task/apiphp/delete.php', {
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
        console.log(formBody);
        setPage(0)
        gettasklist(user_id,member_type)
        setIsRegistraionSuccess(true);
        //  setTimeout(() => {
        //    navigation.replace('DrawerNavigationRoutes')
        //  }, 5000);
         console.log('Task Delete Successful. Please Login to proceed');
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

//  if (isRegistraionSuccess) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#307ecc',
//         justifyContent: 'center',
//       }}>
//       <Image
//         source={require('../../Image/success.png')}
//         style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
//       />
//       <Text style={styles.successTextStyle}>Task Add Successful.</Text>
     
//     </View>
    
//   );
 
// }

const getDetails =  async () => {
  const userId = await AsyncStorage.getItem('user_id')
  setuser_id(userId)

  const memberType = await AsyncStorage.getItem("member_type")
  console.log(userId,memberType,"line 148")
  setmember_type(memberType)
    gettasklist(userId,memberType)
}
const gettasklist=async (user_id,member_type)=>{
 // if(isLoading){
   
    setLoading(true);
    isLoading=false;
    //setIsLoading(false)
    //AsyncStorage.getItem('user_id').then((value) =>setuser_id(value));
   //AsyncStorage.getItem('member_type').then((value) =>setmember_type(value));
  // console.log('user_id2 '+user_id)
  var dataToSend = {
        search_value: 'search_value',
        member_type: member_type,
        member_id: user_id,
        status: task_status_value,
        offset:Page
      };
      //const ac = new AbortController();
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      //fetch('https://aboutreact.herokuapp.com/register.php', {
       fetch('https://olyextech.co.in/task/apiphp/get_task.php', {
        method: 'POST',
        body: formBody,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      }/* ,{signal: ac.signal} */)

        .then((response) => response.json())
        .then((responseJson) => {
          //Hide Loader
          console.log(dataToSend)
          console.log(responseJson,'229')
          setLoading(false);
          
          if(responseJson.length>0){
            // if(Page==1){
              // console.log('offset w: '+Page)
              setListItems(responseJson);
            //  }else{
            //    console.log('offset s: '+Page)
            //   setListItems([...items,...responseJson]);
            // }
            setstatus_countText(responseJson[0].total_count);
          }
          //console.log('hii '+items);
        }).catch((error) => {
          console.error(error);
        });
    //  }
}

const gettasklistloadmore=()=>{
  // if(isLoading){
     setLoading(true);
     isLoading=false;
     //setIsLoading(false)
     AsyncStorage.getItem('user_id').then((value) =>setuser_id(value));
    AsyncStorage.getItem('member_type').then((value) =>setmember_type(value));
   // console.log('user_id2 '+user_id)
   var dataToSend = {
         search_value: 'search_value',
         member_type: member_type,
         member_id: user_id,
         status: task_status_value,
         offset:Page
       };
       //const ac = new AbortController();
       var formBody = [];
       for (var key in dataToSend) {
         var encodedKey = encodeURIComponent(key);
         var encodedValue = encodeURIComponent(dataToSend[key]);
         formBody.push(encodedKey + '=' + encodedValue);
       }
       formBody = formBody.join('&');
       //fetch('https://aboutreact.herokuapp.com/register.php', {
        fetch('https://olyextech.co.in/task/apiphp/get_task.php', {
         method: 'POST',
         body: formBody,
         headers: {
         //Header Defination
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
         },
       }/* ,{signal: ac.signal} */)
         .then((response) => response.json())
         .then((responseJson) => {
           //Hide Loader
          console.log(dataToSend)
           setLoading(false);
           if(responseJson.length>0){
            setListItems([...items,...responseJson]);
               // setListItems(responseJson);
             setstatus_countText(responseJson[0].total_count);
           }
           console.log('hii '+items);
          
         }).catch((error) => {
           // Hide Loader
           // setLoading(false);
           console.error(error);
         });
     //  }
 }

 useEffect(() => {
  //getData();
  getDetails();
   //console.log('hello2');
  // gettasklist();
      },[]);


    const handlePress = (id,taskdate,title,task_detail) => {
        setVisible2(true);
        taskTexttitle=title;
        taskTextdate=taskdate;
        taskTextdesc=task_detail;
      }
      function WrapperComponent() {
        return (
          <View>
            <Modal isVisible={true}>
              <View style={{flex: 1}}>
                <Text>I am the modal content!</Text>
              </View>
            </Modal>
          </View>
        );
      }
const handlerLongClick = () => {
  //handler for Long Click
  //openMenu()
 // setmodalvisiblemenu(true);;
 setopened(true)
  //alert('Button Long Pressed');
};
const openMenu = () => setVisiblemenu(true);
 const closeMenu = () => setVisiblemenu(false);


const gettasklistEndReached =()=>{
  setPage(Page + 15)
  //offset =parseInt(offset)+10;
  gettasklistloadmore();
}

const confirmbox =()=>{
  console.log('hello');
setVisible3(false)
 
}

const editentry=()=> navigation.navigate({
  name: 'TaskEdit'
}, params= { post: postText })
const renderItemlist = (item) => {
  return(
      <>
      <MenuContext>
       <TouchableOpacity 
      key={item.id}
      onPress={() => handlePress(item.id,item.taskdate,item.AcName,item.task_detail)}
      onLongPress={()=>{setopened(true)}}
      //onLongPress={ () => console.warn('STARTED LONG PRESS') } 
     >
        
          <View style={{flexDirection:"row",width:"100%",alignSelf:"center",borderBottomColor:'#08010C',borderBottomWidth:1,color:'black'}}>
              <View style={{width:"80%",marginTop:5,margin:5,marginRight:2,alignSelf:"center"}}>
              <View style={{flexDirection:"row",}}>
                  <Text style={{fontSize:16,color:"black",fontWeight:"bold",fontFamily:"serif"}}>{item.AcName}</Text>
                  </View>
                  <View style={{flexDirection:"row",flex:0.8}}>
                  <Text
                      style={{color:"black",fontSize:13,marginTop:2}}
                  >{item.taskdate} </Text>
                  <Text
                      style={{color:"black",fontSize:13,marginTop:2, width: 0,
                      flexGrow: 1,
                      flex: 1,}} numberOfLines={1} 
                  >{item.task_detail} </Text>
                  </View>
                  <View >


                  {/* <Menu 
          onBackdropPress={() => setopened(false)}
          onSelect={value => {
            console.log(value)
              // useSTate use kro
            onOptionSelect(value)
          }
          }>
          <MenuTrigger
            onPress={() => onTriggerPress()}
            text='Select option'/>
          <MenuOptions >
            <MenuOption value={1} text='One' />
            <MenuOption value={2}>
              <Text style={{color: 'red'}}>Two</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true} text='Three' />
          </MenuOptions>
        </Menu>  */}
       
      {/* <Menu  onSelect={value => onOptionSelect(value)}  >
          <MenuTrigger
            onPress={() => onTriggerPress()}
            text='Select option'/>
          <MenuOptions>
            <MenuOption value={item.AcName} text='One' />
            <MenuOption value={2}>
              <Text style={{color: 'red'}}>Two</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true} text='Three' />
          </MenuOptions>
        </Menu> */}
        
        </View>
        
              </View>
              <View style={{width:"15%",alignSelf:'baseline'}}>
              <View >
              <TouchableOpacity 
                  style={{margin:5}}
                  onPress={() => navigation.navigate('TaskEdit', {
                    data: {
                      id: item.id,
                      taskdate: item.taskdate,
                      title: item.AcName,
                      task_detail: item.task_detail,
                      task_head: item.task_head,
                      value: item.value,
                      as_user: item.as_user,
                      task_allot: item.task_allot,
                    },
                   
                  },)}
                  //onLongPress={ () => console.warn('STARTED LONG PRESS') } 
              >
                  <Icon name="edit" size={20} color="#black" light /> 
                  </TouchableOpacity>
                  </View>
                  <View style={{textAlign:'right'}} >
                  <TouchableOpacity 
                    style={{margin:5}}
                    onPress={() => {taskdelete(item.id)}} 
                  >
                  <Icon name="trash" size={20} backgroundColor="#3b5998" color="#black" light  /> 
                  </TouchableOpacity>
                  </View>
                  </View>
          </View>
          </TouchableOpacity> 
          </MenuContext>
      </>
  )
}

const onOptionSelect=(value)=> {
  alert(`Selected number: ${value}`);
  setopened(false);
}

const onTriggerPress=()=> {
  setopened(true);
}

const onBackdropPress=()=> {
  setopened(false);
}
const _goBack = () => console.log('Went back');
const _handleSearch = () => console.log('Searching');
const _handleMore = () => console.log('Shown more');

// const Menu = createDrawerNavigator(
//   {
//     First: { screen: First },
//     Second: { screen: Second }
//   },
//   {
//     contentComponent: props => (
//       <ScrollView>
//         <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
//           <Drawer.Item
//             label="First Page"
//             active="true"
//             onPress={() => props.navigation.navigate("First")}
//           />
//           <Drawer.Item
//             label="Second Page"
//             active="true"
//             onPress={() => props.navigation.navigate("Second")}
//           />
//         </SafeAreaView>
//       </ScrollView>
//     )
//   }
// );
  return (
 <>
    <SafeAreaView style={{flex: 1}}>
    { <Loader loading={loading} /> }
    <Appbar.Header style={{marginTop:5,backgroundColor:'#177ad1'}}>
      {/* <Appbar.BackAction onPress={navigation.goBack()} /> */}
      <Appbar.Action
            icon="menu"
            // onPress={() =>
            //   this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            // }
          />
      <Dropdown
            // label="Select Status"
            data={task_status_data}
            // enableSearch
            value={task_status_value}
            //selectedValue={(index, item) => statusselectedValue(index, item)}
            onChange={( item) => statusselectedValue(item)}
            //onChange={(index, item)=>statusselectedValue(index, item)}
          /> 
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="refresh" onPress={getDetails} />
    </Appbar.Header>
      <View style={{flex: 1, padding: 5,paddingBottom:65}}>
      
      <View style={{   
        flexDirection: 'row' }}>
    
        </View>
       
        <View style={{   
        flexDirection: 'row',alignSelf:'center' }}>
        
           <View style={{   
        flexDirection: 'row',width:"83%",backgroundColor:'#847C87',textAlign:'right'}}>
          
        {/* <RNPicker
        style={{}}
          dataSource={task_status_data}
          dummyDataSource={task_status_data}
          defaultValue={false}
          pickerTitle={"Select Status"}
          //showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"Search....."}
          showPickerTitle={true}
         // searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={StyleSheet.pickerStyle}
          itemSeparatorStyle={StyleSheet.itemSeparatorStyle}
          pickerItemTextStyle={StyleSheet.listTextViewStyle}
          selectedLabel={task_status_value}
          placeHolderLabel={"Select Status"}
          selectLabelTextStyle={StyleSheet.selectLabelTextStyle}
          placeHolderTextStyle={StyleSheet.placeHolderTextStyle}
          dropDownImageStyle={StyleSheet.dropDownImageStyle}
          //dropDownImage={require("./res/ic_drop_down.png")}
          selectedValue={(index, item) => statusselectedValue(index, item)}
        /> */}
               {/* <Dropdown
            label="Select Status"
            data={task_status_data}
            enableSearch
            value={task_status_value}
            onChange={(item)=>{
              console.log(item,"383")
            }}
          /> */}
           <Text  style={{
            fontSize: 14,
            padding: 5,
           
            color: 'white',
          }}>Total : </Text>
        </View>  
          <View style={{   
        flexDirection: 'row',width:"17%",padding:5,backgroundColor:'#847C87',textAlign: 'center',}}> 
          <Text
          style={{
            fontSize: 14,
            padding: 5,
            align:'right',
            color: 'white',
          }}>
         {status_countText}
        </Text>
        </View>
            
            </View>
        <View style={{flexDirection: 'row',padding: 5 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
        style={{color:'#white'}}
        data={items}
       // renderItem={({item})=>{  return DevpalItemList(item) }}
        renderItem={({item})=>{return renderItemlist(item) }}
        onEndReached={gettasklistEndReached}
        //onEndReachedThreshold={0.5}
        keyExtractor= {(item) => {
          return item.id.toString();
        }}
       // keyExtractor={({id}) => id.toString()}
      />
       </View>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.olyextech.com
        </Text>
       
        <FloatingAction
    actions={actions}
    
    textColor="#FFFFFF"
    
    onPressItem={name => {
    if(name=="bt_speak"){
      speechToTextHandler()
     // console.log(`selected button1: ${name}`);
    } else if(name=="bt_add") {
      navigation.navigate('TaskAdd');
      //console.log(`selected button2: ${name}`);
    }
    }}
  />
       
      </View>
    
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Choose the right one</Dialog.Title>
        <Dialog.Content>
        <TouchableRipple
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}
          onPress={() => navigation.navigate('TaskAdd')}
          >
         {voiceText}
        </Text>
          </TouchableRipple>
        </Dialog.Content>
        <Dialog.Actions>
        </Dialog.Actions>
      </Dialog>
      <View>
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible2}
        onRequestClose={() => {
          setVisible2(!visible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{   
        padding: 5 }}>
          <Text style={{marginBottom: 15,textAlign: "center",fontWeight:'bold'}} > {taskTexttitle}</Text>
          </View>
          <View style={{   
       padding: 5 }}>
          <Text style={styles.modalText}>Date : {taskTextdate}</Text>
          </View>
          <View style={{ padding: 5 }}>
          <Text style={styles.modalText}>Discription {taskTextdesc}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible2(!visible2)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible3}
        onRequestClose={() => {
          setVisible3(!visible3);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{   
        padding: 5 }}>
          <Text style={{marginBottom: 15,textAlign: "center",fontWeight:'bold'}} > {taskTexttitle}</Text>
          </View>
          <View style={{   
       padding: 5 }}>
          <Text style={styles.modalText}>Date : {taskTextdate}</Text>
          </View>
          <View style={{ padding: 5 }}>
         
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible3(!visible3)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </Modal>
      {/* <MenuProvider  >
                    <View >
                        <Menu opened={opened}>
                            <MenuTrigger />
                            <MenuOptions>
                                <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                                <MenuOption onSelect={() => alert(`Delete`)} >
                                    <Text style={{color: 'red'}}>Delete</Text>
                                </MenuOption>
                                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                            </MenuOptions>
                        </Menu>
                    </View>
                </MenuProvider> */}
</View>
    </SafeAreaView>
    </>
  );    
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#177ad1',
    padding: 5,
    color: "#fcba03",
    marginVertical: 5,
    marginHorizontal: 0,
   
    
  },
  title: {
    fontSize: 16,
   
  },
  date: {
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewmenu: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  itemSeparatorStyle:{
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }, successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
export default HomeScreen;
