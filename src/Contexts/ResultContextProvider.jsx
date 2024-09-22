import { createContext, useContext, useState } from "react";



const ResultContext = createContext();






export const ResultContextProvider = ({children}) => {

  const [sidIsOpen , setSidIsOpen] = useState(true);
  const [category , setCategory] = useState(0);
  const [dataFeed , setDataFeed] = useState([]);

  

  const [text , setText] = useState("Harry potter");

  const YOUTUBE_API = "AIzaSyBch18ZGGYkT2xgf2K4hQDM3udIlzlq-mQ";
  
  const convertNumber =  (nb) => {
      if(nb > 1000000){
        return  Math.floor(nb / 1000000) + "M";
      }
      else if(nb > 1000){
        return Math.floor(nb / 1000) + "K"
      }
      else{
        return nb;
      }
  }

  
  const getDataFeed = async ()=> {
    const dataFeedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${YOUTUBE_API}`
    const response = await fetch(dataFeedUrl);
    const data = await response.json();
     setDataFeed(data.items);
   
  }
  


  const getDataSearchKeyword = async () => {
    const dataSearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${YOUTUBE_API}`;
    const response = await fetch(dataSearchUrl);
    const data = await response.json();
     setDataFeed(data.items);
  }

  
    return(
      <ResultContext.Provider
      // value={{sidIsOpen , setSidIsOpen  , category , setCategory , getDataFeed , dataFeed , convertNumber , setVId , setCatId , vId , catId , getDataVideo , dataVideo}}
      value={{sidIsOpen , setSidIsOpen  , category , setCategory , getDataFeed , dataFeed , convertNumber  , YOUTUBE_API  , text , setText , getDataSearchKeyword}}
      >
        {children}
      </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext);