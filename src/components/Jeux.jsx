import React, {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Vector3 } from 'three'
import Lol from './Lol'
import Tft from './Tft'

let data = 
[
  { 'name' : 'LoL', 'img' : './img/Lol.png', 'PDP' : 'Tournoi 2v2 avec 2 équipes de 2 joueurs par team' , 'PO' : 'BO1 en 5v5, game normale de LoL, le perdant du 2ème jeu choisit le side.'},
  { 'name' : 'RL', 'img' : './img/RL.png', 'PDP' : 'Rondes suisses BO3', 'PO' : 'BO5 en 3v3' },
  { 'name' : 'Valorant', 'img' : './img/Valo.png', 'PDP' : 'Rondes suisses, mode SWIFTPLAY', 'PO' : 'BO1 en 5v5'},
  { 'name' : 'TFT', 'img' : './img/TFT.png', 'PDP' : '4 joueurs par équipes, format Hexleague', 'PO' : '1 game en 4v4' },
  { 'name' : 'Fortnite', 'img' : './img/Fortnite.png', 'PDP' : 'Format à determiner', 'PO' : 'Duel Custom en 3v3' },
  { 'name' : 'SSBU', 'img' : './img/SSBU.webp', 'PDP' : 'Format Sus League, 2 joueurs minimum', 'PO' : '2 joueurs par équipe minimum, 2 x 1v1 en BO5, si besoin Decider en 2v2 en BO1' },
  { 'name' : 'Trackmania', 'img' : './img/TM.avif', 'PDP' : 'Pas disponible en phase de poule', 'PO' : 'Format round en 3v3 sur les maps de la campagne'},
  { 'name' : 'Quizz', 'img' : './img/quizz.png', 'PDP' : 'Questions de culture générale, LoL, Solary, Esport...', 'PO' : 'Pas disponible en phase de play off' },
]



function Jeux() {

  const [selectedId, setSelectedId] = useState(0);

  let handleGameClick = (id) =>
  {
    setSelectedId(id);
  }

  return (
    <div id='Jeux' className='h-screen snap-center flex flex-col'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center gap-5'>
          <h1 className='text-white font-bold text-8xl'>Jeux</h1>
          <div className='flex flex-row w-full justify-between px-5 gap-5'>
          {
              data.map((game, index) =>
                (
                  <div className={`${selectedId == index ? ' text-white border-[#EDB64A]' : 'text-white' } cursor-pointer flex flex-grow border-2 border-white p-4 font-semibold  rounded-lg text-center items-center justify-center`} key={game.name} onClick={() => handleGameClick(index)}>
                    {game.name}
                  </div>
                ))
            }
          </div>
          <div className='w-full flex flex-grow flex-row'> 
            <div className='flex-1 flex justify-center items-center'>
              <img className='w-1/2' src={data[selectedId].img} />
            </div>
            <div className='flex-1 flex flex-col gap-5 justify-center items-center py-5'>
              <div className='flex-1 border-[#EDB64A] border-4 rounded-3xl w-3/4 h-3/4 flex flex-col text-left'>
                <h1 className='text-[#EDB64A] text-4xl ml-4 mt-4 font-bold'>Phase de poules :</h1>
                <p className='text-white text-2xl font-semibold ml-4'>{data[selectedId].PDP}</p>
              </div>
              <div className='flex-1 border-[#EDB64A] border-4 rounded-3xl w-3/4 h-3/4 flex flex-col text-left'>
                <h1 className='text-[#EDB64A] text-4xl ml-4 mt-4 font-bold'>Play Off :</h1>
                <p className='text-white text-2xl font-semibold ml-4'>{data[selectedId].PO}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Jeux

