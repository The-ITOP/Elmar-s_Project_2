let shortArray = [];
let imgIndex = 0;
let img1X = 200;
let img1Y = 0;
let imgPlace = true;
let X = 0;
let rc = 0;
let gc = 0;
let bc = 0;
//let YAY = random(50,200);
let death = true;
let dislike = true;
let bigGText = true;

function preload() {
  shortArray[0] = loadImage("Sentinal.png");
  shortArray[1] = loadImage("Screenshot_20241031-133352.png");
  shortArray[2] = loadImage("Screenshot_20241031-133427.png");
  shortArray[3] = loadImage("Screenshot_20241031-133527.png");
  shortArray[4] = loadImage("Screenshot_20241031-133649.png");
  shortArray[5] = loadImage("Screenshot_20241031-133719.png");
  shortArray[6] = loadImage("Screenshot_20241031-133810.png");
  shortArray[7] = loadImage("Screenshot_20241031-134831.png");
  shortArray[8] = loadImage("Screenshot_20241031-134909.png");
  shortArray[9] = loadImage("Screenshot_20241031-134950.png");
  shortArray[10] = loadImage("Screenshot_20241031-135007.png");
  shortArray[11] = loadImage("Screenshot_20241031-135031.png");
  shortArray[12] = loadImage("Screenshot_20241031-135151.png");
  shortArray[13] = loadImage("Screenshot_20241031-135155.png");
  shortArray[14] = loadImage("Screenshot_20241031-133413.png");
}

function setup() {
  createCanvas(800, 800);
  let button = createButton("Scroll");
  button.parent("button-holder");
  button.mousePressed(scrollAnimation);
}

function draw() {
  background(220);
  push();
  fill(0);
  stroke(0);
  rect(0, 0, 800, 800);
  pop();
  image(shortArray[0], img1X, img1Y, 400, 800);
  image(shortArray[1], img1X, img1Y + 800, 400, 800);
  image(shortArray[2], img1X, img1Y + 1600, 400, 800);
  image(shortArray[3], img1X, img1Y + 2400, 400, 800);
  image(shortArray[4], img1X, img1Y + 3200, 400, 800);
  image(shortArray[5], img1X, img1Y + 4000, 400, 800);
  image(shortArray[6], img1X, img1Y + 4800, 400, 800);
  image(shortArray[7], img1X, img1Y + 5600, 400, 800);
  image(shortArray[8], img1X, img1Y + 6400, 400, 800);
  image(shortArray[9], img1X, img1Y + 7200, 400, 800);
  image(shortArray[10], img1X, img1Y + 8000, 400, 800);
  image(shortArray[11], img1X, img1Y + 8800, 400, 800);
  image(shortArray[12], img1X, img1Y + 9600, 400, 800);
  image(shortArray[13], img1X, img1Y + 10400, 400, 800);
  image(shortArray[14], img1X, img1Y + 11200, 400, 800);
  image(shortArray[0], img1X, img1Y + 12000, 400, 800);
  imgMove();

  push();
  fill(150);
  stroke(0);
  rect(300, 20, 200, 20);
  fill(255);
  rect(304, 23, 192, 14);
  textSize(18);
  text("0", 285, 23, 10);
  text("24", 508, 23, 10);
  pop();
  imgReset();
  barReset();
  timeBar();
  frame();
  likeButton();

  push();
  if (dislike) {
    dislikeButton();
  }

  if (mouseX > 605 && mouseX < 685) {
    if (mouseY > 745 && mouseY < 760) {
      dislike = false;
    } else {
      dislike = true;
    }
  } else {
    dislike = true;
  }
  pop();

  deathScrean();
}

//scroll animation code
function scrollAnimation() {
  imgPlace = false;
  X = X + random(1, 35);
  myFunction();
  myFunction2();
}

function imgMove() {
  if (!imgPlace) {
    img1Y = img1Y - 10;
  }

  if (img1Y % 800 == 0) {
    imgPlace = true;
  }
}

function imgReset() {
  if (img1Y < -11999) {
    img1Y = 0;
  }
}

//timer bar code
function timeBar() {
  push();
  stroke(0);
  fill(150);
  rect(305, 24, X, 12);
  pop();
}

function barReset() {
  if (X > 192) {
    X = 1;
    death = false;
  }
}

//dislike btton code
function dislikeButton() {
  push();
  rotate(0);
  textSize(10);
  noStroke();
  fill(100);
  rect(605, 745, 80, 15);
  fill(150);
  rect(607, 747, 76, 11);
  pop();
  fill(0);
  text("Dislike", 627, 748, 20);
}

//Like button code
function likeButton() {
  push();
  rotate(0);
  noStroke();
  fill(100);
  rect(605, 720, 80, 15);
  fill(150);
  rect(607, 722, 76, 11);
  pop();
  textSize(12);
  fill(0);
  text("Like", 634, 723, 20);
}

function likeText() {
  push();
  fill("yellow");
  stroke("yellow");
  textSize(80);
  translate(120, 20);
  rotate(26.7);
  text("YIPEEEEEEEEEEEEEE", 0, 0, 500);
  pop();
  push();
  fill("yellow");
  stroke("yellow");
  textSize(80);
  translate(720, 20);
  rotate(26.7);
  text("YIPEEEEEEEEEEEEEE", 0, 0, 500);
  pop();
}

function likePress() {
  var myVar = setInterval(likeText, 10);
  setTimeout(function () {
    clearInterval(myVar);
  }, 2500);
}

function mousePressed() {
  if (mouseX > 605 && mouseX < 685) {
    if (mouseY > 720 && mouseY < 735) {
      likePress();
    }
  }
}

//frame codes
function frame() {
  fill(rc, gc, bc);
  stroke(0);
  rect(0, 0, 200, 900);
  rect(600, 0, 200, 900);
  // rect(0,800,600,100);
}

function bgAni() {
  rc = random(10, 245);
  gc = random(10, 245);
  bc = random(10, 245);
}

function gTexts() {
  if (bigGText) {
    textSize(30);
    push();
    stroke("yellow");
    fill("yellow");
    text("YAYYYY", 50, 200, 100);
    pop();

    push();
    stroke("yellow");
    fill("yellow");
    translate(700, 100);
    rotate(14);
    textSize(80);
    text("AMAZIIIIING", 0, 0, 500);
    pop();

    push();
    stroke("yellow");
    fill("yellow");
    translate(20, 600);
    textSize(45);
    rotate(6);
    text("AGAIN", 0, 0, 100);
    text("AGAIN", 0, 50, 100);
    pop();
  }
}

function myFunction() {
  var myVar = setInterval(bgAni, 200);
  setTimeout(function () {
    clearInterval(myVar);
  }, 1500);
}

function myFunction2() {
  var meVar = setInterval(gTexts, 1);
  setTimeout(function () {
    clearInterval(meVar);
  }, 1500);
}

//death screen codes
function deathScrean() {
  if (!death) {
    push();
    fill(0);
    stroke(0);
    rect(0, 0, 800, 800);
    fill("yellow");
    stroke("yellow");
    textSize(30);
    text("there goes the day", 270, 300, 500);
    pop();

    push();
    fill("yellow");
    stroke("yellow");
    textSize(30);
    text("see you tomorrow", 270, 400, 500);
    pop();

    push();
    fill("yellow");
    stroke("yellow");
    push();
    textSize(20);
    text("press W to wake up", 300, 550, 500);
    pop();
    bigGText = false;
  }
}

function keyPressed() {
  if (key === "w") {
    if (!death) {
      death = true;
      bigGText = true;
    }
  }
}
