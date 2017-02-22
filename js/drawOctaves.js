(function() {
  'use strict';
  let cx = document.querySelector("canvas").getContext("2d");
  let octavesX = [];
  let anOctave = maxLowFreq;

  cx.beginPath();

  for (let i=0; i<5; i++) {
    octavesX.push(anOctave);

    cx.moveTo((maxLowFreq - anOctave), 0);
    console.log(anOctave)
    cx.lineTo(0, docHeight);

    anOctave = anOctave/2;
  }
  cx.stroke();

  // cx.moveTo(0,0);
  // cx.lineTo(0,docHeight);


})();
