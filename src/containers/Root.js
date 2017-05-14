import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsycnApp from './AsyncApp'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AsycnApp />
      </Provider>
    )
  }
}

export default Root
