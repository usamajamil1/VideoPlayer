import colors from '../../assets/colors/colors';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
        Maincontainer:{
            flex: 1,
            backgroundColor:colors.white
        },
        VideoAndButtonView:{
            height:233,
            backgroundColor:'green'
        },
        VideoView:{
            height:'100%',
            width:'100%',
            backgroundColor:'green'
        },
        IconsView:{
        height:70,
        width:'100%',
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        zIndex:1,
        position:'absolute',
        top:163,
        },
    
        forwardbackIcon:{
           flexDirection:'row',
           height:163,
           width:'100%',
           backgroundColor:'rgba(52, 52, 52, 0.5)',
           position:'absolute',
           zIndex:1,
           justifyContent:'space-evenly',
           alignItems:'center',
           marginTop:-163
    
        },
        progressbar:{
          width: "100%",
          height: 10,
          backgroundColor: "gray",
        },
        DotIconView:{
            position: 'absolute',
            zIndex: 2,
            alignSelf: "flex-end",
        },
        PlayIconView:{
            backgroundColor:  'transparent',
            position: 'absolute',
            zIndex: 1,
            alignSelf: "flex-start",
        },
        videoContainerAndroid:{
          height:'100%',
          width:'100%',
          backgroundColor:'green'
      },
            video:{
            height:'100%',
            width:'100%'
        },
        TitleView:{
           flexDirection:'row',
           top:20,
           left:7
        },
        texttitle:{
           fontSize:16,
           color:colors.black,
           fontFamily:'Poppins-Regular',
        },
        ButtonView:{
           height:59,
           width:360,
           backgroundColor: colors.green,
           top:20,
           marginTop:10,
           borderRadius:10,
           justifyContent:'center',
           alignItems:'center',
           alignSelf:'center'
        },
        buttontext:{
           fontSize:15,
           color:colors.white,
           fontFamily:'Poppins-Regular',
           top:2
        },
        LecturesView:{
            top:30,
            alignItems:'center'
        },
        lecturestext:{
            fontSize:15,
            color:colors.lightgray,
            fontFamily:'Poppins-Regular'
        },
        scrollview:{
            backgroundColor:colors.white,
            marginTop:40,
        },
        courseView:{
          backgroundColor: colors.gray,
          height: 49,
          width: 380,
          margin:5,
          borderRadius:10,
          flexDirection:'row',
          alignItems:'center',
        },
        coursestitle:{
            height:23,
            width:230,
            left:5,
            fontFamily:'Poppins-Regular',
            color:colors.black,
            fontSize:16
        },
        lockicon:{
            left:80,
            color: colors.lightgray
        }

})
