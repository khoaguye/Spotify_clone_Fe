import React from 'react'
import Play from '../Components/Play'
import NavBar from '../Components/NavBar'
import Menu from '../Components/Menu'
function Play_page() {
  return (
    <div className='bg-black md:h-[100vh]'>
    <div className=' hidden md:block '>
    <NavBar className=" fixed top-0 left-0" />
    </div>
 <div className=" md:grid md:grid-cols-4 ">
   <div className="md:col-span-1 hidden md:block">
     <Menu/>
   </div>
   <div className="md:col-span-3 md:bg-background-desktop">
     <Play/>
    </div>
    </div>
 </div>
  )
}

export default Play_page