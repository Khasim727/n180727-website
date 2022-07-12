var img=document.getElementById('image');
img.addEventListener('mouseover',myname);
img.addEventListener('mouseout',myname1);
function myname(){
    document.getElementById('name').style.visibility='visible';
    document.getElementById('name').style.textShadow='0 0 3px #FF0000, 0 0 5px #0000FF';
    document.getElementById('name').style.animation='Name 5s'
    document.getElementById('image').style.visibility='hidden';
    
}
function myname1(){
    document.getElementById('image').style.visibility='visible';  
    document.getElementById('name').style.visibility='hidden';
}
var Menu=document.getElementById('menu');
var Vmenu=document.getElementById('Vnav');
var Hmenu=document.getElementById('Hnav');
Menu.addEventListener('click',ShowVertical);
function ShowVertical(){
     Vmenu.style.display='block';
     Hmenu.style.display='none';
}
Vmenu.addEventListener('mouseover',displayVertical);
Vmenu.addEventListener('mouseout',HideVertical);
function displayVertical(){
    Hmenu.style.display='none';
    Vmenu.style.display='block';
}
function HideVertical(){
    Vmenu.style.display='none';
    Hmenu.style.display='block';
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
var Fac=document.getElementById('Fac');
Fac.addEventListener('click',faculty);
function faculty(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='block';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var stu=document.getElementById('Stu');
stu.addEventListener('click',student);
function student(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='block';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var home=document.getElementById('Home');
home.addEventListener('click',Home);
function Home(){
  document.getElementById('ldiv').style.display='block';
  document.getElementById('mdiv').style.display='block';
  document.getElementById('rdiv').style.display='block';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var Exam=document.getElementById('Exams');
Exam.addEventListener('click',Examdisplay);
function Examdisplay(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='block';
  document.getElementById('Map').style.display='none';
}
var Maps=document.getElementById('map');
Maps.addEventListener('click',MapDisplay);
function MapDisplay(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='block';
}
document.getElementById('myInput').addEventListener('keyup',search,false);
function search(){
  var j=document.getElementById('myUL').children;
  var text=document.getElementById('myInput').value.toLowerCase();
  for(let i=0;i<j.length;i++){
    var org=j[i].innerText.toLowerCase();
    if(org.indexOf(text)!=-1){
       j[i].style.display='inline-block';
    }else{
      j[i].style.display='none';
    }
  }
}


function scroll(){
  var j=document.getElementById('rdiv').children;
  var k=j[1];
  j[1].remove();
  document.getElementById('rdiv').append(k);
}
setInterval(scroll,1000);
/*Vertical Navigation Acess*/
var home=document.getElementById('Home1');
home.addEventListener('click',Home1);
function Home1(){
  document.getElementById('ldiv').style.display='block';
  document.getElementById('mdiv').style.display='block';
  document.getElementById('rdiv').style.display='block';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var Fac=document.getElementById('Fac1');
Fac.addEventListener('click',faculty1);
function faculty1(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='block';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var stu=document.getElementById('Stu1');
stu.addEventListener('click',student1);
function student1(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='block';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='none';
}
var Exam=document.getElementById('Exams1');
Exam.addEventListener('click',Examdisplay1);
function Examdisplay1(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='block';
  document.getElementById('Map').style.display='none';
}
var Maps=document.getElementById('map1');
Maps.addEventListener('click',MapDisplay1);
function MapDisplay1(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
  document.getElementById('Map').style.display='block';
}