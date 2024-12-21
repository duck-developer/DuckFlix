import { Image, ImageBackground, Text, View, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { MovieCollection } from '@/interfaces/images/movies/movie_images';
import CommentMovieComponent from '@/components/comment_movie';
import VideoComponent from '@/components/video_component';

const { width } = Dimensions.get('screen');
const movies = new MovieCollection().toArray();

type Commentary = {
  id: number;
  id_user: string;
  id_movie: string;
  cometary: string;
};

interface HomePageState {
  indexBackground: number;
  background: any;
  play_video: boolean
  commentaries: Commentary[],
}

export default class HomePage extends Component<{}, HomePageState> {
  scrollX: Animated.Value;
  constructor(props: {}) {
    super(props);
    this.scrollX = new Animated.Value(0);

    const activeIndex = 0;
    this.state = {
      background: movies[activeIndex].image,
      indexBackground: activeIndex,
      play_video: false,
      commentaries: [],
    };
  }

  onScroll = (event: any) => {
    const url = 'http://192.168.10.101:5000';
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const indexBackground = Math.round(contentOffsetX / (width * 0.8));
    if (this.state.indexBackground !== indexBackground) {
      this.setState({
        indexBackground,
        background: movies[indexBackground].image
      });

      const id = movies[indexBackground].id
      fetch(`${url}/commentaries`)
        .then((res) => res.json())
        .then((commentaries) => {
          // Filtrar os comentários para o filme específico
          const filteredCommentaries = commentaries.filter(
            (commentary: any) => commentary.id_movie == id
          );

          if (filteredCommentaries.length > 0) {
            this.setState({ commentaries: filteredCommentaries });
            return
          } else {
            this.setState({ commentaries: [] });
            return;
          }
        })
        .catch((error) => console.error('Erro ao buscar os dados:', error));
    }
  };
  onPlay = () => {
    if (this.state.play_video == false) {
      this.setState({
        play_video: true
      });
    }
  };

  ItemRender = ({ item, index }: { item: any, index: any }) => {
    const inputRange = [
      (index - 1) * (width * 0.8),
      index * (width * 0.8),
      (index + 1) * (width * 0.8)
    ];

    const translateX = this.scrollX.interpolate({
      inputRange,
      outputRange: [-width * 0.28, 0, width * 0.22],
      extrapolate: 'clamp'
    });

    const scale = this.scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp'
    });

    const opacity = this.scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp'
    });

    return (
      <Animated.View style={{

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width * 0.8,
        transform: [{ translateX }, { scale }],
        opacity,
      }}>
        <TouchableOpacity style={{ width: 210, height: 310, }} onPress={this.onPlay}>
          <Image resizeMode='cover' source={item.image} style={{
            width: '100%', height: '100%',
            borderRadius: 12, justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }} />
        </TouchableOpacity>

      </Animated.View>
    );
  };

  render() {
    const { indexBackground, play_video, commentaries } = this.state;
    return (
      <ImageBackground
        resizeMode='cover'
        blurRadius={8}
        source={this.state.background}
        style={{ width: "100%", height: "100%" }}
      >
        {play_video ? <>
          <View style={{ flex: 1, width: '100%', borderTopLeftRadius: 25 }}>
            {/* <VideoComponent  />  */}
            <VideoComponent movie={movies[indexBackground].link} />

          </View>
        </> : <>
          <Animated.View style={{
            // width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '25%',
          }}>
            <Animated.FlatList
              data={movies}
              renderItem={({ item, index }) => (
                <this.ItemRender item={item} index={index} />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              bounces={false}
              snapToAlignment="center"
              snapToInterval={width * 0.8}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
                { useNativeDriver: false, listener: this.onScroll }
              )}
            />
          </Animated.View>
          <CommentMovieComponent commentaries={commentaries} id={movies[indexBackground].id} description={movies[indexBackground].description} title={movies[indexBackground].title} />
        </>}
      </ImageBackground>
    );
  }
}
