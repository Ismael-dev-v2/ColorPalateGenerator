import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './Components/FormColor'
import DisplayColors from './Components/DisplayColors';

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list)

  return (
    <>
     <FormColor setList={setList}/>
     <DisplayColors list={list}/>
    </>
  )
}

export default App
