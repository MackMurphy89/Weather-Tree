let fallingRains = [];
let fallingFlowers = [];
let movingClouds = [];
let leafRot;

let temperature = 0;
let weather = "";
let json;
let main;
let windSpeed;

let button1;
let button2;
let button3;
let button4;
let button5;
  //ifOR
  let ifOR=[];
  let orIF=0;

  //ran
  let ran = [];

  //RlRhLlLh
  let RlRhLlLh = [];

function preload() {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=5f8455199ec1cf43de09bf4a7d98d9b8";
  json = loadJSON(url);
}

function setup() {
  if(windowWidth < 1.5 * windowHeight) {
    createCanvas(windowWidth, (2/3)*windowWidth);
  }
  if(windowHeight < (2/3)*windowWidth) {
    createCanvas(1.5 * windowHeight, windowHeight);
  }
  
  temperature = json.main.temp;
  weather = json.weather[0].description;
  main = json.weather[0].main;
  windSpeed = json.wind.speed;
  
  button1 = createButton('Reset');
  button1.mousePressed(restart);
  
  button2 = createButton('Randomise Color');
  button2.mousePressed(ranColor);
  
  button3 = createButton('Randomise Shape');
  button3.mousePressed(ranShape);
  
  button4 = createButton('Randomise Wind');
  button4.mousePressed(ranWind);
  
  button5 = createButton('Flashing Color');
  button5.mousePressed(flaColor);
  float (fColor=0);
  
  restart();
}

