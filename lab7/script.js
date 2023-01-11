const elem = document.getElementById("circle");
let pixels=20;   //pixel shift

let x=pixels;
let y=0;
let time=400;
let pause=0;
let dist1,dist2,dist3,dist4;
let arr=[]

document.getElementById("circle").style.transitionDuration=`${(time*0.9)}ms`;

function play(){
  arr=[];
  document.getElementById("work").style.display="flex";
  document.getElementById("start-button").style.display="inline-block";
  document.getElementById("close-button").style.display="inline-block";
}

function start(){
  arr.push("Animation started");
  document.getElementById("start-button").style.display="none";
  document.getElementById("stop-button").style.display="inline-block";
  pause=0;
  dist1=document.getElementById("anim").getBoundingClientRect().top;
  dist2=document.getElementById("anim").getBoundingClientRect().bottom;
  dist3=document.getElementById("anim").getBoundingClientRect().left;
  dist4=document.getElementById("anim").getBoundingClientRect().right;
  left();
}
function left(){
  if (pause==1){return;}
  if (checkBorders("up")){return};
  elem.style.transform = `translate(${-x}px,${-y}px)`;
  y+=pixels;
  setTimeout(down,time);
}
function down(){
  if (pause==1){return;}
  if (checkBorders("left")){return};
  elem.style.transform = `translate(${-x}px,${y}px)`;
  x+=pixels;
  setTimeout(right,time);
}
function right(){
  if (pause==1){return;}
  if (checkBorders("down")){return};
  elem.style.transform = `translate(${x}px,${y}px)`;
  y+=pixels;
  setTimeout(up,time);
}
function up(){
  if (pause==1){return;}
  if (checkBorders("right")){return};
  elem.style.transform = `translate(${x}px,${-y}px)`;
  x+=pixels;
  setTimeout(left,time);
}

function checkBorders(direction){
  let d;
  switch(direction){
    case "left":
      d=elem.getBoundingClientRect().left-dist3; break;
    case "right":
      d=dist4-elem.getBoundingClientRect().right; break;
    case "up":
      d=elem.getBoundingClientRect().top-dist1; break;
    case "down":
      d=dist2-elem.getBoundingClientRect().bottom; break;
  }
  console.log(d);
  if(d<-32){
    document.getElementById("message").innerHTML="Outside the border";
    setTimeout(reset,1000);
    return true;
  }
  if (d<=0){
    document.getElementById("message").innerHTML="Border!";
    document.getElementById("stop-button").style.display="none";
    document.getElementById("start-button").style.display="none";
    document.getElementById("reload-button").style.display="inline-block";
  }
  return false;
}

function reset(){
  arr.push("Reset");
  pause=1;
  document.getElementById("stop-button").style.display="none";
  document.getElementById("reload-button").style.display="none";
  document.getElementById("start-button").style.display="inline-block";
  elem.style.transform = `translate(0px,0px)`;
  x=pixels;
  y=0;
}

function stop_anim(){
  arr.push("Stop button pressed");
  pause=1;
  document.getElementById("reload-button").style.display="none";
  document.getElementById("start-button").style.display="inline-block";
  document.getElementById("stop-button").style.display="none";
}

function close_window(){
  pause=1;
  document.getElementById("work").style.display="none";
  document.getElementById("start-button").style.display="none";
  document.getElementById("stop-button").style.display="none";
  document.getElementById("close-button").style.display="none";
  document.getElementById("message").innerHTML="";
  reset();
  arr.push("Close button pressed");
  let dd=document.getElementById("secondblock");
  for (let i=0;i<arr.length;i++){
    dd.appendChild(document.createElement('p')).innerHTML=arr[i];
  }
}
