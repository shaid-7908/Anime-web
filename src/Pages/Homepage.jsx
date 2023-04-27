import React, { useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Homepage() {
 
 const [trendingAnime,setTrendingAnime]=useState()


 useEffect(()=>{
    axios.get(import.meta.env.VITE_ANIME_API+'/TRENDING?page=1&perPage=4').then((res)=>{
      setTrendingAnime(res?.data.results)
      console.log(res?.data.results)
    })
 },[])


 
  return (
    <div className='bg-darkBackgroung'>
    <div className='container relative mx-auto  max-h-fit md:h-full text-white'>
      <Nav/>
       {/* Trending Section */}
        <div className='flex flex-col flex-wrap p-3'>
          <div className='flex justify-between'>
          <h1 className='text-green-300 text-2xl md:text-4xl'>Trending</h1>
          <Link to='/viewall-trending'>
          <div className='bg-green-500 px-2 py-1 rounded-md mr-2'>
          <span className=' text-slate-900 font-semibold'>
            
            View all
          
            
            </span>
          </div>
            </Link>
       
          </div>
          <div className='flex flex-wrap '>
           {trendingAnime?.map((element)=>{
            return (
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 " key={element.id}>
              <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden md:h-minCardHeight">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src={element.image} alt=""/>
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Trending</span>
                <h2 className="mt-2 mb-2 text-slate-700  font-bold">{element.title.romaji}</h2>
               
               
              </div>
              <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900 font-semibold"></i> Genres :
                </span>
                <div className='flex'>

              
                {element.genres.map((e)=>(
                  <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-1"></i> {e} 
                </span> 
                ))}
                  </div>
                       
              </div>
             
            </a>
            </div>
      
            )
           })}
          
           
            
            
            
          </div>
        </div>
    </div>
    </div>
  )
}
