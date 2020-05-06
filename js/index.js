// Your code goes here

//1. Change image to a different image with click
const changeImg = document.querySelector('img');
changeImg.addEventListener("click", () => {
  if (changeImg.src != "/img/funner-bus.jpg") {
    changeImg.src = "/img/funner-bus.jpg";
  }
})

//2. change image back with double click
changeImg.addEventListener("dblclick", () => {
  if (changeImg.src != "/img/fun-bus.jpg") {
    changeImg.src = "/img/fun-bus.jpg";
  }
});

//3. change anchor tag color on mouse-hover
let hover = document.querySelector('.nav');
hover.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange';

  // reset the color after a short delay
  setTimeout(function () {
    event.target.style.color = "";
  }, 1000);
}, false);

//4. resize
// const images = document.querySelector('#sand-bus')
// images.src = siteContent['sand-bus-src'];
// images.addEventListener('resize', () => {
//   images.src = "/img/fun-bus.jpg";
// })

// images.addEventListener("mouseleave", (event) => {
//   event.target.style.transform = "scale(1)"
// })




//5. change to dark mode with keydown
const background = document.querySelector('*'); //shift  or *
const header = document.querySelector('.main-navigation')
const footer = document.querySelector('.footer')
document.addEventListener('keydown', (event) => {
  if (background.style.backgroundColor != 'grey') {
    background.style.backgroundColor = 'grey';
    background.style.color = 'whitesmoke';
    header.style.backgroundColor = 'grey';
    header.style.color = 'whitesmoke';
    footer.style.backgroundColor = 'grey';
    footer.style.color = 'whitesmoke';
  }
})

//6. change back to light mode with keypress
document.addEventListener('keypress', (event) => { //shift  or *
  if (background.style.backgroundColor != 'white') {
    background.style.backgroundColor = 'white';
    background.style.color = 'grey';
    header.style.backgroundColor = 'white';
    header.style.color = 'grey';
    footer.style.backgroundColor = 'white';
    footer.style.color = 'grey';
  }
})

//7. change text color when mouse pressed down
const changeText = document.querySelectorAll('p');
document.addEventListener('mousedown', (event) => {
  changeText.forEach(item => item.style.color = 'purple')
})

//8. change text color back with mouseup
document.addEventListener('mouseup', (event) => {
  changeText.forEach(item => item.style.color = 'red')
})

//9. scroll
window.addEventListener('scroll', (event) => {
  background.style.backgroundColor = 'pink';
  header.style.backgroundColor = 'lightblue';
  footer.style.backgroundColor = 'purple'
})

//10. flip cards with gsap
const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
  gsap.to('.intro', {
    duration: 1,
    rotateY: 180,
    ease: "elastic(1, 0.75)"
  })
  event.stopPropagation();
})



const allimg = document.querySelectorAll("img").forEach(el => {
  el.addEventListener("dblclick", () => {
    gsap.to(el, {
      duration: 1,
      rotateX: 180,
      ease: "elastic(1, 0.75)"
    })
  })
})