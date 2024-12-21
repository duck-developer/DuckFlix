import React, { Component, createRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions, TextInput, FlatList, Image } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Modalize } from 'react-native-modalize';

type Props = {
  id: number;
  description: string;
  title: string;
  commentaries: any
};

const { height } = Dimensions.get('window');
const MedioScreenHeight = height * 0.6;
const MaxScreenHeight = height;

export default class CommentMovieComponent extends Component<Props> {
  private modalizeRef = createRef<Modalize>();
  openModal = (event: any) => {
    event.persist(); // Preserva o evento
    console.log(event.nativeEvent); // Agora você pode acessá-lo sem erros
    this.modalizeRef.current?.open();
  };

  handleVideoError = (error: any) => {
    console.error('Erro no vídeo:', error);
  };


  render() {
    const { id, description, title, commentaries } = this.props;
    console.log(commentaries)

    return (
      <>
        <View style={{ flex: 1, marginTop: '35%', backgroundColor: 'white', width: '100%', borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingLeft: 20, paddingRight: 24, paddingTop: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
            <Text style={{ color: 'black', fontSize: 20, marginBottom: 5, fontWeight: 'bold', width: '60%' }}>{title}</Text>
            <TouchableOpacity onPress={(event) => this.openModal(event)}>
              <Fontisto name='comment' size={28} style={{ transform: [{ scaleX: -1 }] }} />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ marginBottom: '5%' }}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>{description}</Text>
          </ScrollView>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', width: '100%' }}>
          <Modalize
            handleStyle={{
              marginTop: 20,
            }}
            modalStyle={{ backgroundColor: '#333', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', height: '100%', width: '100%' }}
            ref={this.modalizeRef}
            snapPoint={MedioScreenHeight}
            modalHeight={MaxScreenHeight}
            HeaderComponent={
              <View style={{ backgroundColor: "#333", borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomWidth: 0.5, borderColor: 'white', paddingTop: 10 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', paddingVertical: 15 }}>Comentários</Text>
              </View>
            }

            FloatingComponent={
              <View style={{ backgroundColor: "#333", borderTopWidth: 0.5, borderColor: 'white', paddingLeft: 10, flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between', paddingRight: '10%' }}>
                <View style={{ flexDirection: 'row', gap: 9 }}>
                  {/* <Image source={PerfilUser} style={{ height: 40, width: 40, borderRadius: 900 }} /> */}
                  <TextInput
                    placeholderTextColor="white"
                    style={{
                      paddingHorizontal: 3,
                      paddingVertical: 3,
                      fontSize: 15,
                      width: 220,
                      marginBottom: 16,
                      borderRadius: 3,
                      color: 'white'
                    }}
                    placeholder='Adicione um comentário...'
                  />
                </View>
                <TouchableOpacity>
                  <AntDesign name='upcircleo' size={25} color='white' style={{ marginTop: 3 }} />
                </TouchableOpacity>
              </View>
            }>
            <View style={{ padding: 20 }}>
              {commentaries.length > 0 && (
                <FlatList
                  data={commentaries}
                  keyExtractor={(item: any) => item.id.toString()}
                  renderItem={({ item }: any) => (

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: '10%', paddingTop: 20, alignItems: 'center', marginBottom: 10 }}>
                      <View style={{ flexDirection: 'row', gap: 8 }}>
                      
                        <View>
                          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>{item.id_user}</Text>
                          <Text style={{ color: 'white', fontSize: 15 }}>{item.cometary} </Text>
                        </View>
                      </View>
                    </View>

                    // <Text style={{ color: 'white' }} >{item.cometary}</Text>
                  )}
                />
              )}



            </View>
          </Modalize>
        </View>
      </>
    );
  }
}





// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// interface Props {}



// export default class MyComponent extends Component<Props, State> {


//   render() {
//     return (

//     );
//   }
// }
