import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Summary from './Summary'
import Result from './Result'

export default function App() {

  return (
    <div className="app-container">
    <Result />
    <Summary />
    </div>
  )
}

