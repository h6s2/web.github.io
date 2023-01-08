let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function addSlide(){
  const link=document.getElementById("image-link").value;
  const text=document.getElementById("image-text").value;

  const slide=document.createElement("div");
  const img=document.createElement("img");
  const paragraph=document.createElement("p");

  slide.classList.add("slide");
  slide.classList.add("fade");
  img.setAttribute("src",link);
  paragraph.innerHTML=text;
  paragraph.classList.add("slide-text");

  slide.appendChild(img);
  slide.appendChild(paragraph);
  document.getElementById("slider").appendChild(slide);

  let slides = document.getElementsByClassName("slide");
  showSlides(slideIndex=slides.length);
}


function deleteSlide(){
  const slides =document.getElementsByClassName("slide");
  for (let i=0;i<slides.length;i++){
    if (slides[i].style.display=="block"){
      slides[i].remove();
      break;
    }
  }
  showSlides(slideIndex+1);
}


function changeSize(){

  const slider=document.getElementById("slider");
  const height=document.getElementById("height-text").value;
  const width=document.getElementById("width-text").value;

  slider.style.width=width;
  slider.style.height=height;

}