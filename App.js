import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import AppNavigator from './src/router'
import MainContainer from './src/containers'
import { Provider } from 'react-redux';
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
        <MainContainer />
      </View>
    </Provider>)
}

export default App