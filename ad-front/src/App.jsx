import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdStatistics from './components/AdStatistics';
import AdTable from './components/AdTable';

function App() {

  return (
    <>
      <h1>Ad Management</h1>
      <br/>
      <h2>AdStatistics</h2>
      <AdStatistics />
      
      <h2>Ad Table</h2>
      <AdTable />
    </>
  )
}

export default App
