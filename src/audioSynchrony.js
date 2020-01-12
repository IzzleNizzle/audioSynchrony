import React, { useState } from 'react'
// Step 1. Download Audio file
import rockets40 from './sounds/rockets40.m4a'
// import rockets20 from './sounds/rockets20.m4a'
// const rockets40_ = new Audio(rockets40)
// const rockets20_ = new Audio(rockets20)

export default function audioSynchrony() {

  const [queueCount, setQueueCount] = useState(0)
  const incQueue = () => setQueueCount(oldState => oldState++)
  const decQueue = () => setQueueCount(oldState => oldState--)

  // Create new sound file
  const mkSound = () => new Audio(rockets40)

  return () => {
    let s = mkSound()
    s.play()
    console.log('====================================');
    console.log('hmm');
    console.log('====================================');
  }
}
