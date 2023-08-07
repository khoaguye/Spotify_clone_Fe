import React, {useState, useEffect, useContext}from 'react'
import {useParams} from 'react-router-dom';
import {BsSearch, BsShuffle} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineHeart, AiOutlineCloudDownload, AiFillPlayCircle} from 'react-icons/ai'
import {BiDotsHorizontalRounded } from 'react-icons/bi'
import {IoIosArrowForward} from 'react-icons/io'
import { Link } from 'react-router-dom';
import {SongIdArray, contextProvider} from './SongIdArray'
//import {useParams} from 'react-router-dom';
import axios from 'axios'
import { FaCommentsDollar } from 'react-icons/fa';
function Content() {
    let params = useParams();
    const [content, setContent] = useState()
    const clientId = 'e5ff54cb01e04a4a9473188639c61c3c';
    const clientSecret = '40b012e63f8d42fdb15cce980550fbdd';
    const id = params.name  
    const{songId, setSongId}= useContext(SongIdArray);
    const [item, setItem]= useState();
    let arrID=[];
    function clearArray(){
      songId.splice(0,songId.length);
    }
    useEffect(() => {
        async function getContent() {    
        
            // Use the client ID and client secret to get an access token
            const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', {
              grant_type: 'client_credentials',
            }, {
              auth: {
                username: clientId,
                password: clientSecret,
              },
              
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              
            });
            const accessToken = tokenResponse.data.access_token;  
            const response = await fetch(`https://api.spotify.com/v1/albums/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
                Authorization: `Bearer ${accessToken}`,
               },
            });  
           const data = await response.json();
                    setContent(data);
                    console.log(data)

                    //console.log(data.tracks.items)
                     setItem(data.tracks.items)
                     //console.log(item)
                    //console.log(item)
                    // console.log(songId)
                    // console.log(songId.length)
                }
         getContent()
 }, [id]);

 function getIDArray(){
  
    item.map(i=>
        songId.push(i.id)
      )
      //setSongId(arrID);
      console.log("arr from content "+songId)
      console.log(songId[0])
 }

  return (
    <div className='bg-black text-white p-5 h-auto min-h-screen '>
   
    {content && (
      <React.Fragment>
      <div className='flex'>
        <Link to ="/">
        <IoIosArrowBack className='mb-4 w-7' onClick={clearArray}/>
        </Link>
        <IoIosArrowForward/>
        </div>
        <div className='flex gap-3'>
        <input
            className = "w-[100%] bg-gray-800 opacity-75 appearance-none outline-none p-2 rounded-sm md:hidden"
            placeholder=  "Find in playlist"
        />
        <BsSearch size={"25px"} className="md:hidden"/>
        </div>
        <div className='mt-4  md:relative md:p-6 md:h-[400px] bg-no-repeat bg-center bg-cover bg-black  bg-blend-darken bg-opacity-80 md:bg-opacity-60' style={{ backgroundImage: `url(${content.images[0].url})` }} >
            <img src = {content.images[0].url} className="p-5 w-[300px] h-[300px] mx-auto md:hidden"
               
             />
    
            <div className="md:absolute md:bottom-8">
                <p className='text-sm md:text-lg'> PLAYLIST</p>
                <h2 className='text-[1.5rem] md:text-[3rem] mt-4'>{content.name}</h2>
                <p className='text-sm md:text-lg'>Spotify . {content.popularity} likes . {content.total_tracks} songs</p>
            </div>

        </div>
            

        <div className='flex justify-between mt-4'>
            <div className='flex gap-5'>
            <AiOutlineHeart size={"30px"} onClick={getIDArray}/>
            <AiOutlineCloudDownload size={"30px"}/>
            </div>
            <div className='flex gap-5'>
                <BsShuffle size={"30px"}/>
                <AiFillPlayCircle size={"50px"} className=" text-green-600 -m-2" />
            </div>
        </div>
        {content.tracks.items.map(track => 
        <Link to= {"/play/" + track.id}>
        <div className="text-white flex justify-between mt-4">
                <div className=" flex  gap-4 h-[60px] w-[100%] md:w-[50%]" onClick ={getIDArray}>
               
                 <div className = "w-[15%]">
                
                      <img src = {content.images[0].url} className = "w-[100%] h-[100%] "></img>
                 </div>
                 <div className = "w-[70%] text-[1rem]" key= {track.id}>
        
                      <p className='font-light '>{track.name}</p>
                      <p className='font-light text-light-text text-[0.75rem]'>{track.artists[0].name}</p>
                 </div>
    
                
             </div>    
             <BiDotsHorizontalRounded size={"25px"} className='mt-4'/>
        </div>
        </Link>
    )}
    </React.Fragment>
  
    )}
    </div>
   
  )
}

export default Content