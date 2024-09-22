import { useEffect , useState } from 'react';
import './Recommended.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useResultContext } from '../../Contexts/ResultContextProvider';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';


const Recommended = () => {



   const {categoryId} = useParams();

  const {convertNumber , YOUTUBE_API } = useResultContext();
  const [dataRecommended , setDataRecommended] = useState([]);


  const getDataRecommended = async () => {
     const dataRecommendedUrl =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${YOUTUBE_API}`;
     const response = await fetch(dataRecommendedUrl);
     const data = await response.json();
     setDataRecommended(data.items);
  }

    
  useEffect(() => {
      getDataRecommended();
  },[])
   
    return(
      <>
      <div className="recommended" >
        { dataRecommended && dataRecommended.map((item , index) => (
           
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="video">
          <img src={item.snippet.thumbnails.medium.url}/>
                <div className="video-info">
                  <h2>{item.snippet.title}</h2>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{convertNumber(item.statistics.viewCount)} views &bull;{moment(new Date(item.snippet.publishedAt)).fromNow()}</p>
                </div>
          <p>
            <BsThreeDotsVertical style={{fontSize:"21px" }} />
          </p>
     </Link>

        ))}
    
      </div>
      
      </>

    )
}
export default Recommended