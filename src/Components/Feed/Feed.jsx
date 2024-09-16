import './Feed.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
const Feed = () => {
    return(
      <>
      <div className="cards">
            <div className="card">

              <img src="/profile.jpg" alt="" srcset="" />

                 <div className="content">

                     <div className="image">
                          <img src="/profile.jpg" alt="" srcset="" />
                      </div>
                      
                      <div className="info">
                          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nobis</h2>
                          <h3>Hello World</h3>
                          <p>15 k views &bull; 2 days ago</p> 
                      </div>
                      <div className="dots">
           <HiOutlineDotsVertical />
        </div>
       

                  </div>
            </div>   



            <div className="card">

<img src="/profile.jpg" alt="" srcset="" />

   <div className="content">

       <div className="image">
            <img src="/profile.jpg" alt="" srcset="" />
        </div>
        
        <div className="info">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nobis</h2>
            <h3>Hello World</h3>
            <p>15 k views &bull; 2 days ago</p> 
        </div>
        <div className="dots">
           <HiOutlineDotsVertical />
        </div>
       

    </div>
</div>   

<div className="card">

<img src="/profile.jpg" alt="" srcset="" />

   <div className="content">

       <div className="image">
            <img src="/profile.jpg" alt="" srcset="" />
        </div>
        
        <div className="info">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nobis</h2>
            <h3>Hello World</h3>
            <p>15 k views &bull; 2 days ago</p> 
        </div>
        <div className="dots">
           <HiOutlineDotsVertical />
        </div>
       

    </div>
</div>   

<div className="card">

<img src="/profile.jpg" alt="" srcset="" />

   <div className="content">

       <div className="image">
            <img src="/profile.jpg" alt="" srcset="" />
        </div>
        
        <div className="info">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nobis</h2>
            <h3>Hello World</h3>
            <p>15 k views &bull; 2 days ago</p> 
        </div>
        <div className="dots">
           <HiOutlineDotsVertical />
        </div>
       

    </div>
</div>   
       </div>  

      
      </>

    )
}
export default Feed