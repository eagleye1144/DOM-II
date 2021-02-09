// Your code goes here
const nav =  document.querySelector('.nav');
const images = document.querySelectorAll('img');
const funBus = document.querySelectorAll('.intro p');

nav.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
  
    Array.from(funBus).forEach(elem => {
        elem.addEventListener('dblclick', event => {
            event.target.style.fontStyle = 'italic';
        });
    });

    images.forEach(item => {
        item.addEventListener('mousemove', () => {
           item.style.opacity = '0.4';

           setTimeout(function() {
            item.style.opacity = "";
          }, 500);
        }, false);
        
     });