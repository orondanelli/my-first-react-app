import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const sumCount = () => {
    setCount((count) => count + 1)
  }

  const restCount = () => {
    setCount((count) => count - 1)
  }

  return (
    <div className="App">
      <h2>Contador oficial</h2>
      <h1>{count}</h1>
      <div className="button-group">
        <Button name="Me sumo 1" action={sumCount} />
        <Button name="Me resto 1" action={restCount} />
      </div>
    </div>
  )
}

export default App
