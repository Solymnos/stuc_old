import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Calendrier from './components/Calendrier';
import Classements from './components/Classements';
import Equipes from './components/Equipes';
import Format from './components/Format';
import Jeux from './components/Jeux';
import Resultats from './components/Resultats';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[url("./img/bg.svg")] snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar'>
      <Home />
      <Format />
      <Calendrier />
      <Jeux />
      <Equipes />
      <Resultats />
      <Classements />
    </div>
  )
}

export default App
