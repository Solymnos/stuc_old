import React from 'react'

let data =
[
  { 'name' : '?',  'img' : './img/interrogation.png'},
  { 'name' : '?',  'img' : './img/interrogation.png'},
  { 'name' : '?',  'img' : './img/interrogation.png'},
  { 'name' : '?',  'img' : './img/interrogation.png'},
  { 'name' : 'Quizz',  'img' : './img/quizz.png'},
]

function Format() {
  return (
    <div id="Format" className='h-screen snap-center flex flex-col'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center'>
            <h1 className='text-white font-bold text-8xl'>Format</h1>
            <div className='w-full flex-grow flex flex-row'>
              <div className='flex-1 w-full flex flex-grow justify-center items-center'>
                <div className='m-16 border-white border-8 rounded-3xl w-3/4 h-3/4 flex flex-col'>
                  <div className='w-full h-1/4 flex items-center text-center justify-center'>
                    <h1 className='text-white font-bold text-6xl underline decoration-[#EDB64A]'>Phase de poule</h1>
                  </div>
                  <div className='font font-semibold w-full h-1/2 flex items-center text-center justify-center text-4xl p-10 text-white'>
                    Tirage au sort de 4 jeux quelques jours avant le début de la compétition + Quizz
                  </div>
                  <div className='w-full h-1/4 flex flex-row justify-between px-5'>
                  {
                    data.map(item => (
                      <div className='text-white text-2xl font-semibold'>
                        <img className='h-2/3' src={item.img} key={item} />
                        {item.name}
                      </div>
                    ))
                  }
                  </div>
                </div>
              </div>
              <div className='flex-1 w-full flex flex-grow justify-center items-center'>
                <div className='m-16 border-white border-8 rounded-3xl w-3/4 h-3/4'>
                  <div className='w-full h-1/4 flex items-center text-center justify-center'>
                    <h1 className='text-white font-bold text-6xl underline decoration-[#EDB64A]'>Play-off</h1>
                  </div>
                  <div className='font font-semibold w-full h-3/4 flex flex-col items-center text-center justify-center text-4xl p-10 text-white'>
                    <p>- Arbre à élimination directe.</p>
                    <p>- Chaque équipe ban 1 jeu.</p>
                    <p>- Chaque équipe pick 1 jeu.</p>
                    <p>- LoL est forcément joué en 3ème.</p>
                    <p>- Si besoin on pick les jeux restants.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Format