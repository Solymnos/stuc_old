import React from 'react'

function Classements() {
  return (
    <div id='Classement' className='h-screen snap-center flex flex-row'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center'>
            <h1 className='text-white font-bold text-8xl'>Classement</h1>
            <div className='w-full flex flex-col flex-grow justify-center items-center text-center gap-8'>
              <p className='text-white font-bold text-[110px]'>La compétition n'a pas encore commencé.</p>
              <p className='text-white font-semibold text-4xl'>Soit patient</p>
            </div>
        </div>
    </div>
  )
}

export default Classements