import React from 'react';
import './video.css'


function Video() {
    return (
        <div className='hero-container'>
      <video src='/videos/video_trimmed.mp4' autoPlay loop muted />
      <h1>Life After Life</h1>
      <p>One Last Good Deed</p>
    </div>
   

    )
}
export default Video;