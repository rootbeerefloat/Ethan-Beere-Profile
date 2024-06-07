import { useState } from 'react'
import Circuit from './Circuit.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Circuit />
    </>
  )
}

export default App
