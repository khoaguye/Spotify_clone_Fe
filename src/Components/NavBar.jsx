import React, {useState} from 'react'
import {FaSpotify} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Link} from 'react-router-dom';
import Menu from './Menu';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  function burgerButton(){
    setIsOpen(!isOpen)
    console.log("open menu")
  }
  return (
    <div className = "flex p-5 justify-between bg-black text-white ">
      <div>
        <div className = "flex items-end gap-1 cursor-pointer"  >
          <Link to = {"/"}>
            <FaSpotify size={"50px"} className="text-green-600"/>
          </Link>
            <h2 className ="font-bold text-[2rem]"> Spotify</h2>
            </div>
           
        </div>
        <div>
            <button 
              onClick={burgerButton}
            >
            <RxHamburgerMenu size= {"30px"} className="cursor-pointer outline-none md:hidden "/>
            </button>
            {isOpen && (
              <div>
              <Menu/>
              </div>
            )}
        </div>
    </div>
  )
}

export default NavBar