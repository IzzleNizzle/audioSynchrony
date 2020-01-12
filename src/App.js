import React from 'react'
import useAudioSynchrony from './useAudioSynchrony';


export default function App() {
  const aud = useAudioSynchrony()

  return (<button onClick={aud} >Queue up sound</button>)
}
