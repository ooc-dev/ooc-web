<template> 
    <div id="stage" class="stage"></div>
</template>

<script>
import * as PIXI from "pixi.js";
import * as p2 from "p2"

export default {
  mounted () {
    this.$nextTick(() => {
    let world, sw, sh, renderer, stage;

    const fixedTimeStep = 1 / 150;
    const colorList = [
      0xffffff,
      0xff6022,
      0xffffff,
      0x18d3c5,
      0xffffff,
      0x8573ef
    ]
    let itemList = [];

function main () {
  if (window.innerWidth > 1040) {
	  sw = window.innerWidth;
  } else if (window.innerWidth > 768) {
    sw = 1040;
  } else {
    sw = window.innerWidth;
  }
  if (window.innerWidth > 768) {
    if (window.innerHeight > 770) {
      sh = (window.innerHeight - 70);
    } else {
      sh = 700;
    }
  } else {
    sh = (1324 / 750 * window.innerWidth)
  }
  
	renderer = new PIXI.CanvasRenderer({
  	width: sw,
    height: sh,
    autoResize: true,
    resolution: 2
  });
  renderer.backgroundColor = 0xf4de0f;
  document.getElementById('stage').appendChild(renderer.view);
  stage = new PIXI.Container();
  
  world = new p2.World({
  	gravity: [0, -9.82]
  });

  createwall(sw, sh);
  
  window.addEventListener('resize', resize);
    requestAnimationFrame(animate);
  }

  function animate(time) {
    requestAnimationFrame(animate);
    world.step(fixedTimeStep);
    render();
  }

  let n = 0;
  function render() {
    if (n === 30) {
      createBall();
      n = 0;
    } else {
      n++
    }
    let graphic;
    for (let i = itemList.length - 1; i >= 0; i--) {
      graphic = itemList[i];
      if (graphic.body.world && graphic.shape.type == p2.Shape.CIRCLE) {
        const x = p2ToPixiX(graphic.body.position[0]);
        const y = p2ToPixiY(graphic.body.position[1]);
        if (y > sh + 50) {
          world.removeBody(graphic.body);
          stage.removeChild(graphic);
          itemList.splice(i, 1);
          graphic.destroy();
        } else {
          graphic.x = x;
          graphic.y = y;
        }
      }
    }
    renderer.render(stage);
  }

  let ballNum = 0;
function createBall() {
  const randX = Math.random() * sw;
  const randY = -50;
  const xx = pixiToP2X(randX);
  const yy = pixiToP2Y(randY);
  let radius;
  if (window.innerWidth > 768) {
    radius = 8;
  } else {
    radius = 4;
  }
  const ballShape = new p2.Circle({radius:pixiToP2Value(radius)});
  const ballBody = new p2.Body({
  	mass:1.0, 
    position: [xx, yy]
  });
  const colorID = (ballNum % colorList.length);
  const color = colorList[colorID];
  ballBody.color = color;
  ballBody.addShape(ballShape);
  world.addBody(ballBody);
  
  const graphic = new PIXI.Graphics();
  graphic.beginFill(color);
  graphic.drawCircle(0, 0, radius);
  graphic.endFill();
  graphic.pivot.set(0.5, 0.5);
  graphic.x = randX;
  graphic.y = randY;
  stage.addChild(graphic);
  graphic.body = ballBody;
  graphic.shape = ballShape;
  itemList.push(graphic);
  ballNum++;
}

let body1, body2, body3;
function createwall (sw, sh) {
    // createWall(x, y, w, h, rotation)
  if (sw > 1040) {
    createWall1(sw / 2 - (140 + 22 + 70 - 2), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, Math.PI / 4);
    createWall2(sw / 2 - (70 - 2), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, -Math.PI / 4);
    createWall3(sw / 2 + (22 + 70 + 8), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, -Math.PI / 4);
  } else if (sw > 768) {
    createWall1(sw / 2 - (140 + 22 + 70 - 1.6), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, Math.PI / 4);
    createWall2(sw / 2 - (70 - 2.2), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, -Math.PI / 4);
    createWall3(sw / 2 + (22 + 70 + 8), ((sh / 2) - (140 / 2) - 70), (140 / 2), 20, -Math.PI / 4);
  } else {
    createWall1((((147 / 2) + 60) / 750 * sw), (((147 / 2) + 320) / 750 * sw), ((147 / 2) / 750 * sw), 20, Math.PI / 4);
    createWall2((((147 / 2) + 229.6) / 750 * sw), (((147 / 2) + 320) / 750 * sw), ((147 / 2) / 750 * sw), 20, -Math.PI / 4);
    createWall3((((147 / 2) + 407) / 750 * sw), (((147 / 2) + 320) / 750 * sw), ((147 / 2) / 750 * sw), 20, -Math.PI / 4);
  }
}

function createWall1(x, y, w, h, rotation) {
  body1 = new p2.Body({
    mass: 0
  });
	const p2X = pixiToP2X(x);
  const p2Y = pixiToP2Y(y);
  const p2W = pixiToP2Value(w);
  const p2H = pixiToP2Value(h);
  const shape = new p2.Circle({
    radius: (0.01 * w)
  });
  body1.addShape(shape);
  world.addBody(body1);
  body1.position = [p2X, p2Y];
  
  // var graphic = new PIXI.Graphics();
  // graphic.beginFill(0xff1111);
  // graphic.drawCircle(0, 0, w);
  // graphic.endFill();
  // graphic.pivot.set(0.5, 0.5);
  // graphic.x = x;
  // graphic.y = y;
  // graphic.rotation = rotation;
  // stage.addChild(graphic);
  // graphic.body = body1;
  // graphic.shape = shape;
}

function createWall2(x, y, w, h, rotation) {
  body2 = new p2.Body({
    mass: 0
  });
	const p2X = pixiToP2X(x);
  const p2Y = pixiToP2Y(y);
  const p2W = pixiToP2Value(w);
  const p2H = pixiToP2Value(h);
  const shape = new p2.Circle({
    radius: (0.01 * w)
  });
  body2.addShape(shape);
  world.addBody(body2);
  body2.position = [p2X, p2Y];
  
  // var graphic = new PIXI.Graphics();
  // graphic.beginFill(0xff1111);
  // graphic.drawCircle(0, 0, w);
  // graphic.endFill();
  // graphic.pivot.set(0.5, 0.5);
  // graphic.x = x;
  // graphic.y = y;
  // graphic.rotation = rotation;
  // stage.addChild(graphic);
  // graphic.body = body2;
  // graphic.shape = shape;
}
function createWall3(x, y, w, h, rotation) {
  body3 = new p2.Body({
    mass: 0
  });
	const p2X = pixiToP2X(x);
  const p2Y = pixiToP2Y(y);
  const p2W = pixiToP2Value(w);
  const p2H = pixiToP2Value(h);
  const vertices = [
    [-0.77,0],
    [-0.76,-0.1],
    [-0.75,-0.2],
    [-0.7,-0.3],
    [-0.65,-0.4],
    [-0.6,-0.45],
    [-0.5, -0.56],
    [-0.45, -0.59],
    [-0.3, -0.65],
    [-0.1, -0.7],
    [0, -0.7],
    [0.1, -0.68],
    [0.2, -0.64],
    [0.27, -0.62],
    [0.27,0.61],
    [0.2,0.63],
    [0.15,0.65],
    [0.1,0.67],
    [0.05,0.68],
    [-0.1,0.7],
    [-0.2,0.68],
    [-0.3,0.66],
    [-0.4,0.61],
    [-0.5,0.55],
    [-0.6,0.47],
    [-0.7,0.3],
    [-0.75,0.18],
    [-0.76,0.1],
    [-0.775,0.05],
    [-0.771,0.001]
    ];
  
  const graphic = new PIXI.Graphics();
  graphic.beginFill(0xff1111);
  let path = []
  for (let item in vertices) {
    path[item] = []
    if (window.innerWidth > 768) {
      path[item].push(vertices[item][0])
      path[item].push(vertices[item][1])
    } else {
      path[item].push((vertices[item][0] * 1.05 / 750) * window.innerWidth)
      path[item].push((vertices[item][1] * 1.05 / 750) * window.innerWidth)
    }
  }
  const shape = new p2.Convex({ vertices: path });
  body3.position = [p2X, p2Y];
  body3.addShape(shape);
  world.addBody(body3);

  // graphic.moveTo(path[0][0], path[0][1]);
  // for (let item in path) {
  //   var itemX = path[item][0] * 100;
  //   var itemY = path[item][1] * 100;
  //   if (item !== 0) {
  //     graphic.lineTo(itemX, -(itemY))
  //   }
  // }
  // graphic.closePath();
  // graphic.endFill();
  // graphic.x = x;
  // graphic.y = y;
  // stage.addChild(graphic);
  // graphic.body = body3;
  // graphic.shape = shape;
}

let resizeTimer
// ウインドウの横幅を保持
let currentWidth = window.innerWidth;
function resize(evt) {
  if (window.innerWidth > 1040) {
	  sw = window.innerWidth;
  } else if (window.innerWidth > 768) {
    sw = 1040;
  } else {
    sw = window.innerWidth;
  }
  if (window.innerWidth > 768) {
    if (window.innerHeight > 770) {
      sh = (window.innerHeight - 70);
    } else {
      sh = 700;
    }
  } else {
    sh = (1324 / 750 * window.innerWidth)
  }
  renderer.resize(sw, sh);
  if (currentWidth === window.innerWidth) {
    // ウインドウ横幅が変わっていないため処理をキャンセル。
    return;
  }
  currentWidth = window.innerWidth;
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(function () {
    stage.removeChildren()
    world.removeBody(body1)
    world.removeBody(body2)
    world.removeBody(body3)
    createwall(sw, sh);
  }, 100)
}

 // p2→pixi
function p2ToPixiX(p2X) {
  return p2X * 100;
}
function p2ToPixiY(p2Y) {
  return -(p2Y * 100);
}
function p2ToPixiValue(p2Value) {
  return p2Value * 100;
}

// pixi→p2
function pixiToP2X(pixiX) {
  return pixiX / 100;
}
function pixiToP2Y(pixiY) {
  return -(pixiY / 100);
}
function pixiToP2Value(pixiValue) {
  return pixiValue / 100;
}


main();



        })
    }
}
</script>

<style lang="scss" scoped>
.stage {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none; // canvasでのポインターイベント無効にする
}
</style>