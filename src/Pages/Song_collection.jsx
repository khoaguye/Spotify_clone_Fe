import React from 'react'
import Content from '../Components/Content'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Menu from '../Components/Menu'
function Song_collection() {
  return (
    <div className='bg-black'>
       <NavBar className=" fixed top-0 left-0" />
    <div className=" md:grid md:grid-cols-4 ">
      <div className="md:col-span-1 hidden md:block">
        <Menu/>
      </div>
      <div className="md:col-span-3 md:bg-background-desktop">
        <Content/>
       </div>
       </div>
    </div>
   
  )
}

export default Song_collection