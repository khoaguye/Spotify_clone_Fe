import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function Latest_podcast() {
const [playlists, setPlayList] = useState([])

const clientId = 'e5ff54cb01e04a4a9473188639c61c3c';
const clientSecret = '40b012e63f8d42fdb15cce980550fbdd';
useEffect(() => {
async function getTrendingPlaylist() {    
    console.log("hi")
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
    const apiResponse = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        'Content-Type': 'application/json',
		    'Accept': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 10,
        market: 'US',
      },
    });
    //console.log(apiResponse.data.playlists.items);
    setPlayList(apiResponse.data.playlists.items)
  }
  getTrendingPlaylist()
}, []);
  return (
    <div className= "text-white p-5 pt-0  text-[1.15rem] md:text-[1.75rem] mt-0"> 
      <h3 className ="font-bold"> Featured Playlists</h3>

    <div className = "flex relative items-center ">
      <div id = "slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {playlists.map((p) => (
          <div className = "w-[220px] p-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" key={p.id}>
          <Link to ={"/content/" + p.id}>
            <img className="rounded-lg mb-1" src={p.images[0].url} alt={p.name} />
            <p className = "font-light text-[1rem]">{p.name}</p>
            </Link>
          </div> 
        ))}
      </div>
    </div>
     {/* <button onClick={getTrendingAlbums}>get album</button>  */}
     </div>
  )
}

export default Latest_podcast



