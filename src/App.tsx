import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-fill bg-slate-300 rounded-xl m-4 items-center justify-center flex p-4'>
      <Button>Teste</Button>
    </div>
  )
}

export default App
