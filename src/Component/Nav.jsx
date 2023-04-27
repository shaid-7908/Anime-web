import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Menubar from '../assets/align-justify-svgrepo-com.svg'

export default function Nav() {
    const [mobileMenuState,setMobileMenuState]=useState(false)
    const [searchText,setSearchText]=useState('')
    const handleClick=()=>{
        setMobileMenuState(!mobileMenuState)
      
      }
      const handleChange=(e)=>{
        console.log(e.traget.value)
        setSearchText(e.traget.value)
      }
  return (
    <>
 
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
       </>
  )
}
