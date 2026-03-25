import './App.css'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/homepage/banner/Banner'
import Players from '../components/homepage/players/Players'
import { Suspense } from 'react'

const fetchPlayers = async()=>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}> 
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
