let canvas,height,width,ctx,x,y;
let pixels = 10;
let shift=1;
let direction=1;
let dist=0;
let id;
let arr=[];

function start(){
  arr.push("Start button pressed");
  document.getElementById("start-button").style.display="none";
  document.getElementById("stop-button").style.display="inline-block";
  document.getElementById("message").innerHTML="";
  pause=0;
  id=requestAnimationFrame(move);
}

function move(){
  id=requestAnimationFrame(move);
  if(direction==1){x-=shift;}
  if(direction==2){y+=shift;}
  if(direction==3){x+=shift;}
  if(direction==4){y-=shift;}

  ctx.clearRect(0,0,width,height);
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, 2 * Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();

  dist+=1;
  if (dist==pixels){
    dist=0;
    direction+=1;
    pixels+=1;
    shift+=0.2;
    if (direction==5){direction=1;};
    checkBorders();
  }
}

function checkBorders(){
  if (x<=16||y<=16||x>=width-16||y>=height-16){
    document.getElementById("message").innerHTML="Border!";
    document.getElementById("stop-button").style.display="none";
    document.getElementById("start-button").style.display="none";
    document.getElementById("reload-button").style.display="inline-block";
  }
  if (x<=-16||y<=-16||x>=width+16||y>=height+16){
    document.getElementById("message").innerHTML="Outside the border";
    reset();
  }
};

function reset(){
  document.getElementById("stop-button").style.display="none";
  document.getElementById("reload-button").style.display="none";
  document.getElementById("start-button").style.display="inline-block";
  x=width/2;
  y=height/2;
  ctx.clearRect(0,0,width,height);
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, 2 * Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();
  shift=1;
  direction=1;
  pixels=10;
  dist=0;
  cancelAnimationFrame(id);
  arr.push("Reset");
}

function play(){
  arr=[];
  if (ctx){return;};
  document.getElementById("work").style.display="flex";
  document.getElementById("start-button").style.display="inline-block";
  document.getElementById("close-button").style.display="inline-block";
  canvas=document.getElementById("canvas");
  height=canvas.getBoundingClientRect().height;
  width=canvas.getBoundingClientRect().width;
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");
  x=width/2;
  y=height/2;
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, 2 * Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();
};

function close_window(){
  reset();
  document.getElementById("work").style.display="none";
  document.getElementById("start-button").style.display="none";
  document.getElementById("stop-button").style.display="none";
  document.getElementById("close-button").style.display="none";
  document.getElementById("message").innerHTML="";
  ctx=null;
  arr.push("Close button pressed");
  let dd=document.getElementById("secondblock");
  for (let i=0;i<arr.length;i++){
    dd.appendChild(document.createElement('p')).innerHTML=arr[i];
  }
}
function stop_anim(){
  arr.push("Stop button pressed");
  document.getElementById("reload-button").style.display="none";
  document.getElementById("start-button").style.display="inline-block";
  document.getElementById("stop-button").style.display="none";
  cancelAnimationFrame(id);
}
function resizeCanvas(){
  ctx.clearRect(0,0,width,height);
  let w=width;
  let h=height;
  canvas=document.getElementById("canvas");
  height=canvas.getBoundingClientRect().height;
  width=canvas.getBoundingClientRect().width;
  canvas.width = width;
  canvas.height = height;
  x=x*(width/w);
  y=y*(height/h);
  ctx.beginPath();
  ctx.arc(x, y, 16, 0, 2 * Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();
}














