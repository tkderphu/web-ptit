import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectName from './SelectName'
import ClickCountMessage from './ClickCountMessage'
import ChangeWindowTitle from './ChangeWindowTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeWindowTitle/>
    </>
  )
}

export default App
