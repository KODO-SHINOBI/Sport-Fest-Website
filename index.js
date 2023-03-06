
// ----------------------FOR FLAG WAVING ANIMATION------------------------------

var a=$('.flag').width();
for(var i=0;i<a;i++){
  var flagElement=$("<div class='flag-element'>");
  flagElement.css('background-position',-i + "px 0");
  flagElement.css( 'animation-delay',i * 10 + 'ms');
  $('.flag').append(flagElement);
}

// -----------------------------------------------------------------------------


// ----------------------FOR ROTATING TROPHY------------------------------------

var picPaths = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png'];
var curPic = -1;
//preload the images for smooth animation
var imgO = new Array();
for(i=0; i < picPaths.length; i++) {
 imgO[i] = new Image();
 imgO[i].src = picPaths[i];
}

function swapImage() {
 curPic = (++curPic > picPaths.length-1)? 0 : curPic;
 imgCont.src = imgO[curPic].src;
 setTimeout(swapImage,300);
}

// -----------------------------------------------------------------------------


//------------------------------- FOR SHOWING TIME------------------------------

updateTime= function(day,hour,min,sec){

  // Accessing Time Elements From The HTML Document
  let dayElem= document.getElementById("day");
  let hourElem= document.getElementById("hour");
  let minElem= document.getElementById("minute");
  let secElem= document.getElementById("second");

  // Updating Values
  dayElem.innerText = 0;
  hourElem.innerText = 0;
  minElem.innerText = 0;
  secElem.innerText = 0;

}

calculateTime= function(){

  // Declaring Variables To Store Calculated Time
  let day=0;
  let hour=0;
  let min=0;
  let sec=0;

  // Creating Date Object
  let today= new Date();

  // Calculating date
  day= 27 - today.getDate();
  hour= 24 - today.getHours();
  min = 60 - today.getMinutes();
  sec= 60 - today.getSeconds();

  // console.log(day,hour,min,sec,today.getDay(),today.getHours(),today.getMinutes(),today.getSeconds());

  // Calling Function To Update Time In HTML Page
  updateTime(day,hour,min,sec);

}

// -----------------------------------------------------------------------------

// ------------------------- FOR CHANGING VIDEO --------------------------------

let vidElem = document.getElementById("video-src");
let videoPath = ["running.mp4","volleyball.mp4","cricket.mp4","badminton.mp4"]
let dotId=["vid-1","vid-2","vid-3","vid-4"];
let isClicked = 0;
let index=0;
let vidNum=0;

changeVideo= function(n){

  vidNum= n;
  index=vidNum-1;
  isClicked = 1;

  let oldDotElem=document.getElementsByClassName("active");
  let newDotElem=document.getElementById(dotId[vidNum]);

  oldDotElem[0].classList.remove("active");
  newDotElem.classList.add("active");

  playingVideo();

}

playingVideo = function(){

  index++;
  if(index > 3){
    index=0;
  }

  if(isClicked===1){
    isClicked=0;
    vidElem.src= videoPath[vidNum];
  }
  else{

    let oldDotElem=document.getElementsByClassName("active");
    let newDotElem=document.getElementById(dotId[index]);

    oldDotElem[0].classList.remove("active");
    newDotElem.classList.add("active");

    vidElem.src= videoPath[index];
  }


}

// -----------------------------------------------------------------------------


//-------------------------------- DRIVER CODE ---------------------------------

// FUNCTION CALLED ON WINDOWS ONLOAD
window.onload=function() {

  // For Rotating Trophy
  imgCont = document.getElementById('imgBanner');
  swapImage();
}

// For Time
window.setInterval(calculateTime,1000);

// FOR BACKGROUND VIDEO
window.setInterval(playingVideo,10000);
