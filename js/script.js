//Calc for random
class Calc {

  static rand(min, max, ease) {
    if(max === undefined) {
      max = min;
      min = 0;
    }
    let random = Math.random();
    if(ease) {
      random = ease(Math.random(), 0, 1, 1);
    }
    return random * (max - min) + min;
  }

  static randInt(min, max, ease) {
    if(max === undefined) {
      max = min;
      min = 0;
    }
    let random = Math.random();
    if(ease) {
      random = ease(Math.random(), 0, 1, 1);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static map(val, inputMin, inputMax, outputMin, outputMax) {
    return ((outputMax - outputMin) * ((val - inputMin) / (inputMax - inputMin))) + outputMin;
  }

  static clamp(val, min, max) {
    return Math.max(Math.min(val, max), min);
  }

  static roundToUpperInterval(value, interval) {
    if(value % interval === 0) {
      value += 0.0001;
    }
    return Math.ceil(value / interval) * interval;
  }

  static roundToLowerInterval(value, interval) {
    if(value % interval === 0) {
      value -= 0.0001;
    }
    return Math.floor(value / interval) * interval;
  }

  static roundToNearestInterval(value, interval) {
    return Math.round(value / interval) * interval;
  }

  static intersectSphere(a, b) {
    let distance = Math.sqrt(
      (a.x - b.x) * (a.x - b.x) +
      (a.y - b.y) * (a.y - b.y) +
      (a.z - b.z) * (a.z - b.z)
    );
    return distance < (a.radius + b.radius);
  }

  static getIndexFromCoords(x, y, w) {
    return x + (y * w);
  }

  static getCoordsFromIndex(i, w) {
    return {
      x: i % w,
      y: Math.floor(i / w)
    }
  }

}

//end Calc
// ----- setup ----- //
// var sceneSize = 24;
var isSpinning = true;
var notGrabbed = true;
var TAU = Zdog.TAU;
var hotpink = '#fe7cba';
var pink = '#fdc7df';
var blue = '#39b3fe';
var green = '#2bedba';
var yellow = '#ffdb00';
var black = '#171a1e';

var illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: true,
  zoom: 1.5,
 onDragStart: function() {
    isSpinning = false;
  },
});

// canvas 2
var squig = new Zdog.Illustration({
  element: '.squig',
  dragRotate: true,
  resize: true,
  zoom: 4.5,
  onDragStart: function() {
    notGrabbed = false;
  },
});

// canvas 3
var cube = new Zdog.Illustration({
  element: '.cube',
  dragRotate: true,
  resize: true,
  zoom: 31.5,
  onDragStart: function() {
    notGrabbed = false;
  },
});

new Zdog.Box({
  addTo: cube,
  width: 3,
  height: 3,
  depth: 5,
  translate: { x: 6, y: -2, z: -4 },
  color: pink,
  topFace: yellow,
  leftFace: hotpink,
  rightFace: hotpink,
  bottomFace: black,
  stroke: false,
  rotate: { y: TAU/-7.4, x: TAU/5.4, z: TAU/7 },
});

new Zdog.Polygon({
  addTo: cube,
  sides: 3,
  radius: 2.5,
  translate: { x: 2, y: -4, z: -4 },
  stroke: 1,
  color: blue,
});

new Zdog.Cone({
  addTo: squig,
  diameter: 35,
  length: 44,
  translate: { x: 13, y: 0, z: -4 },
  color: blue,
  backface: green,
  stroke: false,
  fill: true,
  rotate: { y: TAU/-7.4, x: TAU/5.4, z: TAU/7 },
});

new Zdog.Hemisphere({
  addTo: squig,
  diameter: 25,
  translate: { x: -38, y: 15, z: 6 },
  color: blue,
  backface: yellow,
  stroke: false,
  rotate: { y: TAU/-2.6, x: TAU/3 },
});

// Create gradient
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 100);
grd.addColorStop(0, pink);
grd.addColorStop(.3, hotpink);
grd.addColorStop(1, hotpink);

//x
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -3.2 },
    { x:  3.2 },
    { move: { y: -3.2 } },
    { y: 3.2 },
  ],
  scale: 5.25,
  stroke: 8,
  color: hotpink,
  translate: { x: -46, y: 0, z: 0 },
  rotate: { z: TAU/8 }, 
});

