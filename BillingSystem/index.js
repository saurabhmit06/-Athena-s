import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combinereducer from './reducers/item'
import { getAllProducts } from './actions/itemAction'
import App from './app'

const store = createStore(
  combinereducer
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
