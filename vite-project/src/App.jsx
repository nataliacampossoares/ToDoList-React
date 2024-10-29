import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  return (
    <>
      <p>
        <div className='bg-blueDark'>
          <Header />
          <Body />
        </div>
      </p>
    </>
  )
}

export default App
