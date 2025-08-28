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

//canvas4 Snake
 var snakeIllo = new Zdog.Illustration({
            element: '.snake-canvas',
            dragRotate: true,
            resize: true,
            zoom: 2,
            onDragStart: function() {
              notGrabbed = false;
            },
        });

        new Zdog.Shape({
            addTo: snakeIllo,
            path: [
                { x: -60, y: 0 },
                { arc: [{ x: -30, y: -30 }, { x: 0, y: 0 }] },
                { arc: [{ x: 30, y: 30 }, { x: 60, y: 0 }] },
                { arc: [{ x: 90, y: -30 }, { x: 120, y: 0 }] }
            ],
            closed: false,
            stroke: 12,
            color: hotpink
        });

        // Add pill-shaped capsules in different directions
        var pillData = [
            { x: -50, y: -10, rotX: 0.3, rotZ: 0.2, color: blue },
            { x: -20, y: 15, rotX: -0.5, rotZ: 0.8, color: yellow },
            { x: 10, y: -20, rotX: 0.7, rotZ: -0.4, color: green },
            { x: 40, y: 25, rotX: -0.2, rotZ: 0.6, color: blue },
            { x: 70, y: -5, rotX: 0.9, rotZ: -0.1, color: yellow },
            { x: 95, y: 20, rotX: -0.6, rotZ: 0.4, color: green }
        ];

        pillData.forEach(pill => {
            new Zdog.Cylinder({
                addTo: snakeIllo,
                diameter: 8,
                length: 20,
                translate: { x: pill.x, y: pill.y, z: Math.random() * 10 - 5 },
                rotate: { x: pill.rotX, z: pill.rotZ },
                color: pill.color,
                stroke: false
            });
        });

        // Snake animation
       function animateSnake() {
        if (isSpinning) {
          var progress = ticker / cycleCount;
          var theta = Zdog.easeInOut(progress % 14, 13) * TAU;
          snakeIllo.rotate.y = theta * 0.6;
          snakeIllo.rotate.x = Math.sin(theta) * 1.5;
          snakeIllo.rotate.z = Math.sin(theta) * -0.2;
          ticker++;
        }
        snakeIllo.updateRenderGraph();
        requestAnimationFrame(animateSnake);
        }

        snakeIllo.onDragStart = function() {
        isSpinning = false;
        };

        animateSnake();

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


/// CLUSTER SHAPES

var clusterIllo = new Zdog.Illustration({
 element: '.cluster-canvas',
 dragRotate: true,
 resize: true,
 zoom: 2.5
});

var shapes = [
 { type: 'sphere', pos: [0, 0, 0], color: hotpink, size: 25, rotX: 0.3, rotY: -0.2, rotZ: 0.8 },
 { type: 'cube', pos: [-45, -25, 15], color: blue, size: 12, rotX: 0.7, rotY: 0.4, rotZ: -0.3 },
 { type: 'cylinder', pos: [40, -20, -15], color: yellow, size: 18, rotX: -0.5, rotY: 0.9, rotZ: 0.1 },
 { type: 'cone', pos: [-30, 30, 25], color: green, size: 22, rotX: 0.2, rotY: -0.6, rotZ: 0.5 },
 { type: 'sphere', pos: [50, 25, -25], color: pink, size: 16, rotX: -0.8, rotY: 0.3, rotZ: -0.1 },
 { type: 'cube', pos: [15, -40, 10], color: hotpink, size: 8, rotX: 0.6, rotY: -0.4, rotZ: 0.7 },
 { type: 'cylinder', pos: [-55, 10, -5], color: blue, size: 14, rotX: -0.3, rotY: 0.8, rotZ: -0.6 },
 { type: 'cone', pos: [25, 45, 20], color: yellow, size: 10, rotX: 0.9, rotY: -0.1, rotZ: 0.3 },
 { type: 'sphere', pos: [-20, -15, -30], color: green, size: 20, rotX: -0.2, rotY: 0.5, rotZ: -0.4 }
];

