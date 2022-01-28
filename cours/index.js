// SELECTEURS
// document.querySelector('h4').style.background='blue';
// const baliseHTML = document.querySelector("h4"); 

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector("p")


questionContainer.addEventListener("click", () => {
   questionContainer.classList.toggle("question-clicked")
}
);

btn1.addEventListener("click", () => {
   response.classList.add("show-response");
   response.style.background = "green"
});

btn2.addEventListener("click", () => {
   response.classList.add("show-response");
   response.style.background = "red"
});
//------------------------------------------------------------------
// Mouse Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + 'px';
   mousemove.style.top = e.pageY + 'px';
})

window.addEventListener("mousedown", () => {
   mousemove.style.transform = "scale(2) translate(-25%,-25%)";
})
window.addEventListener("mouseup", () => {
   mousemove.style.transform = "scale(1) translate(-50%,-50%)";
})
questionContainer.addEventListener("mouseenter", () => {
   questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
   questionContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
   response.style.transform = "rotate(2deg)";
})

//------------------------------------------------------------------
//KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = (key) => {
   const audio = new Audio();
   audio.src = key + '.mp3';
   audio.play();
}
document.addEventListener('keypress', (e) => {
   key.textContent = e.key;
   if (e.key === "Enter")
      ring(e.key);
   keypressContainer.style.background = 'red';

})

//------------------------------------------------------------------------
// Scroll Event
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
      nav.style.top = '0px';
   }
   else {
      nav.style.top = '-150px';
   }
})
//-----------------------------------------------------------------------
//Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let language = "";
let pseudo = "";

inputName.addEventListener("input", (e) => {
   pseudo = e.target.value;
})

select.addEventListener("input", (e) => {
   language = e.target.value;
})
form.addEventListener("submit", (e) => {
   e.preventDefault();
   if (cgv.checked) {
      document.querySelector('form > div').innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
      `;
   }
})
//--------------------------------------------------------------------
// Load event
window.addEventListener("load",()=>{
   console.log("Document CHARGÉ !");
})
//--------------------------------------------------------------------
// ForEach

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
   box.addEventListener("click",(e)=>{
       let result = e.target;
   })
});
//--------------------------------------------------------------------
//onclick
// document.body.onclick = ()=>{
//    console.log('click');
// }

document.body.addEventListener("click",()=>{
   
})