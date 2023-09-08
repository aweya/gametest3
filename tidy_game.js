let arr = [];
let abst = 40; //distance between bubbles
let gröss = 10; //grid size
let space = 200;
let seconds = 0;

function ordnung2() {
  noCursor();
  createCanvas(800, 800);
  background(0);

  for (let i = 0; i < gröss; i++) {
    // create 2d array with bubbles
    arr[i] = [];
    for (let j = 0; j < gröss; j++) {
      arr[i][j] = new Bubble(
        space + i * abst,
        space + j * abst,
        random(50, 255)
      );
    }
  }
}

/*
function mouseMoved() {
  for (let i = 0; i < gröss; i++) {
    for (let j = 0; j < gröss; j++) {
      arr[i][j].clicked(mouseX, mouseY, i, j);
    }
  }
}
*/
function drawordnung2(){
   background(180);
  seconds = millis() / 1000;
  strokeWeight(4);

  for (let i = 0; i < gröss; i++) {
    for (let j = 0; j < gröss; j++) {
      //arr[i][j].move();
      arr[i][j].show();
      if(seconds>25){
      arr[i][j].vibrate((seconds-20)/5);
      }
    }
  }

  let an = 0;

  for (let i = 0; i < gröss; i++) {
    for (let j = 0; j < gröss; j++) {
      arr[i][j].move(an);
      an++;
    }
  }

  for (let i = 0; i < gröss; i++) {
    for (let j = 0; j < gröss; j++) {
      //arr[i][j].move();
      arr[i][j].check(i, j);
    }
  }
  let x = new Bubble(mouseX, mouseY, 255, 8);
  x.show();
}

class Bubble {
  constructor(x, y, c, r = 23) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
    this.cli = 0;
  }

  clicked(x, y, i, j) {
    //print(x,y);
    let d = dist(x, y, arr[i][j].x, arr[i][j].y);
    if (d < 23) {
      // print("hit")
      this.x = space + i * abst;
      this.y = space + j * abst;
      this.cli = 1;
      this.c = 0;
    }
  }

  move(an) {
    if (this.cli == 0) {
      this.x -= cos(an) * 2;
      this.y -= sin(an) * random(0, 2);
      an += 0.001;
    }
  }

  vibrate(t) {
    this.x += random(-t, t);
    this.y += random(-t, t);
  }

  check(i, j) {
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = space + i * abst;
      this.y = space + j * abst;
    }
  }

  read(i, j) {
    print(arr[i][j].this.x);
  }

  show() {
    fill(this.c);
    stroke(225);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
  }
}