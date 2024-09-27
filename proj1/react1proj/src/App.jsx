import { useState } from "react"

function App() {
  let [num, setNum] = useState(1);

  return (
      <>
        <h1>Counter = {num}</h1>
        <button onClick={
          ()=>{
            if(num>=0){
              num = num + 1;
              setNum(num)
              console.log(`num increased ${num}`)
            }
            
          }
        }>AddCounter</button>
        <button onClick={
          ()=>{
            if(num>0){
              num = num - 1;
            setNum(num)
            console.log(`num decreased ${num}`)
            }
          }
        }>RemoveCounter</button>
      </>
  )
}

export default App
