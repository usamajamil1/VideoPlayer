import { View, Text,StyleSheet, TouchableOpacity,FlatList,Button,Dimensions,Platform } from 'react-native'
import React, { useState,useEffect } from 'react'
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

function Videoplayer(){

    const [rate,setrate] = useState(1);
    const [fullscreen,setfullscreen] = useState(false);
    const [showVideo, setShowVideo] = useState(true);
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

//   const video = React.useRef(null)

//   fullScreen = () => {
//     Orientation.getOrientation((err, orientation) => {
//         if (orientation == 'LANDSCAPE') {
//             Orientation.lockToPortrait();
//         } else {
//             Orientation.lockToLandscape();
//         }
//     });
// }

// backAction = () => {
//   Orientation.getOrientation((err, orientation) => {
//       if (orientation == 'LANDSCAPE') {
//           Orientation.lockToPortrait();
//       }
//   });
// };

// const OnFullScreen = () => {

//     if(fullscreen == false){
//         setfullscreen(true)
        
//     } else{
//         setfullscreen(false)
//     }

// }
// <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} style={{top:-120}} />


  return (

    <View style={styles.container}>

        <View style={styles.buttonwrapper}>
        <TouchableOpacity style={styles.text} onPress={()=> setrate(rate-1)}>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>For Normal</Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>1X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.text2} onPress={()=> setrate(rate+1)}>
        <Text style={{color:'black',textAlign:'center', fontWeight:'bold'}}>For Speed</Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>2X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fullscreenicon} onPress={() => setShowVideo(!showVideo)}>
        <MaterialCommunityIcons name="fullscreen" style={{ color:'black', fontSize:30,alignSelf:'center'}}/>
        </TouchableOpacity>
        </View>

     <Video
     rate={rate}
     style={styles.video}
     source={require('../uesfullscreens/video.mp4')}
     resizeMode="contain"
     controls={true}
     fullscreen={fullscreen}
     />
     <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
      />
      
      {showVideo == false && (
        <View style={{ width: width, height: height, backgroundColor: 'green' }}>
          <OrientationLocker orientation={LANDSCAPE} />
          <Video
             rate={rate}
             style={Platform.OS === "android" ? styles.videoContainerAndroid : styles.videoContainerIOS}
             source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
             resizeMode="none"
            //  controls={true}
             fullscreen={fullscreen} />
        </View>
      )}
     {/* <View style={styles.buttonview}> */}
     {/* <TouchableOpacity style={styles.text} onPress={()=> setrate(rate-1)}>
     <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>For Normal</Text>
     <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>1X</Text>
     </TouchableOpacity>                                                                                                                         
     <TouchableOpacity style={styles.text2} onPress={()=> setrate(rate+1)}>
     <Text style={{color:'black',textAlign:'center', fontWeight:'bold'}}>For Speed</Text>
     <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>2X</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.fullscreen} onPress={()=> OnFullScreen()}>
      <MaterialCommunityIcons name="fullscreen" style={{ color:'black', fontSize:30,alignSelf:'center'}}/>
     </TouchableOpacity> */}
     {/* </View> */}
      {/* <Button>
      <MaterialCommunityIcons type="MaterialCommunityIcons" name="fullscreen" style={{ color: "#fff", fontSize: 15 }} />
      </Button> */}
    </View>
  )
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'white',
},
video:{
height:'100%',
width:'100%',
},
videoContainerAndroid:{
    height:'100%',
    width:'100%',
    backgroundColor:'green'
},
buttonwrapper:{
backgroundColor: '#D3D3D3',
position: 'absolute',
flexDirection:'row',
zIndex: 1,
alignSelf: "flex-end",
justifyContent:'center',
alignContent:'center'
},
text:{
width:51,
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',
backgroundColor:'#D3D3D3'
},
text2:{
width:50,
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',
backgroundColor:'#D3D3D3'
},
fullscreenicon:{
width:70,
height:55,
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',
backgroundColor:'#D3D3D3'
},
})

export default Videoplayer;