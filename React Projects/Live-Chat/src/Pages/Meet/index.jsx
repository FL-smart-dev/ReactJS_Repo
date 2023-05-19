import React from 'react';
import "./App.css";

function Meet() {
  return (
    <div className='Meet-Page'>
      <div className="videoSection">
        <div>
          zain
        </div>
      </div>


      {/* {Setting section} */}
      <div className="settingSection py-4 px-5 d-flex">

        <div>6:43 PM | yhg-tjbj-ziv</div>

        <div className='iconOfSettings d-flex'>

          <i className="fa-solid redWalaBackground fa-microphone-slash"></i>
          <i className="fa-solid redWalaBackground fa-video-slash"></i>
          <i className="fa-solid fa-closed-captioning"></i>
          <i className="fa-solid fa-face-smile"></i>
          <i className="fa-solid fa-hand"></i>
          <i className="fa-solid redWalaBackground fa-phone fa-rotate-by"></i>

        </div>

        <div className='otherIconsOfSettings'>
          <div className='divOfOtherIconsOfSettings'>
            <span>1</span>
            <i className="fa-solid fa-users"></i>
          </div>
          <div className='divOfOtherIconsOfSettings'>
            <span>3</span>
            <i className="fa-regular fa-message"></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Meet;