import React from 'react'
import './RowPost.css'
import YouTube  from 'react-youtube';
import { imageUrl, API_KEY} from '../../constants/constants';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../axios'
function RowPost(props) {
  const [moves, setmoves] = useState([]);
  const [urlId,seUrltId] = useState('')
useEffect(() => {
  axios.get(props.url).then(Response=>{
    console.log(Response.data)
    setmoves(Response.data.results)
  }).catch(err=>{alert('Network error')})
  
}, []);

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};
const handleMove = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  if(response.data.results.length!==0){
    seUrltId(response.data.results[0])
  }
  else{  console.log("array is empty")
  }
})


}
  return (
    <div className='row'>
    <h2>{props.title}</h2>
<div className='posters'>
{moves.map((obj)=>
  <img onClick={()=>handleMove(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.poster_path }`} alt='posters' />

)}

</div>


{ urlId && <YouTube opts={opts} videoId={urlId.key} />  }
    </div>
  )
}

export default RowPost