function draw() {
  
  //print(RlRhLlLh.length);
  
  //COLOR ARRAY SET UP
  
  if (fColor>0) {
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flower
  float(flowerC=[random(255), random(255), random(255)]);
  
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  
  //trunk
  float(trunkC=[random(255), random(255), random(255)]);
  }
  
  scale(width/600, height/400);
  
  background(backC[0], backC[1], backC[2]);
  
  strokeWeight(0);
  textStyle(BOLD);
  text("City: New York", windowWidth/20, windowHeight*0.85);
  text("Current temperature: " + temperature + "°F", windowWidth/20, windowHeight*0.85 - 20);
  text("Forecast: " + weather, windowWidth/20, windowHeight*0.85 - 40);
  
//spawn rate for rain/snow
    let t = frameCount / 60;
  if(main == "Drizzle") {
    for (let i = 80; i < random(100); i++) {
      fallingRains.push(new fallingRain());
    }
  }else{
    for (let i = 50; i < random(100); i++) {
      fallingRains.push(new fallingRain());
  }
  }
      for (let rain of fallingRains) {
      rain.update(t);
      rain.display();
    }
  
//spawn rate for falling flowers
  for (let i = 99; i < random(100); i++) {
      fallingFlowers.push(new fallingFlower());
  }
      for (let flower of fallingFlowers) {
      flower.update(t);
      flower.display();
    }
  
//spawn rate for clouds
  for (let i = 399; i < random(400); i++) {
      movingClouds.push(new movingCloud());
  }
      for (let cloud of movingClouds) {
      cloud.update(t);
      cloud.display();
    }
  
  //leaf color
  fill(leafC[0], leafC[1], leafC[2]);
  
  angleMode(DEGREES);

  strokeCap(ROUND);
  
  var t1w=(trunk*0.1);
  var t2w=(trunk*0.2);
  var b1w=(trunk*0.5);
  var b2w=(trunk*0.6);
  var b3w=(trunk*0.7);
  var b4w=(trunk*0.8);
  var b5w=(trunk*0.9);
  
  //T1
  stroke(trunkC[0], trunkC[1], trunkC[2]);
  strokeWeight(trunk);
  segment(300, 400, trunkSlant1/Bs, 1, 1, 0, 0, 0, 0);
  //T2
  strokeWeight(trunk-t1w);
  segment(0, 0, trunkSlant2/Bs, 2, 2, 0, 0, 0, 0);
  //T3
  strokeWeight(trunk-t2w);
  segment(0, 0, trunkSlant3/Bs, 3, 3, 0, 0, 0, 0);

//LEFT
  push();
  //L
  strokeWeight(trunk-b1w);
  segment(0, 0, 0, 4, 4, 0, 0, 0, 0);
    push();
    //LL
    strokeWeight(trunk-b2w);
    segment(0, 0, -1, 5, 6, 4, 0, 0, 0);
      push();
      //LLL
      strokeWeight(trunk-b3w);
      segment(0, 0, -3, 6, 10, 4, 6, 0, 0);
        push();
        //LLLL
        strokeWeight(trunk-b4w);
        segment(0, 0, -7, 7, 18, 4, 6, 10, 0);
          push();
          //LLLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -15, 8, 34, 4, 6, 10, 18);
          pop();
          push();
          //LLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -14, 8, 35, 4, 6, 10, 18);
          pop();
        pop();
        push();
        //LLLR
        strokeWeight(trunk-b4w);
        segment(0, 0, -6, 7, 19, 4, 6, 10, 0);
          push();
          //LLLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -13, 8, 36, 4, 6, 10, 19);
          pop();
          push();
          //LLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -12, 8, 37, 4, 6, 10, 19);
          pop();  
        pop();
      pop();
      push();
      //LLR
      strokeWeight(trunk-b3w);
      segment(0, 0, -2, 6, 11, 4, 6, 0, 0);
        push();
        //LLRL
        strokeWeight(trunk-b4w);
        segment(0, 0, -5, 7, 20, 4, 6, 11, 0);
          push();
          //LLRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -11, 8, 38, 4, 6, 11, 20);
          pop();
          push();
          //LLRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -10, 8, 39, 4, 6, 11, 20);
          pop();
        pop();
        push();
        //LLRR
        strokeWeight(trunk-b4w);
        segment(0, 0, -4, 7, 21, 4, 6, 11, 0);
          push();
          //LLRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -9, 8, 40, 4, 6, 11, 21);
          pop();
          push();
          //LLRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -8, 8, 41, 4, 6, 11, 21);
          pop();
        pop();  
      pop();
    pop();
    push();
    //LR
    strokeWeight(trunk-b2w);
    segment(0, 0, 0, 5, 7, 4, 0, 0, 0);
      push();
      //LRL
      strokeWeight(trunk-b3w);
      segment(0, 0, -1, 6, 12, 4, 7, 0, 0);
        push();
        //LRLL
        strokeWeight(trunk-b4w);
        segment(0, 0, -3, 7, 22, 4, 7, 12, 0);
          push();
          //LRLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -7, 8, 42, 4, 7, 12, 22);
          pop();
          push();
          //LRLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -6, 8, 43, 4, 7, 12, 22);
          pop();
        pop();
        push();
        //LRLR
        strokeWeight(trunk-b4w);
        segment(0, 0, -2, 7, 23, 4, 7, 12, 0);
          push();
          //LRLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -5, 8, 44, 4, 7, 12, 23);
          pop();
          push();
          //LRLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, -4, 8, 45, 4, 7, 12, 23);
          pop();
        pop();  
      pop();
      push();
      //LRR
      strokeWeight(trunk-b3w);
      segment(0, 0, 0, 6, 13, 4, 7, 0, 0);
        push();
        //LRRL
        strokeWeight(trunk-b4w);
        segment(0, 0, -1, 7, 24, 4, 7, 13, 0);
          push();
          //LRRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, -3, 8, 46, 4, 7, 13, 24);
          pop();
          push();
          //LRRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, -2, 8, 47, 4, 7, 13, 24);
          pop();
        pop();
        push();
        //LRRR
        strokeWeight(trunk-b4w);
        segment(0, 0, 0, 7, 25, 4, 7, 13, 0);
          push();
          //LRRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, -1, 8, 48, 4, 7, 13, 25);
          pop();
          push();
          //LRRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, 0, 8, 49, 4, 7, 13, 25);
          pop();
        pop();  
      pop();
    pop();
  pop();
  
//RIGHT
  push();
  //R
  strokeWeight(trunk-b1w);
  segment(0, 0, 0, 4, 5, 0, 0, 0, 0);
    push();
    //RL
    strokeWeight(trunk-b2w);
    segment(0, 0, 0, 5, 8, 5, 0, 0, 0);
      push();
      //RLL
      strokeWeight(trunk-b3w);
      segment(0, 0, 0, 6, 14, 5, 8, 0, 0);
        push();
        //RLLL
        strokeWeight(trunk-b4w);
        segment(0, 0, 0, 7, 26, 5, 8, 14, 0);
          push();
          //RLLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, 0, 8, 50, 5, 8, 14, 26);
          pop();
          push();
          //RLLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, 1, 8, 51, 5, 8, 14, 26);
          pop();
        pop();
        push();
        //RLLR
        strokeWeight(trunk-b4w);
        segment(0, 0, 1, 7, 27, 5, 8, 14, 0);
          push();
          //RLLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, 2, 8, 52, 5, 8, 14, 27);
          pop();
          push();
          //RLLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, 3, 8, 53, 5, 8, 14, 27);
          pop();
        pop();  
      pop();
      push();
      //RLR
      strokeWeight(trunk-b3w);
      segment(0, 0, 1, 6, 15, 5, 8, 0, 0);
        push();
        //RLRL
        strokeWeight(trunk-b4w);
        segment(0, 0, 2, 7, 28, 5, 8, 15, 0);
          push();
          //RLRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, 4, 8, 54, 5, 8, 15, 28);
          pop();
          push();
          //RLRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, 5, 8, 55, 5, 8, 15, 28);
          pop();
        pop();
        push();
        //RLRR
        strokeWeight(trunk-b4w);
        segment(0, 0, 3, 7, 29, 5, 8, 15, 0);
          push();
          //RLRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, 6, 8, 56, 5, 8, 15, 29);
          pop();
          push();
          //RLRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, 7, 8, 57, 5, 8, 15, 29);
          pop();
        pop();  
      pop();
    pop();
    push();
    //RR
    strokeWeight(trunk-b2w);
    segment(0, 0, 1, 5, 9, 5, 0, 0, 0);
      push();
      //RRL
      strokeWeight(trunk-b3w);
      segment(0, 0, 2, 6, 16, 5, 9, 0, 0);
        push();
        //RRLL
        strokeWeight(trunk-b4w);
        segment(0, 0, 4, 7, 30, 5, 9, 16, 0);
          push();
          //RRLLL
          strokeWeight(trunk-b5w);
          segment(0, 0, 8, 8, 58, 5, 9, 16, 30);
          pop();
          push();
          //RRLLR
          strokeWeight(trunk-b5w);
          segment(0, 0, 9, 8, 59, 5, 9, 16, 30);
          pop();
        pop();
        push();
        //RRLR
        strokeWeight(trunk-b4w);
        segment(0, 0, 5, 7, 31, 5, 9, 16, 0);
          push();
          //RRLRL
          strokeWeight(trunk-b5w);
          segment(0, 0, 10, 8, 60, 5, 9, 16, 31);
          pop();
          push();
          //RRLRR
          strokeWeight(trunk-b5w);
          segment(0, 0, 11, 8, 61, 5, 9, 16, 31);
          pop();
        pop();  
      pop();
      push();
      //RRR
      strokeWeight(trunk-b3w);
      segment(0, 0, 3, 6, 17, 5, 9, 0, 0);
        push();
        //RRRL
        strokeWeight(trunk-b4w);
        segment(0, 0, 6, 7, 32, 5, 9, 17, 0);
          push();
          //RRRLL
          strokeWeight(trunk-b5w);
          segment(0, 0, 12, 8, 62, 5, 9, 17, 32);
          pop();
          push();
          //RRRLR
          strokeWeight(trunk-b5w);
          segment(0, 0, 13, 8, 63, 5, 9, 17, 32);
          pop();
        pop();
        push();
        //RRRR
        strokeWeight(trunk-b4w);
        segment(0, 0, 7, 7, 33, 5, 9, 17, 0);
          push();
          //RRRRL
          strokeWeight(trunk-b5w);
          segment(0, 0, 14, 8, 64, 5, 9, 17, 33);
          pop();
          push();
          //RRRRR
          strokeWeight(trunk-b5w);
          segment(0, 0, 15, 8, 65, 5, 9, 17, 33);
          pop();
        pop();  
      pop();
    pop();
  pop();
}

function segment(x, y, a, l, n, b1, b2, b3, b4) {
  translate(x, y);
  angleMode(DEGREES);
  rotate(RlRhLlLh[n-1]+(a*Bs));
  if(l>3) {
  line(0, 0, ran[n-1]+45, 0);
  translate(ran[n-1]+45, 0);
  }else{
  line(0, 0, ran[n-1]+45-20, 0);
  translate(ran[n-1]+45-20, 0);
  }
  
  push();
  if(ifOR[n-4]>1) {
  rotate((RlRhLlLh[n-1]+(a*Bs))-(ran[n-1]+ran[n-1]+10));
    leafRot = ((RlRhLlLh[n-1]+(a*Bs))-(ran[n-1]+ran[n-1]+10));
  }else{
  rotate((RlRhLlLh[n-1]+(a*Bs))+(ran[n-1]+ran[n-1]+10));
    leafRot = ((RlRhLlLh[n-1]+(a*Bs))+(ran[n-1]+ran[n-1]+10));
  }
  
  if(l>3) {
  ellipseMode(CORNER);
  noStroke();
  ellipse(-ellipseWidth/2, 0, ellipseWidth, ran[n-1]+28);
  
    if(l>6) {
        if(ifOR[n-4]>flowerChance) {
        ellipseMode(CENTER);
        fill(flowerC[0], flowerC[1], flowerC[2]);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        ellipse(0, 0, flowerWidth, flowerHeight);
        rotate(120);
        fill(flowerC[1], flowerC[2], flowerC[0]);
        circle(0, 0, 2);
        }else{}
    }else{}
  }else{}
  pop();
  if(mouseX>0) {
    rotate(-((RlRhLlLh[n-1]+(a*Bs))+((mouseX-300)/windStrength))); 
    }else{rotate(-(RlRhLlLh[n-1]+(a*Bs)));}
}

function restart() {
  ranColor();
  ranShape();
}

function ranColor() {
  //background
  float(backC=[random(180, 255), random(180, 255), random(180, 255)]);
  
  //flower
  float(flowerC=[random(255), random(255), random(255)]);
  
  //leaf
  float(leafC=[random(255), random(255), random(255)]);
  
  //trunk
  float(trunkC=[random(255), random(255), random(255)]);
  
  //flashing color
  fColor = 0;
}

function ranShape() {
  
  ran.splice(65);
  ifOR.splice(65);
  RlRhLlLh.splice(65);
  
  //flowers
  float(flowerHeight = random(15, 20));
  float(flowerWidth = random(5, 10));
  float(flowerChance=1);
 
  //leaf
  float(ellipseWidth=random(7, 9));
  
  //trunk
  float(trunk=random(12, 20));
  float(trunkSlant1 = random(250, 290));
  float(trunkSlant2 = trunkSlant1+random(-20, 20));
  float(trunkSlant3 = trunkSlant1+random(-20, 20));
  
  //branches
  float(Bs = random(3, 20));
  
  //Rlow, Rhigh, Llow, Lhigh
  var Rlow = 275;
  var Rhigh = 310;
  var Llow = 230;
  var Lhigh = 265;
  float(RlRhLlLh=[0, 0, 0]);
  //fills the RlRhLlLh array
  for(let i = 0; i < 31; i++) {
    RlRhLlLh.push(random(Llow, Lhigh));
    RlRhLlLh.push(random(Rlow, Rhigh));
  }

//FILLS THE ARRAYS
  for(let i = 0; i < 65; i++) {
    ran.push(random(1, 10));
    ifOR.push(random(orIF, 2));
  }
  
  //windStregnth (used for mouse interaction)
  float(windStrength=90);
}

function ranWind() {
  float(windStrength=random(0.000000001, 5));
}

function flaColor() {
  if (fColor<1) {
    fColor=1;
  }else{
    fColor=0;
  }
}

function movingCloud() {
  this.posX = -width/5
  this.posY = 0
  this.initialangle = random(0, 720);
  this.size = random(12, 22);
  this.radius = sqrt(random(pow(height / 2, 2)));
  this.update = function(time) {
    let ww = 1; 
    let angle = ww * time + this.initialangle;
    this.posY = this.radius * sin(angle);

    this.posX += pow(this.size, windSpeed/100);

    if (this.posX > width*1.2) {
      let index = movingClouds.indexOf(this);
      movingClouds.splice(index, 1);
    }
  }

  this.display = function() {
    if(main == "Thunderstorm") {
      strokeWeight(0);
      fill(random(100, 200));
      ellipse(this.posX, this.posY, 140, 85);
      ellipse(this.posX-57, this.posY+40, 118, 60);
      ellipse(this.posX+57, this.posY+40, 118, 60);
    }
    if(main == "Clouds") {
      strokeWeight(0);
      fill(255);
      ellipse(this.posX, this.posY, 140, 85);
      ellipse(this.posX-57, this.posY+40, 118, 60);
      ellipse(this.posX+57, this.posY+40, 118, 60);
    }
    if(main == "Mist" || main == "Smoke" || main == "Haze" || main == "Fog") {
      strokeWeight(0);
      fill(200, 60);
      ellipse(this.posX, this.posY, 140, 85);
      ellipse(this.posX-57, this.posY+40, 118, 60);
      ellipse(this.posX+57, this.posY+40, 118, 60);
    }
    if(main == "Dust" || main == "Sand") {
      strokeWeight(0);
      fill(191, 179, 113, 60);
      ellipse(this.posX, this.posY, 140, 85);
      ellipse(this.posX-57, this.posY+40, 118, 60);
      ellipse(this.posX+57, this.posY+40, 118, 60);
    }
    else{}
  }
}

