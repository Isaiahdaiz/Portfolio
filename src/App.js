import './App.css';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import React, {useState, useEffect} from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

function App() {
  return (
    <div class="bg_image">
      <Desktop/>
      <Taskbar/>
    </div>
  );
}

export default App;
