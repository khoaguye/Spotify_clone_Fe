import React from 'react'

function Recommend_card(props) {
  return (
    <div className=" flex text-white bg-spotify-light-grey gap-2 ">
        <div className = "w-[30%] ">
            <img src = {props.image} className = "w-100 h-[100%]"></img>
        </div>
        <div className = "w-[70%] text-[0.75rem] md:text-[1.5rem] md:font-bold">
        
            <p>{props.name}</p>
         </div>
    </div>
  )
}

export default Recommend_card