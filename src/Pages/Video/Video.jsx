import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import './Video.css'
import { useResultContext } from '../../Contexts/ResultContextProvider'
const Video = () => {
  

 


    return(
      <>
      <div className="video">
          <PlayVideo />
          <Recommended />
      </div>
      
      </>

    )
}
export default Video