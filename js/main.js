
// ------------------------  GENERAL  -----------------------//

TweenLite.set(".main-header", {visibility: "visible"});
var tl = new TimelineMax();

tl.staggerFrom(".main-nav li", 0.9, {
  opacity: 0,
  cycle: {
    rotationX: [-90, 90],
    transformOrigin: ["50% top -100", "50% bottom 100"]
  }
}, 0.1);

// ------------------------  Info Page  -----------------------//

TweenLite.set(".secondary", {visibility: "visible"});
var tl = new TimelineMax();

tl.staggerFrom(".skills li", 0.6, {
  opacity: 0,
  cycle: {
    rotationX: [-90, 90],
    transformOrigin: ["50% top -100", "50% bottom 100"]
  }
}, 0.4);


TweenMax.staggerFrom(".contact", 2, {
  scale:0.5, opacity:0, delay:4, ease:Elastic.easeOut, force3D:true
}, 0.2);


// ------------------------  Home Page  -----------------------//

TweenMax.staggerFrom(".description", 2, {
  scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true
}, 0.2);

TweenMax.staggerFrom(".kuku", 2, {
  scale:0.5, opacity:0, delay:0.8, ease:Elastic.easeOut, force3D:true
}, 0.2);
