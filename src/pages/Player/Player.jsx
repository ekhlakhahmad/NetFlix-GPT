import React from 'react'
import './Player.css';

const Player = () => {
  return (
    <div className='player'>
      <img src="" alt="" />
      <iframe src="https://www.youtube.com/embed/hkHhwA-vEyQ" frameborder="0" title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
