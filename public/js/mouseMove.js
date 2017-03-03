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
    let pos = mousePos;
    if (!pos) {
      delta = {
        x: 0,
        y: 0
      };
    } else {
      let diffX = pos.x
      let diffY = pos.y;
      delta = {
        x: diffX,
        y: diffY
      }; 
    }
  };
})();
