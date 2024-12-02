import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/Store';
import ReduxApi from './Redux/ReduxApi';

export default function App() {

  return (
    <div>
      <Provider store={store} >
        <ReduxApi/>
      </Provider>
    </div>
  )
}
