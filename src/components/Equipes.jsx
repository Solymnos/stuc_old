import React from 'react'

function Equipes() {
  return (
    <div id='Equipes' className='h-screen snap-center flex flex-row'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center'>
            <h1 className='text-white font-bold text-8xl'>Equipes</h1>
            <div className='w-full flex flex-col flex-grow justify-center items-center text-center gap-8'>
              <p className='text-white font-bold text-[110px]'>Pas d'équipe annoncée pour l'instant.</p>
            </div>
        </div>
    </div>
  )
}

export default Equipes