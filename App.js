import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

export default class App extends React.Component {
  render() {
    return (
      /*
       * In order to hook up Redux to our applications, wrap everything
       * insed a Provider.
       */
      <Provider store={createStore(reducer)}>
        {
          /*
           * We want this component to take up all the available space
           * so that any children components will be able to expand the
           * full size of the phone.
           * Without this, that wouldn't be possible.
           */
        }
        <View style={{flex: 1}}>
          <View style={{height: 20}} />
          <History />
        </View>
      </Provider>
    );
  }
}