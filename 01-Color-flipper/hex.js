colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var color = "#";
    for (let i=0; i<6; i++){
        color += colors[getRandomIndex()];
    }
    document.body.style.backgroundColor = color
    document.getElementsByClassName("color")[0].innerHTML = color.toUpperCase();
});

function getRandomIndex(){
    return Math.floor(Math.random()*colors.length)
}