import React, { useState } from 'react'

import { Provider } from 'react-redux'
// import ReduxCounter from './Redux Crud/ReduxCounter'
import { store } from './app/store'; 
import ReduxCounter from './Redux/ReduxCounter';


export default function App() {
  return (
    <div>
      <Provider store={store} >
        <ReduxCounter/>
      </Provider>
    </div>
  )
}
