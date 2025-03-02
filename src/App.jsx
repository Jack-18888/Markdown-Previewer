import './App.css'
import Editor from './components/editor'
import Preview from './components/Previewer'
import React, {useState} from 'react'

function App() {
  const [text, setText] = useState("");

  return (
    <div className='app'>
      <Editor text={text} setText={setText}/>
      <Preview text={text}/>
    </div>
  )
}

export default App
