import './Navbar.css'
import { SlMenu } from "react-icons/sl"
import { TbVideoPlus } from "react-icons/tb"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiSearch } from "react-icons/ci"
import { IoMdMic } from "react-icons/io";
import { useResultContext } from '../../Contexts/ResultContextProvider'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {


    const {setSidIsOpen , text , setText} = useResultContext();
   

    console.log(text)

    return(
      <>
      <div className='nav flex-btw'>


        <div className="nav-left flex-btw">
          <SlMenu  style={{fontSize: "20px" , marginRight:"30px" ,   cursor: "pointer"}}    className="SIMenu"
            onClick={()=> setSidIsOpen(prev => prev === true ? false : true )}
          />
          <Link to="/">
           <img src="/youtube-icon.png" alt="youtube icon" srcset="" /> 
          <span className='logo'>Youtube <sup>TN</sup> </span>
          </Link>
         
        </div>


        <div className="nav-middle flex-btw">
         <div className="nav-search  flex-btw">
             <input type="text" placeholder='Search'onChange={(e) => setText(e.target.value) } value={text} />
             <div className='search-icon'>
              <CiSearch  style={{fontSize: "20px" , top:"50%" , left:"50%", transform: "translate(-50% , -50%)" , position:"absolute" ,   cursor: "pointer"  }} />
             </div> 
         </div>
         <div className="mic-icon ">
             <IoMdMic  style={{fontSize: "20px" , top:"50%" , left:"50%", transform: "translate(-50% , -50%)" , position:"absolute" ,   cursor: "pointer"}}/>
         </div>
        </div>
        

        <div className="nav-right flex-btw">
         <TbVideoPlus style={{fontSize: "25px" , marginRight:"15px" ,   cursor: "pointer"}} className="TbVideoPlus" />
         <IoIosNotificationsOutline  style={{fontSize: "25px" , marginRight:"15px" ,   cursor: "pointer"}} className="IoIosNotificationsOutline"/>
         <img src="/profile.jpg" alt="profile" srcset=""  />
        </div>


      </div>
      </>

    )
}
export default Navbar