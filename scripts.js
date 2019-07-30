let renderArea = document.querySelector('.render-calculation');
let elements = document.querySelectorAll('.calculator div');
elements = Array.from(elements);
elements.shift();
let calculation = null;

console.log(elements);

elements.forEach( (element) => {
  element.addEventListener('click', (el) => {
    console.log(event.target.innerHTML);
  })
})
