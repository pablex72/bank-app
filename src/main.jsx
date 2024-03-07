import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx'


const store = configureStore({
  reducer:{
    users: UserReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
