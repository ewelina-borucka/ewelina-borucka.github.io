// -----------------------------------------------------------------------//
// ------------------------------  TweenMax  ------------------------------//
// -----------------------------------------------------------------------//






// --------------------  Portfolio Page  -----------------------//

var tl = new TimelineMax({reapet: 1, reapetDelay: 1});
tl.staggerTo(".box", 1, {y: 10, ease: Bounce.easeOut}, 0.1);




// ------------------------  Info Page  -----------------------//

TweenLite.set(".secondary", {visibility: "visible"});
var tl = new TimelineMax();

tl.staggerFrom(".skills li", 0.9, {
  opacity: 0,
  cycle: {
    rotationX: [-90, 90],
    transformOrigin: ["50% top -100", "50% bottom 100"]
  }
}, 0.1);



// ------------------------  Home Page  -----------------------//
