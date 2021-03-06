(function() {
  'use strict';
  let audioContext = new AudioContext();
  let oscillator = audioContext.createOscillator();
  let gain = audioContext.createGain();

  //const F1 = 2093.0;//440;
  setInterval(()=> variableFreq(), 100);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();

  function variableFreq() {
    let numerator = -delta.x
    let freqMod = Math.pow(2, numerator/(12*step));
    let gainMod = delta.y/docHeight;

    oscillator.frequency.value = maxHighFreq * freqMod;
    // console.log(freqMod);
    // console.log(oscillator.frequency.value);
    // console.log(delta);
    gain.gain.value = (1 - gainMod);
    //oscillator.stop();
    // oscillator.start();
  }
})()
