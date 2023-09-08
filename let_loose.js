let arrl=[];
let abstl = 10;
let an = 0.01;
 let grössl = 100;  

function let_loosesetup() {
  noCursor();
  createCanvas(800, 800);
  
  for(let i =0;i<grössl;i++){
    arrl[i]=[];
    for(let j=0;j<grössl;j++){
      arrl[i][j]= new Bubblel(i*40,j*40,250);
    }
  }
}
/*
function mouseMoved(){
  for(let i =0;i<grössl/3;i++){
    for(let j=0;j<grössl/4;j++){
      arrl[i][j].clicked(mouseX,mouseY,i,j)
    }
  }
  }
*/

function let_loosedraw() {
  background(180);
  

  
  strokeWeight(4);
  //arrl[10][10].move();
  
  for(let i =0;i<grössl/3;i++){
    for(let j=0;j<grössl/4;j++){
     // arrl[i][j].move();
      arrl[i][j].show();
    }
  }
  
  
}

class Bubblel {
  constructor(x, y,c, r=23,cli=0) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
    this.cli = 0;
  }
  
  clicked(x,y,i,j){
    //print(x,y);
     let d = dist(x, y,arrl[i][j].x,arrl[i][j].y);
    if (d < 23) {
      arrl[i][j].move();
    }
    
  }

  move() {
    //if(this.cli==0){
    this.x -=cos(an)*30
    this.y -=sin(an)*random(5,20)
    an+=noise(an);
   // }
  }
  
  read(i,j){
    print(arrl[i][j].this.x)
    
  }

  show() {
    fill(this.c)
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
  }
}
