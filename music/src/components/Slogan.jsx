import React from 'react'
import bg from '../images/background.png';
import girl from '../images/girl.png';
import musicLogo from '../images/musicLogo.png';
import playlist from '../images/musicPlaylist.png';
import './Slogan.css';

function Slogan() {
  return (
    <div className='main'>
        <div className='slogan'>
        <h1>
            Twist your mood & Tune your soul..
        </h1>
        <button className='get-started'>Get Started</button>
      </div>
      <div className='background'>
        <img src={bg} className='img1' alt='Background'/>
        <img src={musicLogo} className='img2' alt='Music-logo'/>
        <img src={girl} className='img3' alt='Avathar'/>
        <img src={playlist} className='img4' alt='Playlist'/>
      </div>
      
    </div>
  )
}

export default Slogan
