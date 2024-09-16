import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import './Home.css'
import { useResultContext } from '../../Contexts/ResultContextProvider'
const Home = () => {


   const {sidIsOpen} = useResultContext();

    return(
    <>
    <div className="home">
        <Sidebar/>
        <div className={`${sidIsOpen ? " container" : "large-container"}`}>
        <Feed/>
        </div>
      
    </div>
    </>
    )
}

export default Home