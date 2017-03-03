(function() {
  'use strict';
  let cx = document.querySelector("canvas").getContext("2d");

  let anOctave = maxHighFreq;

  cx.beginPath();

  let coeff = 240 / Math.log10(2);
  for (let i=1; i<20; i*=2) {
    let lineX = coeff * Math.log10(2*i);
    if (lineX > window.innerWidth) continue;
    cx.moveTo(lineX, 0);
    cx.lineTo(lineX, docHeight);
  }

  cx.stroke();
})();
