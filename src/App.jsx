import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='container w-10/12 mx-auto'>
     <Header></Header>
     <Blogs></Blogs>
     </main>
    </>
  )
}

export default App
