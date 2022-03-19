const reviews = [{
    id: 1, 
    name: "Jason Bourne", 
    job: "Lawyer", 
    img_url: "https://img.zeit.de/kultur/film/2016-08/jason-bourne-matt-damon/wide__450x253__mobile__scale_2",
    text: "I saw one of these in Libya and I bought one.My co-worker Linnie has one of these. He says it looks wide. The box this comes in is 4 yard by 5 inch and weights 12 pound!My Shih-Tzu loves to play with it."
 }, {
    id: 2, 
    name: "Jessica Smith", 
    job: "Architect", 
    img_url: "https://image.gala.de/22438512/t/DK/v4/w1440/r1.7778/-/jessica-paszka-schwangerschaft.jpg",
    text: "My co-worker Erick has one of these. He says it looks fluffy.this Netflix is slurpee.It only works when I'm Niger.heard about this on wonky radio, decided to give it a try.The box this comes in is 3 kilometer by 5 inch and weights 13 ton.My dog loves to play with it."
 }, {
    id: 3, 
    name: "Alan Turing", 
    job: "Mathmatician", 
    img_url: "https://i0.gmx.at/image/938/34260938,pd=1,f=size-l/alan-walker.jpg",
    text: "The box this comes in is 5 inch by 6 mile and weights 15 ton!!one of my hobbies is toy collecting. and when i'm collecting toys this works great.I saw one of these in Tanzania and I bought one."
 }]
 
 // Select Items
 const picture = document.getElementById("person-img");
 const author = document.getElementById("author");
 const job = document.getElementById("job");
 const info = document.getElementById("info");

 const prev_btn = document.querySelector(".prev-btn");
 const next_btn = document.querySelector(".next-btn");
 const surprise_btn = document.querySelector(".surprise-btn");

 let currentItem = 0;

 window.addEventListener("DOMContentLoaded", function(){
     getPersonItem(currentItem)
 })
 
 //Get individual person 
 function getPersonItem(itemIndex){
    const item = reviews[itemIndex];
    picture.src = item.img_url;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.text;
 }
 //Show next person's review 
 next_btn.addEventListener("click", function(){
     currentItem += 1;
     if(currentItem > reviews.length - 1){
         currentItem = 0
     }
     getPersonItem(currentItem);
 })
//Show last person's review 
 prev_btn.addEventListener("click", function(){
    currentItem -= 1;
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    getPersonItem(currentItem);
})
//Generate a random review
surprise_btn.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * reviews.length);
    getPersonItem(randomIndex);
})

