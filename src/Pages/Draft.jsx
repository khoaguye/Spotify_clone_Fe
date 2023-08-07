import React, {useState} from 'react'
import {RxDoubleArrowDown, RxDoubleArrowUp} from "react-icons/rx"
function Draft() {
    const [click, setClick] = useState(false)
    const expandClass = click ? 'display' : 'hidden'
    const ansClass = `${expandClass} p-4 mb-3`
    function clickArrow(){
        setClick(!click)
    }
  return (
    <div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed '>
			
            <div className = "text-white w-[85%] md:w-[50%] md:py-2 mt-[8em] mx-auto h-[80px] bg-purple-800 flex flex-col items-center justify-center p-1 md:px-5 rounded border-2 border-orange-800">
                <h1 className ="text-[1.5rem] md:text-[2rem] md:tracking-wide">Frequently Asked Questions</h1>
            </div>
            <div className = "container w-[80%]  md:grid mt-7  md:w-[60%] mx-auto  md:grid-cols-2 md:gap-4">
                <div>               
                 <div className = "bg-red-800 mb-4 p-4 flex gap-2">
                {!click ?  <RxDoubleArrowDown size = {"20px"} className="mt-2" onClick={clickArrow}/>: <RxDoubleArrowUp size = {"20px"} className="mt-2" onClick={clickArrow}/>}
               
                 <h1 className= "text-[1.5rem] ">What is Hackathon</h1>
                 </div>
             
                <div className = {ansClass}>
                    <p>A hackathon is a weekend-long event where students form teams and collaborate on a software or hardware project to learn new skills, create social impact, participate in Partners challenges, and innovate new solutions! There’s also plenty of time for networking with partners, meeting other hackers, and attending workshops and mini events! In short, it’s a weekend dedicated to collaboration, technology, and community </p>
                </div>
            </div>
            <div>               
                 <div className = "bg-red-800 mb-4 p-4 flex gap-2">
                {!click ?  <RxDoubleArrowDown size = {"20px"} className="mt-2" onClick={clickArrow}/>: <RxDoubleArrowUp size = {"20px"} className="mt-2" onClick={clickArrow}/>}
               
                 <h1 className= "text-[1.5rem] ">What is Hackathon</h1>
                 </div>
             
                <div className = {ansClass}>
                    <p>A hackathon is a weekend-long event where students form teams and collaborate on a software or hardware project to learn new skills, create social impact, participate in Partners challenges, and innovate new solutions! There’s also plenty of time for networking with partners, meeting other hackers, and attending workshops and mini events! In short, it’s a weekend dedicated to collaboration, technology, and community </p>
                </div>
            </div>
            
            </div>
		</div>
  )
}

export default Draft