import { a, b} from "./vars.js";

const numbers__field = document.querySelector('.numbers__field');

const numberBlocks = document.querySelectorAll('.number__block');

for (let i = 0; i < numberBlocks.length; i++) {
   const element = numberBlocks[i];
   element.addEventListener("click",(event)=>{
      console.log(event.target.classList);
      element.classList.add("green");
      const myTimeout = setTimeout(()=>{
         element.classList.remove("green");
      }, 1000);
      myTimeout();
   })
}



const bet__field = document.querySelector('.bet__field');

const spin__counter = document.querySelector('.spin__counter');

const number0__counter = document.querySelector('.number0__counter');
const number26__counter = document.querySelector('.number26__counter');
const number32__counter = document.querySelector('.number32__counter');

const sensor0 = document.querySelector('.sensor0');
const sensor26 = document.querySelector('.sensor26');
const sensor32 = document.querySelector('.sensor32');

let rouletteSpin = 0;
let counter0 = 0;
let counter26 = 0;
let counter32 = 0;

bet__field.addEventListener("click",(event)=>{
   rouletteSpin++;
   spin__counter.innerHTML = rouletteSpin;

   const number = +event.target.textContent;

  if (number === 0) {
   counter0++;
   number0__counter.innerHTML = counter0;
   sensor0.classList.add("red");
   sensor26.classList.remove("red");
   sensor32.classList.remove("red");
  };
  if (number === 26) {
   counter26++;
   number26__counter.innerHTML = counter26;
   sensor26.classList.add("red");
   sensor0.classList.remove("red");
   sensor32.classList.remove("red");
  };
  if (number === 32) {
   counter32++;
   number32__counter.innerHTML = counter32;
   sensor32.classList.add("red");
   sensor0.classList.remove("red");
   sensor26.classList.remove("red");
  }
})
