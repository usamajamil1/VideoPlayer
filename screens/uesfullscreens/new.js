import React, { Component, PropTypes } from "react";
import {
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform,
} from "react-native";

import {
    Share,
    PlayButton
} from "../../config/images";

import {
    TextLogo,
    IconWithCount,
    DefaultIcon,
    ClickableIcon,
} from "../../mixing/UI";

import {
    WorkoutDetail,
    KeyValueText,
    DetailText,
    ProgressController
} from "../../components";

import Orientation from "react-native-orientation";
import Video from "react-native-video"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

let FORWARD_DURATION = 7;

export default class VideoPlayer extends Component {

    constructor(props, context, ...args) {
        super(props, context, ...args);
        this.state = { paused: false };
    }

    componentDidMount() {
        Orientation.lockToLandscapeLeft();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    componentWillMount() {
        StatusBar.setHidden(true);
        Orientation.lockToLandscapeLeft();
    }

    onVideoEnd() {
        this.videoPlayer.seek(0);
        this.setState({ key: new Date(), currentTime: 0, paused: true });
    }

    onVideoLoad(e) {
        this.setState({ currentTime: e.currentTime, duration: e.duration });
    }

    onProgress(e) {
        this.setState({ currentTime: e.currentTime });
    }

    playOrPauseVideo(paused) {
        this.setState({ paused: !paused });
    }
    onBackward(currentTime) {
        let newTime = Math.max(currentTime - FORWARD_DURATION, 0);
        this.videoPlayer.seek(newTime);
        this.setState({ currentTime: newTime })
    }
    onForward(currentTime, duration) {
        if (currentTime + FORWARD_DURATION > duration) {
            this.onVideoEnd();
        } else {
            let newTime = currentTime + FORWARD_DURATION;
            this.videoPlayer.seek(newTime);
            this.setState({ currentTime: newTime });
        }
    }
    getCurrentTimePercentage(currentTime, duration) {
        if (currentTime > 0) {
            return parseFloat(currentTime) / parseFloat(duration);
        } else {
            return 0;
        }
    }

    onProgressChanged(newPercent, paused) {
        let { duration } = this.state;
        let newTime = newPercent * duration / 100;
        this.setState({ currentTime: newTime, paused: paused });
        this.videoPlayer.seek(newTime);

    }
    
    // onLayout(e) {
    //     const { width, height } = Dimensions.get('window')
    // }

    goBack = () => {
        this.props.navigation.goBack();
        Orientation.lockToPortrait();
    }
    // navigation options
    static navigationOptions = { header: null }

    // render
    render() {
        let { onClosePressed, video, volume } = this.props;
        let { currentTime, duration, paused } = this.state;
        const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100;

        return (
            <View onLayout={this.onLayout.bind(this)} style={styles.fullScreen} key={this.state.key}>

                <View style={styles.backButtonWrapper}>
                    <TouchableOpacity onPress={() => this.goBack()}>
                        <Image source={Share} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.videoView}
                    onPress={this.playOrPauseVideo.bind(this, paused)}>

                    <Video
                        ref={videoPlayer => this.videoPlayer = videoPlayer}
                        onEnd={this.onVideoEnd.bind(this)}
                        onLoad={this.onVideoLoad.bind(this)}
                        onProgress={this.onProgress.bind(this)}
                        source={{ uri: this.props.detailedWorkout.videoLink }}
                        paused={paused}
                        volume={Math.max(Math.min(1, volume), 0)}
                        resizeMode="none"
                        style={Platform.OS === "android" ? styles.videoContainerAndroid : styles.videoContainerIOS} />

                    {paused &&

                        <View style={styles.pauseImageWrapper}>
                            <Image style={styles.videoIcon} source={PlayButton} />
                        </View>
                    }
                </TouchableOpacity>


            </View>
        );
    }


}


// styles
const styles = StyleSheet.create({

    fullScreen: {
        flex: 1,
        backgroundColor: "black"
    },
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    videoContainerAndroid: {
        height: "100%",
        width: "100%"
    },
    videoContainerIOS: {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').width,
        minWidth: Dimensions.get('window').height,
        minHeight: Dimensions.get('window').width,
        width: Dimensions.get('screen').height,
        height: Dimensions.get('screen').width,

        transform: [{ rotate: '90deg' }],
    },
    videoIcon: {
        width: 50,
        height: 50
    },
    pauseImageWrapper: {
        alignItems: 'center',
        alignSelf: 'center',
        position: "absolute",
    },
    backButtonWrapper: {
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: 1,
        alignSelf: "flex-end"
    }

});