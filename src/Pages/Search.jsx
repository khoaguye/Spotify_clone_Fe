import React from 'react'
import Searchtool from '../Components/Searchtool'
import NavBar from '../Components/NavBar'
import Menu from '../Components/Menu'
function Search() {
  return (
    <div className='bg-black '>
    <NavBar className=" fixed top-0 left-0" />
 <div className=" md:grid md:grid-cols-4 ">
   <div className="md:col-span-1 hidden md:block">
     <Menu/>
   </div>
   <div className="md:col-span-3 md:bg-background-desktop">
     <Searchtool/>
    </div>
    </div>
 </div>
    
  )
}

export default Search