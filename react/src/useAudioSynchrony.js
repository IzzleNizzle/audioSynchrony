import React, { useState, useEffect } from 'react'
// Step 1. Download Audio file
import rockets40 from './sounds/rockets40.m4a'
// import rockets20 from './sounds/rockets20.m4a'
// const rockets40_ = new Audio(rockets40)
// const rockets20_ = new Audio(rockets20)

export default function useAudioSynchrony() {

  const [queueCount, setQueueCount] = useState(0)
  const incQueue = () => setQueueCount(oldState => ++oldState)
  const decQueue = () => setQueueCount(oldState => --oldState)

  const [stopped, setstopped] = useState(true)
  const triggerStopped = () => setstopped(oldState => !oldState)


  useEffect(() => {
    console.log('====================================');
    console.log('loaded');
    console.log('====================================');
    stopped && play()
  }, [queueCount])

  // Create new sound file
  const mkSound = () => new Audio(rockets40)

  // Play synchronously
  const play = () => {
    triggerStopped()
    console.log('================queueCount====================');
    console.log(queueCount);
    console.log('===============queueCount=====================');
    if (queueCount > 0) {
      let tmpSound = mkSound()
      tmpSound.play()
      tmpSound.onended = () => {
        if (queueCount > 0) {
          decQueue();
        }
        play();
      };
    } else {
      triggerStopped()
    }
  };

  return incQueue
}
