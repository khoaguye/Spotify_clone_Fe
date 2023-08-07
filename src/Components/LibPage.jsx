import React, {useState, useEffect, useContext}from 'react'
import {useParams} from 'react-router-dom';
import {BsSearch, BsShuffle} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineHeart, AiOutlineCloudDownload, AiFillPlayCircle} from 'react-icons/ai'
import {BiDotsHorizontalRounded } from 'react-icons/bi'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom';
import axios from 'axios';
function LibPage() {
    const [song, setSong] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/library/getLib")
                setSong(res.data)
            } catch (error) { 
                console.log(error)
            }
        }
        fetchData()
    },[])
    console.log(song)
  return (
    <div className=' bg-black text-white p-5 h-auto min-h-screen'>
        <div className='flex'>
      
            <div className="md:absolute md:bottom-8">
                <p className='text-[2rem] md:text-lg'> PLAYLIST FOR</p>
                <h2 className='text-[1.5rem] md:text-[3rem] mt-4'>Enjoys the Show</h2>
                <p className='text-sm md:text-lg'>Spotify . 10 songs</p>
            </div>

        </div>
            

        <div className='flex justify-between mt-4'>
            <div className='flex gap-5'>
            <AiOutlineHeart size={"30px"} />
            <AiOutlineCloudDownload size={"30px"}/>
            </div>
            <div className='flex gap-5'>
                <BsShuffle size={"30px"}/>
                <AiFillPlayCircle size={"50px"} className=" text-green-600 -m-2" />
            </div>
        </div>
        
        {/* <Link to= {"/play/" + track.id}> */}
        <div className="text-white flex justify-between mt-4">
        {song.map((s) =>(
                <div className=" flex  gap-4 h-[60px] w-[100%] md:w-[50%]" >
                
                 <div className = "w-[15%]"> 
                      <img src = {s.image} className = "w-[100%] h-[100%] "></img>
                 </div>
                 <div className = "w-[70%] text-[1rem]" >        
                      <p className='font-light text-white '>{s.title}</p>
                      <p className='font-light text_white text-light-text text-[0.75rem]'>{s.author}</p>
                    
                  
                      
                 </div>
                  
             </div>    

             ))} 
             <BiDotsHorizontalRounded size={"25px"} className='mt-4'/>
        </div>
        {/* </Link> */}
  

    </div>
  )
}

export default LibPage