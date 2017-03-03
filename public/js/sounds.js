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
    
    const CONTROLS_BORDER = document.getElementById('controls')
                                    .getBoundingClientRect()
                                    .top
    let gainMod = delta.y > CONTROLS_BORDER ? 1 : delta.y/CONTROLS_BORDER;

    oscillator.frequency.value = maxHighFreq * freqMod;
    if(MAKESOUND) {
      gain.gain.value = (1 - gainMod);
    } else {
      gain.gain.value = 0;
    }
  }

})()
