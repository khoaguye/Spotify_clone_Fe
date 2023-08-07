import React from 'react'
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import Recomment_content from '../Components/Recomment_content';
import Latest_album from '../Components/Latest_album';
import Latest_podcast from '../Components/Latest_podcast';
import Menu from '../Components/Menu';
function Home() {
  return (
    <div className='bg-black'>
      <NavBar/>
      <Banner/>
    <div className=" md:grid md:grid-cols-4">
      <div className="md:col-span-1 hidden md:block">
        <Menu/>
      </div>
      <div className="md:col-span-3 md:bg-background-desktop">
       <Recomment_content/>
       <Latest_album/>
       <Latest_podcast/>
       </div>
       </div>
    </div>
  )
}

export default Home