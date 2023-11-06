import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faWifi} from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faPause} from '@fortawesome/free-solid-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function App() {
  const [taskbarPosition, setTaskbarDisplay] = useState(false);
  const [slidersDisplay, setSlidersDisplay] = useState(false);

  const setBottomDisplay = () => {
    setTaskbarDisplay(false);
    toggleSlidersDisplay();
  };

  const setTopDisplay = () => {
    setTaskbarDisplay(true);
    toggleSlidersDisplay();
  };

  const toggleSlidersDisplay = () => {
    setSlidersDisplay(!slidersDisplay);
  };

  if (taskbarPosition == false && slidersDisplay == false){
    return (
      <div className="Header">
        <h1>Smart Mirror A Level</h1>
        <div className="camera" />
        <div className="mirror"> Good Morning Noah 
        </div>
        <div className="taskbar">
          <button onClick={toggleSlidersDisplay} style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faSliders} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faMessage} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faFaceSmile} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faSun} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faWifi} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faPowerOff} size = "3x"/></button>
        </div>
      </div>
      )
  }
  else if (taskbarPosition == true && slidersDisplay == false){
    return (
      <div className="Header">
        <h1>Smart Mirror A Level</h1>
        <div className="camera" />
        <div className="taskbar">
          <button onClick={toggleSlidersDisplay} style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faSliders} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faMessage} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faFaceSmile} size = "3x" /></button>
          <button><FontAwesomeIcon icon={faSun} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faWifi} size = "3x"/></button>
          <button><FontAwesomeIcon icon={faPowerOff} size = "3x"/></button>
        </div>
        <div className="mirror"> Good Morning Noah 
        </div>
      </div>
      )
  }
  else {
    return(
    <div className="Header">
      <h1>Smart Mirror A Level</h1>
      <div className="camera" />
      <div className="mirror"> Select Taskbar Position:
        <div className="music">
        <button onClick={setTopDisplay} style = {{marginTop: '50px', marginRight: '50px', marginLeft: '100px'}}><FontAwesomeIcon icon={faArrowUp} size = "xs" /></button>
        <button onClick={setBottomDisplay}><FontAwesomeIcon icon={faArrowDown} size = "2xs" /></button>
        </div>
        
      </div>
      <div className="taskbar">
        <button style = {{marginTop: '10px'}}><FontAwesomeIcon icon={faMusic} size = "3x" /></button>
        <button onClick={toggleSlidersDisplay}><FontAwesomeIcon icon={faHouse} size = "3x" /></button>
      </div>
    </div>
    )
  }
}

export default App
