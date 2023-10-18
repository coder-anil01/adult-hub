import React from 'react'
import '../style/VideoCard.css'

const VideoCard = ({data}) => {
  return (
      <div className='v-main-container'>
        {data.map((value)=>{
            return(
            <div className="v-container" key={value.id}>
                {/* <a href={value.embed}><img className='default_thumb' src="https://picsum.photos/500/200" alt="" /></a> */}
                <a href={value.embed}><img className='default_thumb' src={value.default_thumb.src} alt="" /></a>
                <div className='p-title'>{value.title.slice(0,35)}...</div>
                <div className="p-time-date">
                    <div>🕐 {Math.floor((value.length_sec)/60)}:{(Math.floor(value.length_sec)%60)} min</div>
                    <div>{value.added.slice(0,10)}</div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default VideoCard
