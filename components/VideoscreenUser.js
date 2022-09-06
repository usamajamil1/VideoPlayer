import {Text, View,TouchableOpacity,Image,StatusBar } from 'react-native'
import React,{useState,useRef,useEffect,} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";

import styles from '../screens/videoscreen/VideoscreenuserStyle';





export default function VideoscreenUser () {

    const [fullscreen,setfullscreen] = useState(false);
    const [rate,setrate] = useState(1);
    const [ showPagination, setShowPagination] = useState(false);
    const [marginTops,setMarginTops]=useState(false);
    const [videoPercentage,setVideoPercentage] =useState(0);
    const [play,setPlay] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration,setDuration]= useState(0);
    const [visible, setVisible] = useState(false);
    const [showVideo, setShowVideo] = useState(true);
    const [heights,setHeight] = useState(false);
    const [lefts,setlefts]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [timeoutId, setTimeoutId] = useState('');
    const [progress,setProgress] = useState(0);
    
    const videoPlayer = useRef(null);
    
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    
    function secondsToHms(seconds) {
        if (!seconds) return '00m 00s'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
    
        let sec = parseInt(duration)
    
        if (sec < 10) {
          sec = `0${sec}`
        }
        if (min < 10) {
          min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
          return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
          return `00m ${sec}s`
        } else {
          return `${min}m ${sec}s`
        }
      }
    
    
    
    const TimeoutPagination = () =>{
        if (showPagination){
          clearTimeout(timeoutId);
          console.log('SAVED');
        }
        else{
          let id = setTimeout(() => setShowPagination(false), 10000);
          setTimeoutId(id);
          console.log('ERROR');
        }
        setShowPagination(!showPagination)
      }
    
      const setSpeed = (speed) => {
        setrate(speed);
      };
    
      const handleProgress = (data) => {
        if (!isLoading) {
          setCurrentTime(Math.floor(data.currentTime));
          const progressminute = (parseFloat(currentTime/60).toFixed(2.0));
          setProgress(progressminute);
          const percentage = (currentTime/duration) * 100;
          setVideoPercentage(percentage);
    
        }
      }
    
      const handleonLoadStart = (data) => {
        setIsLoading(true);
      }
    
      const handleLoad = (data) => {
        setDuration(Math.floor(data.duration));
        setIsLoading(false);
      }
    
      const OnPressbackward = () =>{
        videoPlayer.current?.seek(currentTime - 10);          
      }
    
      const OnPressforward = () =>{
        videoPlayer.current?.seek(currentTime + 10);
      }



  return (
    <View style={[styles.VideoAndButtonView,{height: fullscreen ? '100%' : 200}]}>
         {/* Video Detail View */}
         <TouchableOpacity activeOpacity={1} onPress={()=>TimeoutPagination()}>
          <View style={styles.VideoView}>
                  {showPagination == true  && (
                 <View style={[styles.IconsView,{marginTop: marginTops ? 120 : -32.5, marginBottom: marginTops ? -100 : 0 , height: fullscreen ? '100%' : 70}]}>
                 <Provider>
                  {/* ProgressBar */}
                 <View style={styles.progressbar}>
                  <TouchableOpacity onPress={(e)=> handleProgresspress(e)}>
                  <View style={{height:10, width:`${videoPercentage}%`,backgroundColor: "red"}}>
                  </View>
                  </TouchableOpacity> 
                  </View>


                  <View style={{flexDirection:'row', alignItems:'center'}}>
                  {/* Play/Pause Icon */}
                 {play == true && (
                 <TouchableOpacity onPress={()=> {setPlay(false)}}>
                 <AntDesign name="caretright" size={30} color= 'white' style={{left:5,top:5}} />
                 </TouchableOpacity>
                 )}
                 {play == false && (
                 <TouchableOpacity onPress={()=> {setPlay(true)}}>
                 <AntDesign name="pause" size={30} color= 'white' style={{left:5,top:5}} />
                 </TouchableOpacity>
                 )}

                  {/* Time Duration Text */}
                  <View style={{right:40,top:5,flexDirection:'row'}}>
                    <Text style={{color:'white', left:54}}>{secondsToHms(currentTime)}</Text>
                    <Text style={{color:'white', left:64}}>/</Text>
                    <Text style={{color:'white', left:74}}>{secondsToHms(duration)}</Text>
                  </View>
                
                 {/* Setting icon */}
                 <View style={{ justifyContent:'center', flexDirection:'row',}}>
                 <Menu
                 style={[{left: lefts ? 577 : 250,top:-108,color:'black', width:70}]}
                 visible={visible}
                 onDismiss={closeMenu}
                 anchor={<Button onmou onPress={openMenu} style={[{left: lefts ? 455 : 125,top:5}]}> <Ionicons name="settings-sharp" size={25} color= 'white' /> </Button>}>
                 <Menu.Item onPress={() => {setSpeed(1); setVisible(!visible)}} title="1x"/>
                 <Menu.Item onPress={() => {setSpeed(1.5); setVisible(!visible)}} title="1.5x"/>
                 <Menu.Item onPress={() => {setSpeed(2); setVisible(!visible)}} title="2x"/>
                 </Menu>
                 </View>
                 
                {/* Full Screen icon */}
                 <TouchableOpacity onPress={() => {setfullscreen(!fullscreen); setShowVideo(!showVideo); setHeight(!heights); setMarginTops(!marginTops); setlefts(!lefts)}}>
                 <MaterialCommunityIcons name="fullscreen" size={30} color= 'white' style={[{left: lefts ? 475 : 125,top:5}]} />
                 </TouchableOpacity>
                 </View>
                 
                
                  {/* FORWARD / BACKWARD / PAUSE / PLAY icon */}
                 <View style={[styles.forwardbackIcon, {height: heights ? 293.3 : 163.2, marginTop: marginTops ? -293 : -163 }]}>
                 {/* 10s BACKWARD icon */}
                 <TouchableOpacity onPress={()=> OnPressbackward()} >
                 <Image
                  style={{height:40,width:40, tintColor:'white', top:10}}
                  source={require('../screens/videoscreen/backward.png')}
                  />
                 </TouchableOpacity>
                 {/* PLAY icon */}
                 {play == true && (
                 <TouchableOpacity onPress={()=> {setPlay(false)}} style={{top:10}}>
                 <AntDesign name="caretright" size={40} color= 'white'/>
                 </TouchableOpacity>
                 )}
                 {/* Pause icon */}
                 {play == false && (
                 <TouchableOpacity onPress={()=> {setPlay(true)}} style={{top:10}}>
                 <AntDesign name="pause" size={40} color= 'white' />
                 </TouchableOpacity>
                 )}
                 {/* 10s FORWARD icon */}
                 <TouchableOpacity onPress={()=> OnPressforward()}>
                 <Image
                        style={{height:40,width:40, tintColor:'white', top:10}}
                         source={require('../screens/videoscreen/forward.png')}
                  />
                 </TouchableOpacity>
                  </View>
                  </Provider>
                  </View>
                  )}
                  
                
                 
           {/* Video - PORTRAIT */}
             <Video
             ref={videoPlayer}
             rate={rate}
             paused={play}
             style={styles.video}
             source={require('../screens/videoscreen/UL6.JointsPart2.mp4')}
             resizeMode="stretch"
             controls={false}
             onLoad = {handleLoad}
             onProgress = {handleProgress}
             onLoadStart={handleonLoadStart}
             /> 
            <OrientationLocker
            orientation={PORTRAIT}
            onChange={orientation => console.log('onChange', orientation)}
            onDeviceChange={orientation => console.log('onDeviceChange', orientation)}
            />

            {/* Video - LANDSCAPE */}
            {showVideo == false && (
            <View style={{ width: '100%', height: '100%', backgroundColor: 'green' }}>
            <StatusBar  hidden = {true}/> 
            <OrientationLocker orientation={LANDSCAPE} />
            <Video
             rate={rate}
             style={Platform.OS === "android" ? styles.videoContainerAndroid : styles.videoContainerIOS}
             resizeMode="contain"
             //  controls={true}
            />
            </View>
             )}

             </View>
            </TouchableOpacity>
         </View>
  )
}

