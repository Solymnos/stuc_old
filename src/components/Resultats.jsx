import React from 'react'

function Resultats() {
  return (
    <div id='Résultats' className='h-screen snap-center flex flex-row'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center'>
            <h1 className='text-white font-bold text-8xl'>Résultats</h1>
            <div className='w-full flex flex-col flex-grow justify-center items-center text-center gap-8'>
              <p className='text-white font-bold text-[110px]'>La compétition n'a pas encore commencé.</p>
            </div>
        </div>
    </div>
  )
}

export default Resultats