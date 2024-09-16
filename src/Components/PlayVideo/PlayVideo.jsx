import './PlayVideo.css'
const PlayVideo = () => {
    return(
      <>
      <div className="play-video">

        <div className="video">
        <iframe  height="450" src="https://www.youtube.com/embed/uAdcJNYU1Nk?si=SLXizFcMqoFfkmOa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2> A Creative & Cozy Day 🍃🏠: Cleaning, Drawing of Us 🎨, Jelly-cat food Edition 🍅 🥯</h2>
        </div>
       
      <div className="play-video-info">

        <div className="publisher">

          <img src="/profile.jpg" alt="" srcset="" />
          <div className="title">
          <p>Luke Madit</p>
          <span>67 k &bull; 5 days ago</span>
          </div>
          <button>Subscribe</button>

        </div>

        <div className="play-video-parameter">
          <div className="like-dislike">
          <span>like</span>
          <span>207</span>
          <span>dislike</span>
          </div>

          <div className="share">
            <span>share</span>
          </div>

          <div className="dots">
            <span>dots</span>
          </div>
           
        </div>
      </div>


     <div className="play-video-description">
      <span>8.8 k &bull; 9 days ago</span>
      <p>Hi friends,

          Welcome back to our channel for our #4 video!  ＼ʕ •ᴥ•ʔ／

          We handle everything from filming to editing. It's been another labor of love, and we're excited to share these intimate moments with you! 

          We hope you find it as peaceful and enjoyable as we do. If you like our content, don't forget to subscribe and join us on this wonderful journey! 💛</p>
     </div>




     <div className="play-video-comments">
      <div className="comments-title">
        <p>86 commentaires</p>
        <p>icon  Sort</p>
      </div>

      <div className="comment-info">
        <img src="/profile.jpg" alt="" srcset="" />
        <div className="comment-text">
          <h4>@Tan-ww4cf  <span>5 days ago</span></h4>
          <p>You channel is underrated, can't believe a new channel providing such a quality vlog</p>
          <div className="icons">
            <span>like</span>
            <span>dislike</span>
            <p>response</p>
          </div>
        </div>
        <p>dots</p>
      </div>
     </div>

      </div>
      
      </>

    )
}
export default PlayVideo