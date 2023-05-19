import React from 'react';
import "./App.css"
// import { useNavigate } from 'react-router-dom';

function WecomePage() {
  // const navigateTo = useNavigate();
  return (
    <div className='WelcomeBody'>
      <h1 className='h1ofwelocmebody'>Video Calls and meetings for everyone</h1>
      <h5 className='h5ofwelocmebody'>Zain Meet provides secure, easy-to-use video calls and meetings for everyone, on any device.</h5>
      <div className="mainMeetArea mt-3">
        <button className="newMeetingBtn p-3"><i class="fa-solid fa-video me-1"></i> New Meeting</button>
        <input type="text" placeholder='Enter a code or link' className="codeOrLinkInput p-3 mx-4" />
        <button className="joinMeetBtn">Join</button>
      </div>
    </div>
  )
}

export default WecomePage;