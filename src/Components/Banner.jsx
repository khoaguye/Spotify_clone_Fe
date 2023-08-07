import React, {useState, useEffect} from 'react'
import {BsBell} from 'react-icons/bs'
import {BsClockHistory} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
function Banner() {
  const [hour, setHour] = useState(new Date().getHours());
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 3600000);
    return () => clearInterval(interval);
  }, []);
   
  return (
    <div className=' w-100'>
    <div className ="flex justify-between p-5 bg-black text-white  pt-0 border-t-black">
        <p className="font-bold text-[1.25rem] md:text-[2rem]"> {hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'} </p>
        <BsBell size ={"23px"}/>
        <BsClockHistory size ={"23px"}/>
        <FiSettings size ={"23px"}/>
    </div>
    <div className="w-100 bg-black">
    <div className ="flex  p-5 justify-start gap-4  text-white  pt-0 w-90 md:w-150">
        <button className="bg-spotify-light-grey font-bold p-2 md:px-5 rounded-l-full rounded-r-full text-[0.85rem] md:text-[1.25rem] "> Music</button>
        <button className="bg-spotify-light-grey font-bold p-2 md:px-5 rounded-full text-[0.85rem] md:text-[1.25rem]">Poscasts & Shows</button>
        <button className="bg-spotify-light-grey font-bold p-2 md:px-5 rounded-full text-[0.85rem] md:text-[1.25rem]">Audiobooks</button>
    </div>
    </div>
    </div>
  )
}

export default Banner