// Given multiple audio files start at the same time,
// ensure one fires after another
// and a queue is kept for additional requests

let soundArray = 0
let soundFile
let globAudBuferr

let stopped = true

// The context is connected to the device speakers.
// You only need one of these per document.
const context = new AudioContext()
// Fetch the file
fetch(
  "https://raw.githubusercontent.com/IzzleNizzle/h3-power-timer/adding-reach/src/sounds/camoSpawned.m4a?token=AFJT5YDZI6AK6YZDOE4KAHC6DVPW4"
)
  // Read it into memory as an arrayBuffer
  .then(response => response.arrayBuffer())
  // Turn it from mp3/aac/whatever into raw audio data
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    const soundSource = context.createBufferSource()
    globAudBuferr = audioBuffer
    soundSource.buffer = audioBuffer;
    soundSource.connect(context.destination);
    soundFile = soundSource;
  });


// adding a sound
const addSound = () => {
  soundArray++;
  if (stopped) {
    stopped = false
    play()
  }
};


// Play synchronously
const play = () => {
  console.log('=================play - soundArray===================');
  console.log(soundArray);
  if (soundArray > 0) {
    let tmpSound = mkSound()
    tmpSound.start()
    tmpSound.onended = () => {
      let closure = soundArray
      console.log("onended");
      console.log(closure);
      if (soundArray > 0) {
        rmvSound();
      }
      play();
    };
  } else {
    stopped = true
  }
};

// Create new sound file
const mkSound = () => {
  const sound = context.createBufferSource()
  sound.buffer = globAudBuferr;
  sound.connect(context.destination);
  return sound
}

// deleting a sound
const rmvSound = () => soundArray--;


document.querySelector("button").addEventListener("click", () => {
  addSound()
});
