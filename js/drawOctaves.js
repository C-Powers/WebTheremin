(function() {
  'use strict';
  let cx = document.querySelector("canvas").getContext("2d");

  let anOctave = maxLowFreq;

  cx.beginPath();

  let coeff = 240 / Math.log10(2);
  for (let i=1; i<20; i*=2) {
    let lineX = coeff * Math.log10(2*i);
    console.log("line x", lineX, i);
    cx.moveTo(lineX, 0);
    cx.lineTo(lineX, docHeight);
  }

//OK drawOctaves.js:12 line x 240 1
//OK drawOctaves.js:12 line x 480 2
//NO drawOctaves.js:12 line x 620.3910001730775 3
// drawOctaves.js:12 line x 719.9999999999999 4
// drawOctaves.js:12 line x 797.2627427729669 5
// drawOctaves.js:12 line x 860.3910001730775 6
// drawOctaves.js:12 line x 913.7651812938249 7
// drawOctaves.js:12 line x 960 8
// drawOctaves.js:12 line x 1000.7820003461549 9

  // for (let i=0; i<5; i++) {
  //   let lineX = Math.floor((maxLowFreq-anOctave));
  //   console.log(lineX/step);
  //   cx.moveTo(lineX, 0);
  //   cx.lineTo(lineX, docHeight);
  //
  //   anOctave = anOctave/2;
  // }
  cx.stroke();
})();
