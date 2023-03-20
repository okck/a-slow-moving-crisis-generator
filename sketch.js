let frame = document.getElementById('center');
let frameWidth = document.getElementById('frameWidth');
let frameHeight = document.getElementById('frameHeight');
frameWidth.addEventListener("input", changeSize);
frameHeight.addEventListener("input", changeSize);

let scale;
scale = 1;
// scale = 2;
scale = .5;

let rowSlider;
let columnSlider;

let cw = 1024 * scale;
let ch = 1024 * scale;

let rows;
let columns;
rows = 18;
columns = 12;

let y = 0;

let fr;
fr = 2;
fr = 1.5;
fr = 1;

let counter = 0;
let textCounter = 0;
let testColorCounter = 0;
let testBorderCounter = 0;

let colorArrayTest = [];
let textArrayTest = [];
let borderArrayTest = [];

colorArrayTest = new Array(rows);
for (let rowsX = 0; rowsX < rows; rowsX++) {
    colorArrayTest[rowsX] = new Array(columns);
}

textArrayTest = new Array(rows);
for (let rowsX = 0; rowsX < rows; rowsX++) {
  textArrayTest[rowsX] = new Array(columns);
}

// Text Objects
let nowHiring = {
  text: 'NOW HIRING',
  height: 100,
  fillTextSize: 40 * scale
}
let applyNow = {
  text: 'APPLY NOW',
  fillTextSize: 42 * scale
}
let teachersNeeded = {
  text: 'TEACHERS NEEDED',
  fillTextSize: 27 * scale
}
let fullTimeJob = {
  text: 'FULL-TIME JOB',
  fillTextSize: 35 * scale
}
let busDriver = {
  text: 'BUS DRIVER',
  fillTextSize: 44 * scale
}
let paramedic = {
  text: 'PARAMEDIC',
  fillTextSize: 43 * scale
}
let sanitationWorkers = {
  text: 'SANITATION WORKERS',
  fillTextSize: 42 * scale
}
let jobOpenings = {
  text: 'JOB OPENINGS',
  fillTextSize: 43 * scale
}
let helpWanted = {
  text: 'HELP WANTED',
  fillTextSize: 40 * scale
}

let textArray = [nowHiring, applyNow, teachersNeeded, fullTimeJob, busDriver, paramedic, sanitationWorkers, jobOpenings, helpWanted];

// FONTS
let medium;
let extrabold;
function preload() {
  medium = loadFont('assets/PPPangramSansRounded-Medium.otf');
  extrabold = loadFont('assets/PPPangramSansRounded-Extrabold.otf');
}
let colWidth = (cw - (24 * scale)) / 3 - (20 * scale);
console.log(colWidth);

function setup() {
  let cnv = createCanvas((roundTo(windowWidth, (colWidth+20*scale)))+20*scale + .75*scale + colWidth+20*scale, roundTo((windowHeight-32*scale), (120*scale))+15*scale+(120+32)*scale);
  cnv.id('canvas');

  frameRate(fr);
  textLeading(40 * scale);
  textAlign(CENTER, CENTER);

  if (Math.random() < 0.5) {
    textFont(medium);
  } else {
    textFont(extrabold);
  }

  textFont(medium);
  colorMode(HSB);
}

function draw() {
  background(0);

  push();
  if (testColorCounter % 1 == 0) {
    for (let rowsX = 0; rowsX < rows; rowsX++) {
        for (let colsX = 0; colsX < columns; colsX++) {
          colorArrayTest[rowsX][colsX] = roundTo(random(360), 30);
        }
    }
  }
  console.log(colorArrayTest);
  testColorCounter += 4;

  if (textCounter % 2 == 0) {
    for (let rowsX = 0; rowsX < rows; rowsX++) {
        for (let colsX = 0; colsX < columns; colsX++) {
          textArrayTest[rowsX][colsX] = random(textArray);
        }
    }
  }
  console.log(textArrayTest);
  textCounter += 1;

  // ////// MAIN LOOP ////////
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

        // //////// BORDER /////////
        fill(0);
        if (Math.random() < 0.5) {
          strokeWeight(1 * scale);
        } else {
          strokeWeight(2 * scale);
        }

        if (Math.random() < 0.75 && (i + j) % 2 == 0) {
          stroke(colorArrayTest[i][j], 60, 100);
          drawingContext.shadowBlur = 12 * scale;
          drawingContext.shadowColor = color(colorArrayTest[i][j] - 50, 60, 100);
        } else {
          stroke('black');
          drawingContext.shadowBlur = 12 * scale;
          drawingContext.shadowColor = color('black');
        }

        if (Math.random() < 0.5) {
          setLineDash([0, 0]);
        } else {
          setLineDash([7 * scale, 5 * scale]);
        }

        if (Math.random() < 0.5) {
          rect(20*scale + (colWidth+20 *scale) * j, y+32 * scale+i*120 * scale, colWidth, textArray[0].height * scale, 10 * scale, 10 * scale, 10 * scale, 10 * scale);
        } else {
          rect(20*scale + (colWidth+20*scale) * j, y+32*scale+i*120*scale, colWidth, textArray[0].height * scale, 50 * scale, 50 * scale, 50 * scale, 50 * scale);
        }
      // //////// END BORDER /////////

      // ///////// TEXT //////////
      let randomDimVal = random(100);
      let randomDim = Math.random();
      setLineDash([0, 0]);
      if (randomDim < 0.66) {
        // text shadow
        drawingContext.shadowBlur = 32 * scale;
        drawingContext.shadowColor = color(colorArrayTest[i][j] - 50, 60, 100 - randomDimVal);
        // text fill + stroke
        fill(colorArrayTest[i][j], 40, 100 - randomDimVal);
        stroke(colorArrayTest[i][j], 40, 100 - randomDimVal);
      } else {
        // text shadow
        drawingContext.shadowBlur = 32 * scale;
        drawingContext.shadowColor = color(colorArrayTest[i][j] - 50, 60, 100);
        // text fill + stroke
        fill(colorArrayTest[i][j], 40, 100);
        fill(colorArrayTest[i][j], 42, 100);
        fill(colorArrayTest[i][j], 45, 100);
        fill(colorArrayTest[i][j], 50, 100);

        stroke(colorArrayTest[i][j], 40, 100);
      }

      stroke(colorArrayTest[i][j], 40, 100);
      textSize(textArrayTest[i][j].fillTextSize);
      text(textArrayTest[i][j].text, 20*scale + (colWidth+20*scale) * j, y+32*scale+i*120*scale, colWidth, textArray[0].height * scale);
    }
  }
  pop();
}

// dashed lines
function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function roundTo(value, x) {
	return round(value/x) * x;
}

function changeSize(e) {
  frame.style.clipPath = `polygon(0% 0%, 0% 100%, ${frameWidth.value}% 100%, ${frameWidth.value}% ${frameHeight.value}%, ${100 - frameWidth.value}% ${frameHeight.value}%, ${100 - frameWidth.value}% ${100-frameHeight.value}%, ${frameWidth.value}% ${100-frameHeight.value}%, ${frameWidth.value}% 100%, 100% 100%, 100% 0%)`;
}