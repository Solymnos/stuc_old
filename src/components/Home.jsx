import React from 'react'

const data = [
    "Format",
    "Calendrier",
    "Jeux",
    "Equipes",
    "Résultats",
    "Classement"
]

let handleLinkClick = (id) =>
{
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior : 'smooth' });
    }
}

function Home() {
  return (
    <div className='h-screen snap-center flex flex-row'>
        <div className='flex-2 flex-col justify-center gap-5 flex p-5 ml-16'>
            <h1 className='text-white font-bold text-8xl'>S.T.U.C</h1>
            <h2 className='text-[#EDB64A] font-bold text-4xl'>Solary Tournament Ultra Challenge</h2>
            <ul className='list-none flex flex-col gap-5'>
                {
                    data.map(item =>
                        (
                            <li className='text-6xl font-bold cursor-pointer text-white hover:underline decoration-[#EDB64A]' text={item}  key={item} onClick={() => handleLinkClick(item)}>{item}</li>
                        ))
                }
            </ul>
        </div>
        <div className='flex-3 flex items-center justify-center'>
            <img className=' h-3/4 animate-tiltshaking' src='./img/WM.svg' alt='Wash machine'/>
        </div>
    </div>
  )
}

export default Home