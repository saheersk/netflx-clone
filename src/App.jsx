import { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <RowPost />
    </>
  )
}

export default App
