import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1 className='bg-green-200 p-4 rounded-xl'>Tailwind Test</h1>
        <div className="flex">
        <Card name = "Aryan Prasad" age="19"/>
        <Card name = "Yash" age="21"/>
        </div>
      </main>
    </>
  )
}

export default App
