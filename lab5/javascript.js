//1
let a=document.getElementById("header-text").textContent;
let b=document.getElementById("footer-text").textContent;
document.getElementById("header-text").innerHTML=b;
document.getElementById("footer-text").innerHTML=a;


//2
a=10;
b=5;
let c=a*b;
const par=document.createElement("p");
const text=document.createTextNode("The area of the rectangle is " + c);
par.appendChild(text);
par.classList.add("fifth-block-text")
document.getElementById("fifth").appendChild(par);


//3
function MinNumberCount(){
  arr=document.getElementById("array").value.split(" ");
  let r=Math.min.apply(null, arr);
  let k=0;
  for (let i=0;i<arr.length;i++){
    if(arr[i]==r){
      k++;
    }
  }
  document.getElementById("p1").innerHTML="Min number: "+r; 
  document.getElementById("p2").innerHTML="Count: "+k; 

  document.cookie='Min number='+r;
  document.cookie='Count='+k;
}
modal = document.getElementById("modal");
openModal = document.getElementById("solve-button");
closeModal = document.getElementById("close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

mod = document.getElementById("modal1");
document.getElementById("p3").innerHTML=document.cookie;

function cookies(){
  if (getCookie("usecookies")!=""){
    return;
  }
  /* if (document.cookie!=""){
    mod.showModal();
  }*/
  mod.showModal();
  save = document.getElementById("save-button");
  deletec = document.getElementById("delete-button");

  save.addEventListener("click", () => {
    document.cookie="usecookies=true";
    mod.close();
  });
  
  
  deletec.addEventListener("click", () => {

    var allCookies = document.cookie.split(';');  

    for (var i = 0; i < allCookies.length; i++){
      document.cookie = allCookies[i] + "=;expires="+ new Date(0).toUTCString();
    }
    document.cookie='usecookies=false';
    mod.close();
  });
  
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


//4
function checkboxx(){
  if (document.getElementById("checkbox").checked){
    document.getElementById("third-block").style.fontFamily="cursive";
    localStorage.setItem("cursive","true");
  }
  else{
    document.getElementById("third-block").style.fontFamily="Arial";
    localStorage.setItem("cursive","false");
  }
}
function local(){
  if(localStorage.getItem("cursive")=="true"){
    document.getElementById("third-block").style.fontFamily="cursive";
    document.getElementById("checkbox").checked=true;
  }
}


//5

function setForms(){
  const inp1 = document.createElement("input");
  const inp2 = document.createElement("input");
  const inp3 = document.createElement("input");
  const button1=document.createElement("button");

  inp1.setAttribute("placeholder","tag");
  inp2.setAttribute("placeholder","property");
  inp3.setAttribute("placeholder","value");
  button1.innerHTML="Add";
  inp1.setAttribute("id","input_1");
  inp2.setAttribute("id","input_2");
  inp3.setAttribute("id","input_3");
  button1.setAttribute("id","add-button");

  button1.addEventListener("click", () => {
    addStyle();
  });


  document.getElementById("fifth").appendChild(inp1);
  document.getElementById("fifth").appendChild(inp2);
  document.getElementById("fifth").appendChild(inp3);
  document.getElementById("fifth").appendChild(button1);
}

function addStyle(){
  const tag1=document.getElementById("input_1").value;
  const style1=document.getElementById("input_2").value;
  const value1=document.getElementById("input_3").value;

  let list = document.getElementsByTagName(tag1);
  let originalvalue=new Array();



 for (let i=0;i<list.length;i++){

    coms=window.getComputedStyle(list[i]);
    originalvalue.push(coms.getPropertyValue(style1));
    list[i].style.setProperty(style1, value1);
   
  }

  let button2=document.createElement("button");
  button2.innerHTML=tag1;
  button2.addEventListener("click", () => {
    deleteStyle(button2,originalvalue,style1,list.length,list);
  });

  document.getElementById("second-block").appendChild(button2);
}

function deleteStyle(button,originalvalue,style1,n,list){
  for (let i=0;i<n;i++){
    list[i].style.setProperty(style1, originalvalue[i]);
  }
  button.remove();
}