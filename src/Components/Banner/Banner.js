import "./Banner.css"
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../constants/constants';
import React, { useEffect ,useState} from "react";
var myArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let randomValue = myArray[Math.floor(Math.random() * myArray.length)];

function Banner() {
  const [move, setMove] = useState()
  useEffect(()=> {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
    setMove(response.data.results[randomValue])
    
    })
  }, [])
  return (
    <div 
    style={{backgroundImage:` url(${move ? imageUrl+move.poster_path      :""})`}}
    className='Banner'>
      <div className='content'>
        <h1 className='title'>{move ? move.title : ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{move ? move.overview : ""}</h1>

      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner