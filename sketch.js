let segments = 15;
let radius = 50;

let vGutter = 85;
let maxShift = 15;

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(224);
  
  //10 è lo "sfasamento" delle colonne verso destra e delle righe verso il basso
  let columns = windowWidth / (radius - 10 + vGutter);
  let rows = windowHeight / (radius - 10 + vGutter);

  for (let i = 0; i < columns; i++) {
    for (let r = 0; r < rows; r++) {
      let xPos = i * (radius + vGutter) + random(-maxShift, maxShift);
      let yPos = r * (radius + vGutter) + random(-maxShift, maxShift);

      drawCircle(xPos, yPos);
    }
  }
}

function drawCircle(xPos, yPos) {
  for (let i = 0; i < segments; i++) {
    let startAngle = map(i, 0, segments, 0, TWO_PI);
    let endAngle = map(i + 1, 0, segments, 0, TWO_PI);

    let c1 = color(random(255), random(255), random(255));
    let c2 = color(random(255), random(255), random(255));

    drawSegment(xPos, yPos, startAngle, endAngle, c1, c2, radius);
  }

  noFill();
  stroke(255);
  strokeWeight(2);
  circle(xPos, yPos, radius * 2);
}

function drawSegment(xPos, yPos, startAngle, endAngle, c1, c2, radius) {
  for (let k = 0; k <= radius; k++) {
    let inter = map(k, 0, radius, 0, 1);
    let c = lerpColor(c1, c2, inter);

    stroke(c);
    strokeWeight(2);
    noFill();

    arc(xPos, yPos, k * 2, k * 2, startAngle, endAngle);
  }
}
