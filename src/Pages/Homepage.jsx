import React, { useEffect, useState } from 'react'
import Menubar from '../assets/align-justify-svgrepo-com.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


export default function Homepage() {
 const [mobileMenuState,setMobileMenuState]=useState(false)
 const [searchText,setSearchText]=useState('')
 const [trendingAnime,setTrendingAnime]=useState()


 useEffect(()=>{
    axios.get(import.meta.env.VITE_ANIME_API+'/trending?page=1&perPage=6').then((res)=>{
      setTrendingAnime(res?.data.results)
      console.log(res?.data.results)
    })
 },[])

  const handleClick=()=>{
    setMobileMenuState(!mobileMenuState)
  
  }
  const handleChange=(e)=>{
    console.log(e.traget.value)
    setSearchText(e.traget.value)
  }
  return (
    <div className='container relative mx-auto bg-darkBackgroung max-h-fit md:h-fullHeight text-white'>
       <div className='flex items-center justify-between py-3 px-3'>
         <span>Logo</span>
          <nav className='hidden md:flex space-x-6 font-semibold mx-auto'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Favourite</a>
            <a href='#'>Trending</a>
          </nav>
           <div className='md:hidden text-white' onClick={handleClick}>
          {mobileMenuState ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon className='text-white' icon={faBars} />}
           </div>
       </div>
       <hr/>
       <div className='relative mx-auto bg-white text-black  mt-4 p-3 rounded flex justify-between w-3/4 md:w-1/2'>
         <input placeholder='Search Anime' className='focus:outline-none w-2/3' type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
         <FontAwesomeIcon className='text-3xl' icon={faMagnifyingGlass}/>
         <div className={searchText === '' ?'absolute mt-12 hidden bg-searchResult w-3/4 p-3 md:w-11/12 md:mx-auto' : "absolute mt-12  bg-searchResult w-5/6 p-3 md:w-11/12 md:mx-auto"}>
            h
         </div>
       </div>
       <div className={mobileMenuState ? 'md:hidden' :'md:hidden hidden'}>
       
        <div
          id="menu"
          className="bg-litedarkBackground absolute flex-col items-center md:hidden self-end py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        > 
           <nav className='flex flex-col space-y-6 font-semibold mx-auto text-white justify-center items-center cursor-pointer'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Favourite</a>
            <a href='#'>Trending</a>
          </nav>
        </div>
       </div>
       {/* Trending Section */}
        <div className='flex flex-col flex-wrap p-3'>
          <h1 className='text-green-300 text-2xl md:text-4xl'>Trending</h1>
          <div className='flex flex-wrap '>
           {trendingAnime?.map((element)=>{
            return (
              <div key={element.id} className="w-animeCardSize min-w-min bg-litedarkBackground transition ease-in-out delay-150 duration-300 overflow-hidden md:hover:scale-125 md:hover:rounded-md mx-auto my-1 md:w-midScreenCard md:mx-auto md:h-cardHeight md:my-3">
             <div className='h-imgDivHeight'>
             <img src={element.image} alt='na'
             style={{
              objectFit:'cover',
              width:'100%',
              height:'100%'
             }}
             
             /></div>
             <h2 className='font-semibold text-sm p-1 '>{element.title.english}</h2>
            </div>
            )
           })}
          
           
            
            
            
          </div>
        </div>
    </div>
  )
}
