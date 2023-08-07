import React, { useContext } from 'react'
import {BiHomeAlt, BiLibrary, BiSearch, BiAlbum} from 'react-icons/bi'
import {GoDiffAdded} from 'react-icons/go'
import {MdOutlineAccountCircle} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'
import Search from '../Pages/Search'
function Menu() {
    const {currentUser,logout} = useContext(AuthContext)
  return (
    <div className='bg-black text-white w-[60%] h-[100vh] p-4 absolute right-0 z-50 fixed shadow-md
        md:left-0 md:w-[25%] md:h-[80vh]
    '   
    >
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiHomeAlt size={"30px"}/>
            <p> Home</p>
        </div>
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiLibrary size={"30px"}/>
            <p> Your Library</p>
        </div>
        <Link to= "/search">
        <div className='flex gap-4 mb-8 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiSearch size={"30px"}/>
            <p> Search</p>
        </div>
        </Link>
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <GoDiffAdded size={"30px"}/>
            <p> Create Playlist</p>
        </div>
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiAlbum size={"30px"}/>
            <p> Albums</p>
        </div>
        
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <MdOutlineAccountCircle size={"30px"}/>
            {currentUser ? <p className="text-white"> {currentUser?.username}</p> : <p className="text-white">Account</p>}
        </div>
    
        <Link to= "/account">
        <div className='flex gap-4 mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            {currentUser ? <p onClick={logout}> Sign out</p>: <Link to="/login">Login</Link>}
        </div>
        </Link>
        <hr/>
        <p className=" font-light mt-3">Enjoys the music</p>
        <div className=" h-[60%] relative">
        <p className='absolute bottom-0 text-gray-50'>@Coppyright 2022</p>
        </div>
    </div>
    
  )
}

export default Menu