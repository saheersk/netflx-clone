import { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { actions, comedies, originals } from './urls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actions} title="Action Movie" isSmall />
      <RowPost url={comedies} title="Comedy Movie" isSmall />
    </>
  )
}

export default App
