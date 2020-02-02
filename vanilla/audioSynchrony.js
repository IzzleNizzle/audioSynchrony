const $button = document.querySelector("button");
const context = new AudioContext();


function AudioSynchrony() {
    this.soundQueue = 0;
    this.globAudBuferr;
    this.stopped = true;

    const loadSoundFile = () => {
        // Fetch the sound file
        fetch(
            "https://raw.githubusercontent.com/IzzleNizzle/h3-power-timer/adding-reach/src/sounds/camoSpawned.m4a?token=AFJT5YDEW4ZZYE5R3PBI62S6HTKNY"
        )
            // Read it into memory as an arrayBuffer
            .then(response => response.arrayBuffer())
            // Turn it from mp3/aac/whatever into raw audio data
            .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                this.globAudBuferr = audioBuffer;
                $button.classList.remove("hidden");
            });
    };

    loadSoundFile();

    const mkSound = () => {
        const sound = context.createBufferSource();
        sound.buffer = this.globAudBuferr;
        sound.connect(context.destination);
        return sound;
    };

    const addSound = () => {
        this.soundQueue++;
        if (this.stopped) {
            this.stopped = false;
            play();
        }
    };

    const rmvSound = () => this.soundQueue--;

    // Play synchronously
    const play = () => {
        console.log("=================play - soundQueue===================");
        console.log(this.soundQueue);
        if (this.soundQueue > 0) {
            let tmpSound = mkSound();
            tmpSound.start();
            tmpSound.onended = () => {
                // Remove one count from queue, while preventing queue from going below 0
                this.soundQueue > 0 && rmvSound();
                play();
            };
        } else {
            this.stopped = true;
        }
    };

    return addSound

}

// 
export default AudioSynchrony