import React, {useState, useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {BsSpotify} from 'react-icons/bs'
import axios from 'axios'
import { AuthContext } from '../Context/authContext'
function Login() {
    const {login} = useContext(AuthContext)
    const [err, setErr] = useState(null);
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })
    const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const navigate = useNavigate()
    const handleSubmit = async e =>{
        e.preventDefault()
        try{
          const res = await login(inputs)
          navigate("/")
          console.log(res)
        }catch(err){
          console.log(err)
          setErr(err.response.data)
        }
        
      }
  return (
    
        <div className = "bg-background-desktop min-h-screen flex  justify-center items-center text-white ">
      <div className = "flex flex-col justify-center items-center h-[300px] py-0 mt-0">
        <div className = "flex gap-2  -mt-[5em]">
        <Link to = "/">
            <BsSpotify size ={"50px"} className ="text-green-700"/>
            </Link>
            <h3 className="text-[3rem] -mt-3">Spotify</h3>  
    </div> 
        <div className="flex gap-5 mt-4">
        <Link to="/login">
            <h2 className='text-[1.25rem] text-bold cursor-pointer hover:text-green-700 hover:scale-200 ease-in-out duration-500'> Sign In </h2>
        </Link>
        <Link to="/account">
            <h2 className='text-[1.25rem] text-bold cursor-pointer hover:text-green-700 ease-in-out duration-500'> Sign Up </h2>
         </Link>     
        </div>
        {err && <p className='text-red-700 mb-0'>{err}</p>}
        <div className="mt-[2em] w-[70%] h-[70px]">
            <input className="w-[100%] h-[50%] rounded-full px-2 mb-4 text-black outline-none"
                type="text"
                name='username'
                placeholder='UserName'
                onChange={handleChange}
            />
          
             <input className=" mt-[1em] w-[100%] h-[50%] rounded-full px-2 text-black outline-none"
                type="password"
                name='password'
                placeholder='Password'
                onChange={handleChange}
            />
           
            <button className="w-[100%] bg-green-700 text-white mt-4 text-[1.25rem] text-bold rounded-full py-1 "
                    onClick={handleSubmit}
            >Sign Up</button>

             <p className='text-text-light mt-4 text-center'>Forgot password?</p>
        </div>
        </div>
    </div>
    
  )
}

export default Login