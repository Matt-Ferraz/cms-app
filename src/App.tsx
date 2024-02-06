import React, { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Link, redirect}  from 'react-router-dom'
import { getUserLocalStorage } from './context/AuthProvider/util'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Route path='/profile' loader={async () => {
          const user = getUserLocalStorage();
          if(!user) {
            throw redirect('/login')
          }
        }}>

        </Route>
        <Route path='/login'>

        </Route>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
