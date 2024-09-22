import './Sidebar.css'
import { GoHome } from "react-icons/go"
import { IoGameControllerOutline } from "react-icons/io5"
import { MdOutlineDirectionsCarFilled } from "react-icons/md"
import { TfiCup } from "react-icons/tfi"
import { BiTv } from "react-icons/bi"
import { MdOutlineIndeterminateCheckBox } from "react-icons/md"
import { IoMusicalNoteOutline } from "react-icons/io5"
import { PiReadCvLogo } from "react-icons/pi"
import { IoNewspaperOutline } from "react-icons/io5"
import { useResultContext } from '../../Contexts/ResultContextProvider'


const Sidebar = () => {
 

  const {sidIsOpen , category , setCategory} = useResultContext();

  const sidLinks = [
    {icon:  <GoHome />    , text:"Home" , catID:0},
    {icon:  <IoGameControllerOutline />    , text:"Gaming" , catID:20},
    {icon:  <MdOutlineDirectionsCarFilled />    , text:"Automobiles" ,  catID:2},
    {icon:  <TfiCup />    , text:"Sports" ,  catID:17},
    {icon:  <BiTv />    , text:"Entertainement" ,  catID:24},
    {icon:  <MdOutlineIndeterminateCheckBox />    , text:"Technologies" , catID:28},
    {icon:  <IoMusicalNoteOutline />    , text:"Music" ,  catID:10},
    {icon:  <PiReadCvLogo />    , text:"Blogs" ,  catID:22},
    {icon:  <IoNewspaperOutline />    , text:"News" , catID:25}
  ]



  const sidSubs = [
    {profile : "/profile.jpg" , name: "Selena Gomez"},
    {profile : "/profile.jpg" , name: "Coding Girl"},
    {profile : "/profile.jpg" , name: "Japan 4K"},
    {profile : "/profile.jpg" , name: "Abao à Tokyo"},
    {profile : "/profile.jpg" , name: "Naral"},
    {profile : "/profile.jpg" , name: "PittPt"}


  ]

    return(
      <>
      <div className={`sidebar  ${sidIsOpen ? "" : "small-sidebar"}`}>
        <div className="shorcut-links">
          {sidLinks.map(({icon , text , catID} , index) => (
            <div key={index} className= {`shorcut-link flex-div    ${catID === category ? "active" : ""}`}  onClick={() => setCategory(catID)}>
               <div className="sid-icon">
                  {icon}
               </div>
               <p className="sid-text"> {text}</p>
            </div>
  
          ))}
        </div>

        <hr />

        <span>Subscribed</span>


         {sidSubs.map(({profile , name} , index)=>(
          <div key={index} className="subscribed-list flex-div">
          <div className="sub-img">
            <img src={profile} alt="" srcset="" />
          </div>
          <p className="sub-name">
            {name}
          </p>
        </div>
         ))}



        
       
      </div>
      
      </>

    )
}
export default Sidebar