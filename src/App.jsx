import React from 'react'

import { Provider } from 'react-redux'
import { store } from './App/Store'
import Taskm from './Redux/Taskm'


export default function App() {
  return (
    <div>
   
    <Provider store={store}>
      <Taskm/>
    </Provider>
    </div>
  )
}
