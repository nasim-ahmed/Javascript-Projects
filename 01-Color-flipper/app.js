colors = ["green", "red", "#7785aa", "rgba(245, 40, 145, 0.8)"];

const button = document.getElementById("btn");

button.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[getRandomColor()]; 
    document.getElementsByClassName('color')[0].innerHTML = colors[getRandomColor()]; 
});

function getRandomColor(){
   return Math.floor(Math.random()*colors.length);
}