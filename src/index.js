import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import App from './App';

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
