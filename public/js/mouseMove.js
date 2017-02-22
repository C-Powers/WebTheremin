(function() {
  'use strict';

  let mousePos;
  let diff;
  document.onmousemove = handleMouseMove;

  setInterval(() => getMouseDiff(), 100);

  function handleMouseMove(event) {
    let dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event;
    mousePos = {
      x: event.clientX,
      y: event.clientY
    }
  };

  function getMouseDiff() {
    //let theraminPos = document.getElementsByClass('bar')[0]
    //let node = document.getElementById('bar');
    //let barX = node.offsetLeft + node.offsetWidth/2;
    let pos = mousePos;
    if (!pos) {
      delta = {
        x: 0,
        y: 0
      };
    } else {
      //let diffX = Math.abs(barX - pos.x);
      let diffX = pos.x
      let diffY = pos.y;
      delta = {
        x: diffX,
        y: diffY
      }; //deltaX is a global var
      // console.log(delta);
    }
  };
})();
