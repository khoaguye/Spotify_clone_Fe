import React, {useEffect, useState, useContext} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import {BiDotsHorizontalRounded } from 'react-icons/bi'
import {SongIdArray, contextProvider} from './SongIdArray'
function Searchtool() {
  
    const [searchContent, setSearchContent]= useState();
    const [item, setItem]= useState();
    const [tracks, setTracks] = useState([]);
    let params = useParams();
    const id = params.name  
    const{songId, setSongId}= useContext(SongIdArray);
    console.log(searchContent)
    
      useEffect(()=>
        {
         async function getSearchContent(){
            try {
              const response = await axios.get(`/search/searchContent/:${searchContent}`)
              setTracks(response.data)
              setItem(response.data)
              //console.log(response.data)
            } catch (error) {
              console.log(error)
            }
           
         }
         getSearchContent()
        },
      [searchContent]);
      console.log("bellor is tracks")
       console.log(tracks)

       function getIDArray(){
        item.map(i=>
            songId.push(i.id)
          )   
     }
     function clearArray(){
      songId.splice(0,songId.length);
    }
  return (
    <div className=' mt-0  p-[2rem]  bg-background-desktop min-h-screen  text-white'>
      <div className='flex  justify-between'>
      <Link to= {"/"} onClick={clearArray}>
        <IoIosArrowBack size={"20px"} className="ml-0"/>
        </Link>
        <div className='w-[100%] relative'>
        <input
             className=" -mt-2 p-2 w-[95%] rounded-full outline-none text-black"
             type= "text"
             name = "content"
             value={searchContent}
             onChange= {event => setSearchContent(event.target.value)}
             placeholder="What do you want to listen to"/>
             <span className= "absolute top-0 right-0 mr-6 md:mr-14 lg:mr-20 -mt-1 text-black">
        <BiSearch size={"35px"} />
        </span>
        </div>
       </div>
       <div className="mt-7  font-extrabold ">
        {
        

         tracks.map((track) =>(
          
          <Link to= {"/play/" + track.id }>
        <div className="text-white flex justify-between mt-4">
                <div className=" flex  gap-4 h-[60px] w-[100%] md:w-[50%]" onClick={getIDArray}>
               
                 <div className = "w-[15%]">
                
                      <img src = {track.album.images[0].url} className = "w-[100%] h-[100%] "></img> 
                 </div>
                 <div className = "w-[70%] text-[1rem]">
        
                      <p className='font-light '>{track.name}</p>
                       <p className='font-light text-light-text text-[0.75rem]'>{track.artists[0].name}</p> 
                 </div>
    
                
             </div>    
             <BiDotsHorizontalRounded size={"25px"} className='mt-4'/>
        </div>
        </Link>
          
        ))} 
       </div>
    </div>
  ) 
}

export default Searchtool