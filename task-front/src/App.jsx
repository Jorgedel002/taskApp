import { useState } from 'react'
import { Provider } from 'react-redux'
import ZuzApp from './ZuzApp'
import { AuthProvider } from './context/AuthProvider'
import appstore from './redux/Store'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Provider store={appstore}>
        <ZuzApp/>
      </Provider>
    </AuthProvider>
  )
}

export default App
