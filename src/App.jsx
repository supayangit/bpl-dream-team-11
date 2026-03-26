import './App.css'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/homepage/banner/Banner'
import Players from '../components/homepage/players/Players'
import { Suspense, useState } from 'react'

const fetchPlayers = async()=>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}> 
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
