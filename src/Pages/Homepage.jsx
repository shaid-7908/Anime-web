import React, { useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import axios from 'axios'


export default function Homepage() {
 
 const [trendingAnime,setTrendingAnime]=useState()


 useEffect(()=>{
    axios.get(import.meta.env.VITE_ANIME_API+'/TRENDING?page=1&perPage=6').then((res)=>{
      setTrendingAnime(res?.data.results)
      console.log(res?.data.results)
    })
 },[])


 
  return (
    <div className='bg-darkBackgroung'>
    <div className='container relative mx-auto  max-h-fit md:h-fullHeight text-white'>
      <Nav/>
       {/* Trending Section */}
        <div className='flex flex-col flex-wrap p-3'>
          <div></div>
          <h1 className='text-green-300 text-2xl md:text-4xl'>Trending</h1>
          <div className='flex flex-wrap '>
           {trendingAnime?.map((element)=>{
            return (
              <div key={element.id} className="w-animeCardSize min-w-min bg-litedarkBackground transition ease-in-out delay-150 duration-300 overflow-hidden md:hover:scale-125 md:hover:rounded-md mx-auto my-1 md:w-midScreenCard md:mx-auto md:h-cardHeight  md:my-3">
             <div className='h-imgDivHeight'>
             <img src={element.image} alt='na'
             style={{
              objectFit:'cover',
              width:'100%',
              height:'100%'
             }}
             
             /></div>
             <h2 className='font-semibold text-sm p-1 '>{element.title.romaji}</h2>
             <span style={{fontSize:'10px'}} className='p-1'>Geners :</span> {element.genres.map((e,index)=>{
             return <span key={index} style={{fontSize:'10px'}}>{e} ,</span>
             })}
            </div>
            )
           })}
          
           
            
            
            
          </div>
        </div>
    </div>
    </div>
  )
}
