import {Text, View,ScrollView} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../videoscreen/VideoscreenuserStyle';
import VideoScreenUser from '../../components/VideoscreenUser';

function Videoscreenuser (){


  return (
    <View style ={styles.Maincontainer}>
            
             {/* Video Player */}
            <VideoScreenUser/>


            {/* Title */}
            <View style={styles.TitleView}>
            <Text style={styles.texttitle} numberOfLines={1}> Introduction to upper Limb etc etc etc etc etc etc </Text>
            </View>


             {/* Button */}
             <View style={styles.ButtonView}>
             <Text style={styles.buttontext}> Solve the Quiz </Text>
             </View>


             {/* More Lectures */}
             <View style={styles.LecturesView}>
             <Text style={styles.lecturestext}> More Lectures </Text>
             </View>
      

        {/* Courses ScrollView View */}
      <ScrollView style={styles.scrollview}>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle} numberOfLines={1}> Brachial Plexus etc etc etc etc etc </Text>
         <Ionicons name="md-lock-closed-outline" size={20} style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20}  style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20}  style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20}  style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20}  style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20} style={styles.lockicon} />
        </View>
        <View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20} style={styles.lockicon} />
        </View><View style={styles.courseView}>
         <Text style={styles.coursestitle}> Brachial Plexus </Text>
         <Ionicons name="md-lock-closed-outline" size={20} color= '#000000' style={styles.lockicon} />
        </View>
      </ScrollView>
      
    </View>
  )
}

export default Videoscreenuser