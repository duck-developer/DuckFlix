import React, { Component } from 'react';

import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';
import Routes from './src/routes/index';

export default class App extends Component {


  render() {
    return (
      <GestureHandlerRootView>
        
        <ToastProvider>

          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
           <Routes/>
          </View>
        </ToastProvider>

      </GestureHandlerRootView>
    );
  }
}



// import React, { Component } from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Button } from 'react-native';

// interface AppProps {}

// interface AppState {
//   count: number;
// }


// export default class App extends Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     // Inicializando o estado
//     this.state = {
//       count: 0,
//     };
//   }

//   // Método para incrementar o contador
//   incrementCount = () => {
//     this.setState(value => ({
//       count: value.count + 1
//     }));
//   }

//   // Método para decrementar o contador
//   decrementCount = () => {
//     this.setState(value => ({
//       count: value.count - 1
//     }));
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Count: {this.state.count}</Text>
//         <Button title="Increment" onPress={this.incrementCount} />
//         <Button title="Decrement" onPress={this.decrementCount} />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     margin: 10,
//   },
// });



