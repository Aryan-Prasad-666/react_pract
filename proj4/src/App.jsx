import './App.css'
import Card from './components/Card'
import Products from './components/Products'

function App() {
  const desc = [["8000dpi", "5 Programmable buttons"], ["Intutive touch surface", "Designed for ipad pro"],  ["Intutive touch surface", "Designed for ipad pro"], ["Hello", "Hi"]];

  return (
    <>
      <h1>BlockBuster Deals on Computer Accessories</h1>
      <Products/>
    </>
  )
}

export default App
