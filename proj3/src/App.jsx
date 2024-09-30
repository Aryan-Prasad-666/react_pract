import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [bgcolor, setBgColor] = useState('#000');

  return (
    <>
      <section style={{backgroundColor: bgcolor}}>
        <h1>Welcome to Color Changer</h1>
        <div className='color-container'>
            <Card color ="red" change ={ setBgColor } />
            <Card color = "black" change ={setBgColor} />
            <Card color = "green" change ={setBgColor} />
            <Card color = "orange" change ={setBgColor} />
            <Card color = "blue" change ={setBgColor} />
            <Card color = "purple" change ={setBgColor} />
            <Card color = "yellow" change ={setBgColor} />
            <Card color = "red" change ={setBgColor} />
            <Card color = "Pink" change ={setBgColor} />
            <Card color = "gold" change ={setBgColor} />
            <Card color = "grey" change ={setBgColor} />

        </div>
      </section>
    </>
  )
}

export default App
