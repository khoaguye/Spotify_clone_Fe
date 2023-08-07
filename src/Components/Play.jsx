import React, {useState, useEffect, useContext} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {BiDotsHorizontalRounded, BiRepeat } from 'react-icons/bi'
import {AiOutlineHeart, AiOutlineStepBackward, AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai'
import {FaStepForward, FaStepBackward} from 'react-icons/fa'
import {BsShuffle, BsBoxArrowUp} from 'react-icons/bs'
import {MdSpeakerGroup} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import {SongIdArray, contextProvider} from './SongIdArray'
import { Howl } from 'howler'
import ReactHowler from 'react-howler'

function Play() {
    
    let params = useParams();
    const clientId = 'e5ff54cb01e04a4a9473188639c61c3c';
    const clientSecret = '40b012e63f8d42fdb15cce980550fbdd';
    const [track, setTrack] = useState([]);
    const [artist, setArtist] = useState();
    const [img, setImg] = useState("");
    const [play, setPlay] = useState(false);
    const{songId, setSongId}= useContext(SongIdArray);
    const [previewURL, setPreviewURL] = useState([]);
    const [id, setId] = useState(params.track)
    let nextId;
    function clearArray(){
        songId.splice(0,songId.length);
    }

    let currId = Object.keys(songId).find(k => songId[k] === id)
    let nextValueId
    let countF = currId
    let countB = currId
    let length =  Object.keys(songId).length;
    function getTrackFoward(){
            nextId = Number(currId) +1
            countF++
            if(countF === length){
                nextId= 0
            }
            nextValueId = songId[nextId]
            if(currId !== length-2){
                currId++
            }else{
                currId= 0
            }
            if(nextValueId !== null){
                    setId(nextValueId);
            } 
    
    }
    let backId;
    let backValueId;
    function getTrackBackward(){
        backId = Number(currId) -1
        countB--;
            if(countB === -1){
                backId = length-1
            }
            backValueId = songId[backId]
            if(currId !== 0){
                currId--
            }else{
            currId= length-1
            }
            if(backValueId !== null){
                    setId(backValueId);
            } 
    }

    const navigate = useNavigate()

    

    useEffect(() => {
        async function getTrack() {    
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
            const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                });  
            const data = await response.json();
            const artists = data.artists[0].name 
            const image = data.album.images[0].url
            console.log(data)
            
                    setTrack(data);
                    setImg(image)
                    setArtist(artists)
                    setPreviewURL(data.preview_url)
        }   
        getTrack()
        }, [id]);

        
           
        // function getUrlMusic(){
        //     return previewURL
        // }
        
            //   const sound2 =  new Howl({
            //     src: ["https://p.scdn.co/mp3-preview/71ff9aeec8faf654f001a332b617fc05625553be?cid=e5ff54cb01e04a4a9473188639c61c3c",
            //     html5: true
            //   })

            //useEffect(()=>{
            let sound =  new Howl({
                src: [previewURL],
                html5: true,
                // loop: true
              })
            //})

        const handlePlay = () => {
            setPlay(true);
            sound.play();
          };
        const handlePause = () => {
            sound.pause();
            setPlay(false);
            
          };
        function playClick(){
        setPlay((prevState) => !prevState)
         }
          const goBack = () =>{
            navigate(-1)
            // sound.pause()
        }
return (
    <div className="  text-white p-2 h-auto min-h-screen md:min-h-[50px] md:h-[102%] bg-no-repeat bg-center bg-cover bg-black  bg-blend-darken bg-opacity-80 md:bg-opacity-60" style={{ backgroundImage: `url(${img})` }}>
        <div className='flex justify-between pt-6'>
           <div onClick={goBack}>
            <IoIosArrowBack size ={"25px"} onClick={clearArray} />
            </div>
            <p className='text-[1rem]'>{track.name}</p>
            <BiDotsHorizontalRounded size ={"25px"}/>
        </div>
        <div className="mt-14 md:mt-8">
        <img src= {img} className="p-5 w-[400px] h-[400px] mx-auto"/>
            
        </div>    
        <div className='flex justify-between px-2 mt-10 md:-mt-2'>
            <div>
                <h3 className='text-[1.2rem] md:text-[2rem] font-bold'> {track.name}</h3>
                <p className="font-[80] md:text-[1.2rem] text-text-light"> {artist} </p>
            </div>
            <AiOutlineHeart size ={"30px"} />
        </div>
        <div className= 'mt-14 md:-mt-1'>
            <hr className= "px-2 md:mt-7 mt-1 " />
            <div className="flex justify-between px-2 md:mt-3 pt-9 ">
                <BsShuffle size={"30px"}/>
                <FaStepBackward size={"28px"} onClick = {getTrackBackward}/>
                {/* <ReactHowler
                    src = 'https://p.scdn.co/mp3-preview/71ff9aeec8faf654f001a332b617fc05625553be?cid=e5ff54cb01e04a4a9473188639c61c3c'
                      playing={true}
      /> */}
                
                {!play ?
                 //onClick={()=> sound.play()}
                <AiFillPlayCircle size={"60px"} className="-mt-4 mr-6 " onClick={handlePlay}/>
                    :
                
                <AiFillPauseCircle size={"60px"} className="-mt-4 mr-6 " onClick={handlePause}/>
               
                }
                
                <FaStepForward size={"28px"} onClick={getTrackFoward}/>
                <BiRepeat size={"30px"}/>
            </div>
        </div>
        <div className=" flex justify-between md:hidden mt-7">
            <MdSpeakerGroup size ={"23px"} />
            <div className='flex justify-between gap-4'>
            <BsBoxArrowUp size ={"23px"}/>
            <RxHamburgerMenu size ={"23px"}/>
           
            </div>

        </div>
    </div>
)
}

export default Play

//  let sound =  new Howl({
//                 src: getUrlMusic(),
//                 html5: true,
//                 // loop: true
//               })