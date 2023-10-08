import React, { useState } from 'react'
import data from '../Teams.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';

function Equipes() {

  const [selectedId, setSelectedId] = useState(0);

  let handleTeamClick = (id) =>
  {
    setSelectedId(id);
  }

  return (
    <div id='Equipes' className='h-screen snap-center flex flex-row'>
        <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center gap-5'>
            <h1 className='text-white font-bold text-8xl mb-8'>Equipes</h1>
            <div className='flex flex-row w-full justify-center px-5 gap-5'>
            {
                data.teams.map((team, index) =>
                  (
                    <div>
                      <div className={`${selectedId == index ? ' text-white border-[#EDB64A]' : 'text-white' } cursor-pointer flex text-xl  border-2 border-white p-4 font-semibold  rounded-lg text-center items-center justify-center`} key={team.name} onClick={() => handleTeamClick(index)}>
                        <img className='h-8 mr-4' src={team.icon} />
                        {team.name}
                      </div>
                    </div>
                  ))
              }
            </div>
            <div className='w-full flex flex-row flex-grow justify-center items-center text-center gap-8'>
              
              {

                data.teams[selectedId].players.length > 5 ? (
                  <div className='w-full h-full flex flex-row flex-grow justify-center items-center text-center gap-8'>
                    <img className='icon-arrow-long-left w-10 review-swiper-button-prev' src='./img/arrow.png' />
                    <Swiper modules={[Navigation]} className='h-full' spaceBetween={32} slidesPerView={5} navigation={{nextEl: '.review-swiper-button-next',prevEl: '.review-swiper-button-prev',}}>
                      {
                      data.teams[selectedId].players.map((player) => (
                        <SwiperSlide className='h-full' key={player}>
                          <div className='gap-5 text-white border-white border-4 rounded-3xl flex flex-col flex-1 h-full p-5 item items-center'>
                            <h1 className='text-white text-5xl font-bold'>{player.name}</h1>
                            <img className=' w-32 h-32 rounded-full border-white border-2' src={player.icon}/>
                            <div className=' text-left w-full gap-2 flex flex-col'>
                              <div>
                                <h2 className='text-xl font-bold text-[#EDB64A]'>League of Legends :</h2>
                                <h3 className='text-md font-semibold'>{player.RLoL} - <a className='underline' href={player.LLol}>Lien</a></h3>
                              </div>
                              <div>
                                <h2 className='text-xl font-bold text-[#EDB64A]'>Valorant :</h2>
                                <h3 className='text-md font-semibold'>{player.RValorant} - <a className='underline' href={player.LValo}>Lien</a></h3>
                              </div>
                              <div>
                                <h2 className='text-xl font-bold text-[#EDB64A]'>TFT :</h2>
                                <h3 className='text-md font-semibold'>{player.RTFT} - <a className='underline' href={player.LTFT}>Lien</a></h3>
                              </div>
                              <div>
                                <h2 className='text-xl font-bold text-[#EDB64A]'>Rocket League :</h2>
                                <h3 className='text-md font-semibold'>{player.RRL} - <a className='underline' href={player.LRL}>Lien</a></h3>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                    ))
                      }
                      
                    </Swiper>
                    <img className='icon-arrow-long-right w-10 review-swiper-button-next -scale-x-100' src='./img/arrow.png' />
                  </div>
                ) : (
                  data.teams[selectedId].players.map((player) => (
                    <div className='gap-5 text-white border-white border-4 rounded-3xl flex flex-col flex-1 h-full p-5 item items-center'>
                      <h1 className='text-white text-5xl font-bold'>{player.name}</h1>
                      <img className=' w-32 h-32 rounded-full border-white border-2' src={player.icon}/>
                      <div className=' text-left w-full gap-2 flex flex-col'>
                        <div>
                          <h2 className='text-xl font-bold text-[#EDB64A]'>League of Legends :</h2>
                          <h3 className='text-md font-semibold'>{player.RLoL} - <a className='underline' href={player.LLol}>Lien</a></h3>
                        </div>
                        <div>
                          <h2 className='text-xl font-bold text-[#EDB64A]'>Valorant :</h2>
                          <h3 className='text-md font-semibold'>{player.RValorant} - <a className='underline' href={player.LValo}>Lien</a></h3>
                        </div>
                        <div>
                          <h2 className='text-xl font-bold text-[#EDB64A]'>TFT :</h2>
                          <h3 className='text-md font-semibold'>{player.RTFT} - <a className='underline' href={player.LTFT}>Lien</a></h3>
                        </div>
                        <div>
                          <h2 className='text-xl font-bold text-[#EDB64A]'>Rocket League :</h2>
                          <h3 className='text-md font-semibold'>{player.RRL} - <a className='underline' href={player.LRL}>Lien</a></h3>
                        </div>
                      </div>
                    </div>
                  ))
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Equipes