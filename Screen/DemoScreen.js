import React,{useState} from "react" // 1st step
import {Text,View,StatusBar,Image,Linking,TouchableOpacity,FlatList, SafeAreaView,Platform} from "react-native"

//image , flatlist , Image Background / Linking / React - Redux+
// key word const , let 
const DemoScreen = () => {
    // to copy press alt + shift + down arrow
    const [Page,setPage] = useState(1)
    const [Data1,setData1] = useState([])
    const Data = [
        {
        id : 1,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 2,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 3,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 4,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 5,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 6,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 7,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 8,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 9,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 10,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 11,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
        {
        id : 12,
        Name : "Shaaz Khan",
        Profession : "Software Developer",
        ProfilePhoto : "https://lh3.googleusercontent.com/proxy/v5BF23GHP_CHCYHg3eEmU3PFgw7V6R_4sFh2krBfwMNXts4fzVlqeYJfS-JEjB3dv1AwIQ4rk9Tr3u0pmhjeqxer_jRTWn7FHNdMad8RyT8iZjWFGPqzfEc",
        PhoneNumber : 9619537704,
        EmailId : "Shaazkhan153@hmail.com"
        },
    ]

    const FetchData =() => {
        fetch(`randomAPi?Page=${Page}`)
        .then(response=>response.json())
        .then(data=>{
            setData1([...Data1,...data])
            // spread operator
        })
        .catch(err=>{
            alert(err)
        })

    }
    // flat list id is unique string
    const endReached = () => {
        setPage(Page + 1)
        FetchData()
    }

    console.log(Page,"Page Value")

    const DevpalItemList = (item) => {

        // Central View with property of FlexDirection : row
        // 1st View Image 2 View Name & Contact Details 3 View Profession
        // .ttf file extension

        const OpenDial = () => {
            // will open phone keypad
            if(Platform.OS == "android"){
                Linking.openURL(`tel:${item.PhoneNumber}`)
            }
            else{
                Linking.openURL(`telprompt:${item.PhoneNumber}`)
            }
        }

        const OpenEmail= () => {
            // will open email Id
            Linking.openURL(`mailto:${item.EmailId}`)
        }

        
        return(
            <>
                <View style={{flexDirection:"row",width:"95%",alignSelf:"center",borderRadius:20,margin:5,backgroundColor:"#fb8500"}}>
                    <View style={{widh:"20%",margin:10}}>
                        <Image
                            source={{uri : item.ProfilePhoto}}
                            style={{height:80,width:80,borderRadius:40}}
                        />
                    </View>
                    <View style={{width:"46%",marginTop:20,marginLeft:5}}>
                        <Text style={{fontSize:19,color:"white",fontWeight:"bold",fontFamily:"serif"}}>{item.Name}</Text>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity 
                            onPress={()=>OpenDial()}
                            style={{backgroundColor:"black",padding:10,borderRadius:10,width:80,height:50,marginVertical:10}}>
                                <Text style={{fontSize:16,fontWeight:"bold",color:"white",margin:5,textAlign:"center"}}>Call Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>OpenEmail()}
                                style={{backgroundColor:"purple",padding:10,borderRadius:10,width:80,height:50,marginVertical:10,marginHorizontal:10}}>
                                <Text style={{fontSize:16,fontWeight:"bold",color:"white",margin:5}}>Email Me</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:"25%",marginTop:20,marginLeft:5}}>
                        <Text
                            style={{backgroundColor:"white",borderRadius:10,color:"black",fontSize:18,fontWeight:"bold"}}
                        >{item.Profession}</Text>
                    </View>
                </View>
            </>
        )
    }
   return (
       <>
       <StatusBar backgroundColor="black" barStyle="light-content"/>
       <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
       <View style={{backgroundColor:"black",height:80,borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
            <Text style={{fontSize:20,margin:10,padding:5,color:"white",textAlign:"center"}}>Hello Welcome Back</Text>
        </View>
        
       <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            keyExtractor={({id})=>id.toString()}        // do this only when id is an integer or a number
            renderItem={({item})=>{
                return DevpalItemList(item)
            }}
            onEndReached={(e)=>{
               endReached()
            }}
       />
       </SafeAreaView>
       </>

   )
} 

export default DemoScreen;