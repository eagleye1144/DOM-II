// Your code goes here
const nav =  document.querySelector('.nav');
const images = document.querySelectorAll('img');
const funBus = document.querySelectorAll('.intro p');
const allText = document.getElementsByTagName('p')
const buttonElements = document.querySelectorAll('.btn')
const logo = document.querySelector('.logo-heading');


nav.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);



    Array.from(funBus).forEach(elem => {
        elem.addEventListener('dblclick', event => {
            event.target.style.fontStyle = 'italic';
            event.stopPropagation();
        });
    });



    images.forEach(item => {
        item.addEventListener('mousemove', () => {
           item.style.opacity = '0.4';

           setTimeout(function() {
            item.style.opacity = "";
          }, 1000);
        }, false);

     });

     images.forEach(item => {
        item.addEventListener('click', () => {
           item.style.opacity = '0';

           setTimeout(function() {
            item.style.opacity = "";
          }, 1000);
        }, false);

     });



     Array.from(allText).forEach(paragraf => {
        document.addEventListener('scroll', event => {
            paragraf.style.textTransform = "upperCase";

        setTimeout(function() {
            paragraf.style.textTransform = "";
          }, 500);
        }, false);
    })

    Array.from(allText).forEach(paragraf => {
        document.addEventListener('keydown', event => {
         if(event.key === 'o' || event.key === 'O'){
            paragraf.style.color = "orange"
        }
        setTimeout(function() { //Makes the animation a little buggy, not sure why
            paragraf.style.color = "";
          }, 500);
        }, false);
    })

    document.addEventListener("keyup", event =>{
        if (event.key === "Escape"){
           alert('YOU. SHALL NOT. PASS!!!!')
        }
        });

    buttonElements.forEach(element => {element.addEventListener('click', function (event){
        alert('You have been signed up!')
    })
    }); 

    logo.addEventListener('mouseenter', event => {
        event.target.style.border = 'solid red .5rem'
    })

    logo.addEventListener('mouseleave', event => {
        event.target.style.border = 'none'
    }) 