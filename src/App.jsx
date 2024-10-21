import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './Components/FormColor'

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list)

  return (
    <>
     <h2>Test Component</h2>
     <FormColor setList={setList}/>
    </>
  )
}

export default App