shapes.forEach(shape => {
 if(shape.type === 'sphere') {
   new Zdog.Hemisphere({
     addTo: clusterIllo,
     diameter: shape.size,
     translate: { x: shape.pos[0], y: shape.pos[1], z: shape.pos[2] },
     rotate: { x: shape.rotX, y: shape.rotY, z: shape.rotZ },
     color: shape.color,
     stroke: false
   });
 } else if(shape.type === 'cube') {
   new Zdog.Box({
     addTo: clusterIllo,
     width: shape.size, height: shape.size, depth: shape.size,
     translate: { x: shape.pos[0], y: shape.pos[1], z: shape.pos[2] },
     rotate: { x: shape.rotX, y: shape.rotY, z: shape.rotZ },
     color: shape.color,
     stroke: false
   });
 } else if(shape.type === 'cylinder') {
   new Zdog.Cylinder({
     addTo: clusterIllo,
     diameter: shape.size,
     length: shape.size * 1.5,
     translate: { x: shape.pos[0], y: shape.pos[1], z: shape.pos[2] },
     rotate: { x: shape.rotX, y: shape.rotY, z: shape.rotZ },
     color: shape.color,
     stroke: false
   });
 } else if(shape.type === 'cone') {
   new Zdog.Cone({
     addTo: clusterIllo,
     diameter: shape.size,
     length: shape.size * 1.2,
     translate: { x: shape.pos[0], y: shape.pos[1], z: shape.pos[2] },
     rotate: { x: shape.rotX, y: shape.rotY, z: shape.rotZ },
     color: shape.color,
     stroke: false
   });
 }
});

var ticker3 = 10;
var cycleCount3 = 1660;

function animateCluster() {
 if (notGrabbed) {
   var progress = ticker3 / cycleCount3;
   var theta = Zdog.easeInOut(progress % 1, 3) * TAU;
   clusterIllo.rotate.y = theta * 2;
   clusterIllo.rotate.x = Math.sin(theta) * -0.4;
   clusterIllo.rotate.z = Math.sin(theta) * -0.7;
   ticker3++;
 }
 clusterIllo.updateRenderGraph();
 requestAnimationFrame(animateCluster);
}

clusterIllo.onDragStart = function() {
 notGrabbed = false;
};

animateCluster();


// ------------------ Lightning Canvas ------------------ //

function initLightningCanvas() {
  const canvas = document.getElementById('lightning');
  if (!canvas) return;

var lightningIllo = new Zdog.Illustration({
  element: '.lightning-canvas',
  dragRotate: true,
  resize: true,
  zoom: .81,
  rotate: { y: -TAU/3 }
});

// ------------------ Flat Bolt Generator ------------------ //
function makeRandomBolt(options = {}) {
  const {
    steps = 5,
    stepSize = 6,
    zigzag = 60,
    stroke = 18,
    translate = { x: 0, y: 0, z: 0 },
    color = yellow
  } = options;

  let path = [];
  let x = 0, y = -100;
  path.push({ x, y });

  for (let i = 0; i < steps; i++) {
    // Alternate zig direction, but with randomness
    let dir = (i % 2 === 0 ? 1 : -1);
    x += dir * (zigzag * 0.5 + Math.random() * zigzag * 0.5);
    y += stepSize + Math.random() * stepSize * 0.5;
    path.push({ x, y });
  }

  // Base bolt
  new Zdog.Shape({
    addTo: lightningIllo,
    path,
    closed: false,
    stroke,
    color,
    translate,
    updateSort: true
  });

  // Pink overlays
  new Zdog.Shape({
    addTo: lightningIllo,
    path,
    closed: false,
    stroke: stroke / 2,
    color: hotpink,
    translate: { ...translate, z: 3 }
  });
  new Zdog.Shape({
    addTo: lightningIllo,
    path,
    closed: false,
    stroke: stroke / 2,
    color: hotpink,
    translate: { ...translate, z: -3 }
  });
}

// ------------------ Bolt Pattern Generator ------------------ //
let cols = 11;
let rows = 8;
let spacingX = 180;
let spacingY = 170;
let rowOffset = spacingX / 2; // how much to stagger every other row

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    let offsetX = (j % 2 === 0 ? 0 : rowOffset); // stagger every other row

    makeRandomBolt({
      steps: 4 + Math.floor(Math.random() * 4),   // random length
      stepSize: 10 + Math.random() * 10,
      zigzag: 50 + Math.random() * 30,
      stroke: 12 + Math.random() * 6,
      translate: {
        x: (i - (cols - 1) / 2) * spacingX + offsetX,
        y: (j - (rows - 1) / 2) * spacingY,
        z: 0   // flat plane
      }
    });
  }
}

// ------------------ Animation ------------------ //
function animateBolt() {
  lightningIllo.rotate.y = Math.sin(Date.now() / 1200) * 0.08; // subtle sway
  lightningIllo.updateRenderGraph();
  requestAnimationFrame(animateBolt);
}
animateBolt();
}