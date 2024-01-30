import React from 'react';
import '../styles/video.css';
import ropePulling from '../assets/images/rope-pulling-man.png';

const Video = () => {
  return (
    <div className="youtubeVideoSection">
        <div className="greyBar"></div>
        <div className="videoTagline">Everything you want <br></br>outside your comfort zone!</div>
        <div className="imageContainer"><img className="ropePullingManImg"src={ropePulling} alt="man pulling a rope"/></div>
    </div>
  )
}

export default Video