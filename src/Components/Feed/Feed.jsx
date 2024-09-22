import { Link } from 'react-router-dom';
import './Feed.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useResultContext } from '../../Contexts/ResultContextProvider';
import { useEffect , useState} from 'react';
import moment from 'moment';

const Feed = () => {


    const {getDataFeed , dataFeed , category , convertNumber , YOUTUBE_API , getDataSearchKeyword , text} = useResultContext();
    const [channel , setChannel] = useState(null);
    // const [channelId , setChannelId] = useState(null);

    
       
    useEffect(()=> {
        getDataFeed();  
   }, [category]);
  
//   useEffect(()=> {
//     getDataSearchKeyword();  
// }, [category , text]);






//   useEffect(() => {
//     getDataChannel();
//   }, [dataFeed]);

//    const getDataChannel = async () => {
//     const dataChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YOUTUBE_API}`;
//     const response = await fetch(dataChannelUrl);
//     const data = await response.json();
//     setChannel(data.items[0]);
    
// }





    return(
      <>
      <div className="cards">
             {dataFeed && dataFeed.map((item , index) => (
                  <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`} className="card">
                  <img src={item.snippet.thumbnails.medium.url} alt="" srcset="" />
                     <div className="content">
                        {/* {setChannelId(item.snippet.channelId)} */}
                        
                            <div className="image">
                              <img src={channel && channel.snippet.thumbnails.default.url} alt="Channel thumbnail" />
                            </div>
                        
                       
                          <div className="info">
                              <h2>{item.snippet.title}</h2>
                              <h3>{item.snippet.channelTitle}</h3>
                              <p>{ convertNumber( item.statistics.viewCount) } views &bull; { moment(new Date(item.snippet.publishedAt)).fromNow() === "a day ago" ? "1 day ago" : moment(new Date(item.snippet.publishedAt)).fromNow()}</p> 
                          </div>
                          <div className="dots">
                             <HiOutlineDotsVertical />
                          </div>
                      </div>
                </Link>   

              ))}
            
      </div>
      </>

    )
}
export default Feed