//x2
// new Zdog.Shape({
//   addTo: illo,
//   path: [
//     { x: -3.2 },
//     { x:  3.2 },
//     { move: { y: -3.2 } },
//     { y: 3.2 },
//   ],
//   scale: 5.25,
//   stroke: 11,
//   color: black,
//   translate: { x: -46, y: 0, z: 2 },
//   rotate: { z: TAU/8 }, 
// });

//+
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -2 },
    { x:  2 },
    { move: { y: -2 } },
    { y: 2 },
  ],
  scale: 5.25,
  stroke: 8,
  color: yellow,
});

// o
new Zdog.Ellipse({
  addTo: illo,
  diameter: 26,
  translate: { x: 50, y: 0, z: 0 },
  stroke: 10,
  color: green,
});

// o2
// new Zdog.Ellipse({
//   addTo: illo,
//   diameter: 26,
//   translate: { x: 50, y: 0, z: 2 },
//   stroke: 13,
//   color: black,
// });

/// -
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -10 }, // start at 1st point
    { x:  10 }, // line to 2nd point
  ],
  stroke: 8,
  color: pink,
  translate: { x: 0, y: 0, z: 18 },
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 43,
  quarters: 43,
  translate: { y: 0, z: 42.5 },
  rotate: { z: TAU/4 },
  closed: true,
  color: blue,
  stroke: 0.5,
  fill: true,
  // backface: false,
});


//~
// new Zdog.Shape({
//   addTo: illo,
//   path: [
//     { x: -6, y: -6 },   // start
//     { arc: [
//       { x:  2, y: -6 }, // corner
//       { x:  2, y:  2 }, // end point
//     ]},
//     { arc: [ // start next arc from last end point
//       { x:  2, y:  6 }, // corner
//       { x:  6, y:  6 }, // end point
//     ]},
//   ],
//   closed: false,
//   stroke: 6,
//   color: '#636'
// });

//ANIMATE
var ticker = 10;
var cycleCount = 660;

function animate() {
   if ( isSpinning ) {
    var progress = ticker / cycleCount;
    //easing
    var theta = Zdog.easeInOut( progress % 14, 13 ) * TAU;
    illo.rotate.y = theta * 1.5;
    //spin X axis and times
    illo.rotate.x = Math.sin( theta ) * 4;
    illo.rotate.z = Math.sin( theta ) * -.4;
    illo.zoom = theta * -.8;
  
  ticker++;
   }
  

  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

function animate2() {
if ( notGrabbed ) {
    var progress = ticker / cycleCount;
    //easing
    var theta = Zdog.easeInOut( progress % 14, 13 ) * TAU;    
    squig.rotate.y = theta * -1.2;
    squig.rotate.x = Math.sin( theta ) * -1.4;
    squig.rotate.z = Math.sin( theta ) * -1.4;
    // squig.zoom = TAU;
  
  ticker++;
   }

squig.updateRenderGraph();
requestAnimationFrame( animate2 );
}

var ticker2 = 10;
var cycleCount2 = 1660;

function animate3() {
if ( notGrabbed ) {
    var progress = ticker2 / cycleCount2;
    //easing
    var theta = Zdog.easeInOut( progress % 1, 3 ) * TAU;    
    cube.rotate.y = theta * 2;
    cube.rotate.x = Math.sin( theta ) * -.4;
    cube.rotate.z = Math.sin( theta ) * -.7;
    // squig.zoom = TAU;
  
  ticker2++;
   }

cube.updateRenderGraph();
requestAnimationFrame( animate3 );
}

animate();
animate2();
animate3();



// let starGroup;
// let stars = [];
// let starCount = 400;
// let starRange = 200;

// for(let i = 0; i < starCount; i++) {
//   stars.push({
// shape: new Zdog.Shape({
//   addTo: squig,
//   path: [
//     { x: -.6, y: -.6 },   // start
//     { arc: [
//       { x:  .2, y: -.6 }, // corner
//       { x:  .2, y:  .2 }, // end point
//     ]},
//     { arc: [ // start next arc from last end point
//       { x:  .2, y:  .6 }, // corner
//       { x:  .6, y:  .6 }, // end point
//     ]},
//   ],
//   translate: {
//         x: Calc.rand(-12, 10),
//         y: Calc.rand(-12, 10),
//         z: Calc.rand(0, 0),
//       },
//   closed: false,
//   stroke: Calc.rand(0.3, .5),
//   rotate: { z: Calc.rand(Zdog.TAU/6, Zdog.TAU/2 ) }, 
//   color: black,
//      })
//   });
// }