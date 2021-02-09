// Your code goes here
const nav =  document.querySelector('.nav')

nav.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
