let secondsmain = 0;
function setup() {
  //createCanvas(800, 800);
  ordnung2();
 let_loosesetup();
}

function mouseMoved() {
  if(secondsmain >10){
  for (let i = 0; i < gröss; i++) {
    for (let j = 0; j < gröss; j++) {
      arr[i][j].clicked(mouseX, mouseY, i, j);
    }
  }
  }
  if(secondsmain<10){
   for(let i =0;i<grössl/3;i++){
    for(let j=0;j<grössl/4;j++){
      arrl[i][j].clicked(mouseX,mouseY,i,j)
    }
  }
}
}

function draw() {
  secondsmain = millis() / 1000;
  
  if(secondsmain<10){
  let_loosedraw();
  }
  
  if(secondsmain>10){
     drawordnung2(); 
  }

  
}
