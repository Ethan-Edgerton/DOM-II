// Your code goes here


// Mouse Enter/Leave
const mouseEvent = document.querySelector(`.busImg`)
mouseEvent.addEventListener(`mouseenter`, () => {
    mouseEvent.style.transform = "scale(1.1)"
    mouseEvent.style.transition = "all 0.5s"
})

mouseEvent.addEventListener(`mouseleave`, () => {
    mouseEvent.style.transform = "scale(1)"
    mouseEvent.style.transition = "all 0.3s"
})



// Mouse Double Click
const mouseClickDbl = document.querySelector(`.main-navigation`)
mouseClickDbl.addEventListener(`dblclick`, (event) => {
    if (mouseClickDbl.style.backgroundColor === "grey") {
        mouseClickDbl.style.backgroundColor = "white";
        mouseClickDbl.style.color = `black`;
    } else {
        mouseClickDbl.style.backgroundColor = `grey`;
        mouseClickDbl.style.color = `white`;
    }
    event.stopPropagation();
})



// Mouse click dark mode
const darkMode = document.querySelector(`.darkMode`);
const bg = document.querySelector(`body`);
const textColor = document.querySelector("body");

darkMode.addEventListener(`click`, (event) => {
  if (bg.style.backgroundColor === `grey`) {
      bg.style.backgroundColor = `white`;
  } else {
      bg.style.backgroundColor = `grey`;
  }
 if (textColor.style.color === `white`) {
     textColor.style.color = `black`;
 } else {
     textColor.style.color = `white`;
 }
 event.stopPropagation();
})



//mouseup/down Works but hurts your eyes!
// const colorSwap = document.querySelector(`body`);
// colorSwap.addEventListener(`mousedown`, (event) => {
//     bg.style.backgroundColor = `darkred`;
//     event.stopPropagation();

// colorSwap.addEventListener(`mouseup`, (event) => {
//         bg.style.backgroundColor = `darkblue`;
//         event.stopPropagation();


//     setTimeout(function() {
//         event.target.style.backgroundColor = "white";
//       }, 700);
//     }, false);
// })



// Drag img
const dragImg = document.querySelectorAll(`img`);
dragImg.forEach((event) => {
    event.addEventListener(`drag`, () => {
        event.style.transform = "scale(1.5)";
        setTimeout(function() {
            event.style.transform = "scale(1)";
        }, 1500);
    }, false);
})


// Scale text/headers  uses preventDefault()
const scale = document.querySelectorAll(`p , h2`);
scale.forEach((event) => {
    event.addEventListener(`wheel`, (e) => {
        event.style.transform = "scale(1.2)";
        event.style.transition = "all 0.7s"
        e.preventDefault();
        setTimeout(function() {
            event.style.transform = "scale(1)";
        }, 4000);
    }, false);

})



//Select NOT WORKING super broken
// const textSelect = document.querySelectorAll(`p`);
// textSelect.forEach((event) => {
//     event.addEventListener(`select`, () => {
//         event.style.backgroundColor = `red`;
//     })
// })



// Keypress body color change
const key = document.querySelector(`body`)
    key.addEventListener(`keypress`, () =>{
        //key.style.color = `red`;
        randomBgColor();
    })

    function randomBgColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        console.log(bgColor);
        document.body.style.background = bgColor;
        key.style.backgroundColor = bgColor;
}


const contextClick = document.querySelector(`body`)
    contextClick.addEventListener(`contextmenu`,() => {
       if (contextClick.style.color === `black`) {
           contextClick.style.color = `purple`;
       } else {
           contextClick.style.color = `black`
       }
})