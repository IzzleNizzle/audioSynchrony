import React from 'react';
import ReactDOM from 'react-dom';
import useAudioSynchrony from './audioSynchrony';

const aud = useAudioSynchrony()
ReactDOM.render((
  <button
    onClick={aud}
  >Click to start</button>
), document.getElementById('root'));