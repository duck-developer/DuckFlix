import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';


type Props = {
    movie: string;
};


class VideoComponent extends Component<Props> {
    render() {
        const { movie } = this.props
        return (
            // <View style={styles.container}>
            //     <WebView
            //         source={{ uri: movie }}
            //         style={styles.webview}
            //         javaScriptEnabled
            //         allowsInlineMediaPlayback
            //         allowsFullscreenVideo={true}  // Permite tela cheia
            //     />
            // </View>

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <WebView
                    source={{
                        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
</head>
<body style="margin: 0; background-color: black; display: flex; align-items: center; justify-content: center; height: 100vh;">

    <video 
        width="100%" 
        height="100%" 
        controls 
        style="background-color: black;"
        allowfullscreen  
    >
        <source src="${movie}" type="video/mp4">
        Your browser does not support the video tag.
    </video>

</body>
</html>
          `
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo={true}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Ocupa toda a tela
    },
    webview: {
        flex: 1,  // Faz o WebView ocupar toda a área
        width: '100%',  // Ajusta a largura
        height: Dimensions.get('window').height,  // Ajusta a altura para ocupar toda a tela
    },
    video: {
        width: '100%',
        height: '100%',
    },
});

export default VideoComponent;