function fallingRain() {
  this.posX = 0
  this.posY = 0
  this.initialangle = random(0, 720);
  this.size = random(12, 22);
  this.radius = sqrt(random(pow(width / 2, 2)));
  this.update = function(time) {
    let ww = 2; // angular speed
    if(main == "Snow") {
      ww = 30
    }
    let angle = ww * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);
    
    if (this.posY > height) {
      let index = fallingRains.indexOf(this);
      fallingRains.splice(index, 1);
    }
  }

  this.display = function() {
    if(main == "Rain" || main == "Thunderstorm" || main == "Drizzle") {
      strokeWeight(0);
      fill(random(0, 100), random(0, 125), random(200, 255));
      ellipse(this.posX, this.posY, 1, 10);
    }
    if(main == "Snow") {
      strokeWeight(0);
      fill(255);
      circle(this.posX, this.posY, 5);
    }
    else{}
  }
}

function fallingFlower() {
 push();
  this.posX = 0
  this.posY = 0
  this.initialangle = random(0, 720);//0//-leafRot;
  this.size = random(0, 3);
  this.radius = sqrt(random(pow(width/2.3, 2)));
  this.update = function(time) {
    let ww = 90; // angular speed
    let angle = ww * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = fallingFlowers.indexOf(this);
      fallingFlowers.splice(index, 1);
    }
  }

  this.display = function() {
    strokeWeight(0);
      ellipseMode(CENTER);
      angleMode(DEGREES);
        fill(flowerC[0], flowerC[1], flowerC[2]);
        let floW = flowerWidth/2;
        let floH = flowerHeight/2;
      beginShape();
        curveVertex(this.posX+(floW * cos(150)), this.posY+(floW * sin(150)));
        curveVertex(this.posX+(floH * cos(300)), this.posY-(floH * sin(300)));
        curveVertex(this.posX-(floW * sin(300)), this.posY-(floW * cos(300)));
        curveVertex(this.posX-(floH * sin(150)), this.posY+(floH * cos(150)));
        curveVertex(this.posX+(floW * cos(150)), this.posY+(floW * sin(150)));
        curveVertex(this.posX+(floH * cos(300)), this.posY-(floH * sin(300)));
        curveVertex(this.posX-(floW * sin(300)), this.posY-(floW * cos(300)));
      endShape();
      beginShape();
        curveVertex(this.posX+(floW * cos(30)), this.posY+(floW * sin(30)));
        curveVertex(this.posX+(floH * cos(60)), this.posY-(floH * sin(60)));
        curveVertex(this.posX-(floW * sin(60)), this.posY-(floW * cos(60)));
        curveVertex(this.posX-(floH * sin(30)), this.posY+(floH * cos(30)));
        curveVertex(this.posX+(floW * cos(30)), this.posY+(floW * sin(30)));
        curveVertex(this.posX+(floH * cos(60)), this.posY-(floH * sin(60)));
        curveVertex(this.posX-(floW * sin(60)), this.posY-(floW * cos(60)));
      endShape();
      beginShape();
        curveVertex(this.posX+(floW * cos(270)), this.posY+(floW * sin(270)));
        curveVertex(this.posX+(floH * cos(180)), this.posY-(floH * sin(180)));
        curveVertex(this.posX-(floW * sin(180)), this.posY-(floW * cos(180)));
        curveVertex(this.posX-(floH * sin(270)), this.posY+(floH * cos(270)));
        curveVertex(this.posX+(floW * cos(270)), this.posY+(floW * sin(270)));
        curveVertex(this.posX+(floH * cos(180)), this.posY-(floH * sin(180)));
        curveVertex(this.posX-(floW * sin(180)), this.posY-(floW * cos(180)));
      endShape();
        fill(flowerC[1], flowerC[2], flowerC[0]);
        circle(this.posX, this.posY, 2);
  }
  pop();
}