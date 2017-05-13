import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
// import AsycnApp from './AsyncApp'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <h1>Hello</h1>
      </Provider>
    )
  }
}

export default Root
