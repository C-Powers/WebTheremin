var delta;

var docHeight = document.body.clientHeight - document.body.clientHeight*0.2;

var MAKESOUND = false;

const maxHighFreq = 2093.0;
const step = 20; //pixels it takes to move one half step

document.getElementById("cmn-toggle-4").addEventListener("click", function(){
    MAKESOUND = !MAKESOUND;
});

document.querySelector("canvas").width = window.innerWidth;
document.querySelector("canvas").height =
          window.innerHeight - window.innerHeight*0.2;
