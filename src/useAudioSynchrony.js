import { useState, useEffect } from 'react'
import rockets40 from './sounds/rockets40.m4a'


export default function useAudioSynchrony() {

  const [stopped, setstopped] = useState(true)

  const [queueCount, setQueueCount] = useState(0)

  const incQueue = () => {
    setSoundArr(prevState => [...prevState, "14"])
    setQueueCount(oldState => oldState + 1)
    if (stopped) {
      setstopped(false)
      play()
    }
  }
  const decQueue =
    () => {
      soundArr.length > 0 && setSoundArr(oldState => {
        return (oldState > 0) ? oldState - 1 : 0
      })
    }

  const [soundArr, setSoundArr] = useState([])

  const play = () => {
    if (soundArr.length > 0) {
      createAudio().play()
    } else {
      setstopped(true)
    }
  }

  const createAudio = () => {
    let tmpSound = new Audio(rockets40)
    // tmpSound.play()
    tmpSound.onended = () => {
      console.log('onended');
      decQueue();
    };
    return tmpSound
  }

  // useEffect(() => {
  //   console.log("soundArr");
  //   console.log(soundArr);
  //   if (soundArr.length > 0) {
  //     setstopped(false)
  //   }
  // }, [soundArr])

  // useEffect(() => {
  //   console.log('==queueCount=useEffect=====');
  //   console.log(queueCount);
  //   console.log(stopped);
  //   console.log('=queueCount=useEffect======');
  //   console.log(' ');

  //   if (queueCount > 0) {
  //     if (stopped) {
  //       setstopped(false)
  // let tmpSound = new Audio(rockets40)
  // tmpSound.play()
  // tmpSound.onended = () => {
  //   console.log('onended');

  //   decQueue();

  //   // setstopped(true)
  // };
  // }
  //     // else {
  //     //   setstopped(true)
  //     // }
  //   }

  // }, [queueCount])



  // useEffect(() => {
  //   console.log('==stopped=useEffect=====');
  //   console.log(queueCount);
  //   console.log(stopped);
  //   console.log('=stopped=useEffect======');
  //   console.log(' ');
  //   // play()
  // }, [stopped])

  return incQueue
}
