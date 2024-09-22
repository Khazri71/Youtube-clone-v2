import './PlayVideo.css'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useResultContext } from '../../Contexts/ResultContextProvider';
import { useEffect  , useState} from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
const PlayVideo = () => {


  const {videoId} = useParams();

   const {convertNumber , YOUTUBE_API } = useResultContext();
   const [description , setDescription] = useState(true);
   const [dataVideo , setDataVideo] = useState(null);
   const [dataChannel , setDataChannel] = useState(null);
   const [dataComments , setDataComments] = useState(null);

   

   const getDataVideo = async () => {
      const dataVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API}`;
      const response = await fetch(dataVideoUrl);
      const data = await response.json();
      setDataVideo(data.items[0]);
   }
 


   const getDataChannel = async () => {
       const dataChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${dataVideo.snippet.channelId}&key=${YOUTUBE_API}`;
       const response = await fetch(dataChannelUrl);
       const data = await response.json();
       setDataChannel(data.items[0]);
   }


   const getDataComments = async () => {
      const dataCommentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${YOUTUBE_API}`;
      const response = await fetch(dataCommentsUrl);
      const data = await response.json();
      setDataComments(data.items);
   }


   useEffect(() => { 
      getDataVideo();
    }, [videoId]);
    
   useEffect(() => {
      getDataChannel();
  }, [dataVideo]);

   useEffect( () => {
      getDataComments();
   } , [videoId]);



    return(
      <>
      <div className="play-video">

        <div className="video">
        {/* ?autoplay=1 */}
        <iframe src=  {`https://www.youtube.com/embed/${videoId}`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>{dataVideo ? dataVideo.snippet.title : ""}</h2>
        </div>
       
       <div className="play-video-info">

        <div className="publisher">
          <img src={dataChannel && dataChannel.snippet.thumbnails.default.url} alt="" srcset="" />
          <div className="title">
          <p>{dataVideo ? dataVideo.snippet.channelTitle : ""}</p>
          <span>{dataChannel && convertNumber(dataChannel.statistics.subscriberCount)} subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="play-video-parameter">
          <div className="like-dislike">
             <BiLike  style={{fontSize:"23px"  , cursor:"pointer" }}/>
             <span>{dataVideo && convertNumber(dataVideo.statistics.likeCount) }</span>
             <BiDislike  style={{fontSize:"23px" , cursor:"pointer" }}/>
          </div>

          <div className="share">
              <PiShareFatLight style={{fontSize:"23px" , cursor:"pointer" }} /> 
              <span>share</span>
          </div>

          <div className="dots">
             <BiDotsHorizontalRounded style={{fontSize:"23px" , cursor:"pointer" , position:"absolute" , top:"50%" , left:"50%" , transform:"translate(-50% , -50%  )" }} />
          </div>
           
        </div>
      </div>


     <div className="play-video-description">
      <span>{dataVideo ? convertNumber(dataVideo.statistics.viewCount) : "0"}   {dataVideo && (moment(new Date(dataVideo.snippet.publishedAt)).fromNow() === "a day ago" ? "1 day ago" :  moment(new Date(dataVideo.snippet.publishedAt)).fromNow())}</span>
      <p>
         {dataVideo && (
            <>
            { description  ? dataVideo.snippet.description.slice(0 ,250) : dataVideo.snippet.description }
            <BiDotsHorizontalRounded style={{cursor:"pointer" , fontSize:"23px" , marginBottom:"-8px"}}  onClick={() =>setDescription(prev => prev === true ? false : true)} />
            </>
         )}
      </p>
     </div>




     <div className="play-video-comments">
      <div className="comments-title">
        <p>{dataVideo && convertNumber(dataVideo.statistics.commentCount) } commments</p>
        <p>
          <BiMenuAltLeft  style={{fontSize:"26px" }} /> 
          <span>Sort</span>
        </p>
      </div>
{/* ************ */}
{dataComments && dataComments.map((item , index )=>(

<div key={index} className="comment-info">
<img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" srcset="" />
<div className="comment-text">
   <h4>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(new Date(item.snippet.topLevelComment.snippet.publishedAt)).fromNow()}</span></h4>
   {/* <p>You channel is underrated, can't believe a new channel providing such a quality vlog</p> */}
   <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
   <p>Traduction en français</p>
   <div className="icons">
      <p><BiLike  style={{fontSize:"23px"  , position:"absolute" , top:"50%" , left:"50%" , transform:"translate(-50% , -50%  )" }}/>  </p>
      <span>{convertNumber(item.snippet.topLevelComment.snippet.likeCount)}</span>
     
      <p><BiDislike  style={{fontSize:"23px" ,  position:"absolute" , top:"50%" , left:"50%" , transform:"translate(-50% , -50%  )" }}/>  </p>
      <p>Response</p>
   </div>
 </div>
<p><BsThreeDotsVertical /></p>  
</div>

)) }
     
      {/* ************ */}

 
    </div>









      </div>
      
      </>

    )
}
export default PlayVideo