window.onload=function(){

const entities = [
  { area: '81 m2',
    city: 'Rostov-on-Don \n LCD admiral',
    time: '3.5 months',
     img: 'img/image1.png',

  },
  { area: '105 m2',
    city: 'Sochi \n Thieves',
    time: '4 months',
    img: 'img/image2.png',

  },
  { area: '93 m2',
    city: 'Rostov-on-Don \n Patriotic',
    time: '3 months',
    img: 'img/image3.png',

  }
]


const area = document.querySelector('.area')
const city = document.querySelector('.city')
const time = document.querySelector('.time')
const img = document.querySelector('.image')


const setEntity = (index) => {
  area.innerText = entities[index].area
  city.innerText = entities[index].city
  time.innerText = entities[index].time
  img.style.backgroundImage = `url(${entities[index].img})`

}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const circleFirst = document.querySelector('.circleFirst')
const circleSecond = document.querySelector('.circleSecond')
const circleThird = document.querySelector('.circleThird')
const aFirst = document.querySelector('.aFirst')
const aSecond = document.querySelector('.aSecond')
const aThird = document.querySelector('.aThird')
let currentIndex = 0
aFirst.addEventListener('click', () => {
setEntity(currentIndex = 0);
 currentIndex = 0;
  document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "1");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
  document.getElementById("rostov").style.color  = "#E3B873";
    document.getElementById("rostov").style.textDecoration = "underline";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
})
  aSecond.addEventListener('click', () => {
    setEntity(currentIndex = 1);
 currentIndex = 1;
       document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "1");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "#E3B873";
    document.getElementById("sochi").style.textDecoration = "underline";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";

  })
    aThird.addEventListener('click', () => {
      setEntity(currentIndex = 2);
 currentIndex = 2;
     document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "1");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "#E3B873";
    document.getElementById("rostovLast").style.textDecoration = "underline";

    })
circleFirst.addEventListener('click', () => {
setEntity(currentIndex = 0);
 currentIndex = 0;
  document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "1");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
  document.getElementById("rostov").style.color  = "#E3B873";
    document.getElementById("rostov").style.textDecoration = "underline";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
})
  circleSecond.addEventListener('click', () => {
    setEntity(currentIndex = 1);
 currentIndex = 1;
       document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "1");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "#E3B873";
    document.getElementById("sochi").style.textDecoration = "underline";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";

  })
    circleThird.addEventListener('click', () => {
      setEntity(currentIndex = 2);
 currentIndex = 2;
     document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "1");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "#E3B873";
    document.getElementById("rostovLast").style.textDecoration = "underline";

    })
prev.addEventListener('click', () => {
   if (currentIndex == 0){
    currentIndex=3;}
  setEntity(currentIndex - 1);
  
  currentIndex -= 1;
 
  switch (currentIndex) {
  case 0:
   document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "1");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
  document.getElementById("rostov").style.color  = "#E3B873";
    document.getElementById("rostov").style.textDecoration = "underline";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
    break;
  case 1:
   document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "1");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "#E3B873";
    document.getElementById("sochi").style.textDecoration = "underline";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
    break;
  case 2:
    document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "1");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "#E3B873";
    document.getElementById("rostovLast").style.textDecoration = "underline";
}
})
next.addEventListener('click', () => {
   if (currentIndex == 2){
    currentIndex=-1;}
  setEntity(currentIndex + 1);
  currentIndex += 1;
   switch (currentIndex) {
  case 0:
  document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "1");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
  document.getElementById("rostov").style.color  = "#E3B873";
    document.getElementById("rostov").style.textDecoration = "underline";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
    break;
  case 1:
 document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "1");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "0.3");
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.color  = "#E3B873";
    document.getElementById("sochi").style.textDecoration = "underline";
    document.getElementById("rostovLast").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostovLast").style.textDecoration = "none";
    break;
  case 2:
  document.getElementById("circleFirst").setAttribute("fill", "white");
  document.getElementById("circleFirst").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleSecond").setAttribute("fill", "white");
  document.getElementById("circleSecond").setAttribute("fill-opacity", "0.3");
  document.getElementById("circleThird").setAttribute("fill", "white");
   document.getElementById("circleThird").setAttribute("fill-opacity", "1");
 document.getElementById("rostov").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("rostov").style.textDecoration = "none";
    document.getElementById("sochi").style.color  = "rgba(255, 255, 255, 0.3)";
    document.getElementById("sochi").style.textDecoration = "none";
    document.getElementById("rostovLast").style.color  = "#E3B873";
    document.getElementById("rostovLast").style.textDecoration = "underline";

}

})

}