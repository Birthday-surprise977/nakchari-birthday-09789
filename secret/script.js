function checkPassword(){

let pass =
document.getElementById("password").value;

if(pass==="Nakchari"){

document.getElementById("passwordPage")
.style.display="none";

document.getElementById("mainPage")
.style.display="block";

document.getElementById("bgMusic")
.play();

}else{

document.getElementById("error")
.innerHTML="Wrong Password ❤️";

}

}

function goMemories(){

window.location.href="memories.html";

}

const birthday = new Date("June 15, 2026 00:00:00");

function updateCountdown(){

const now = new Date();

const diff = birthday - now;

if(diff <= 0){

document.getElementById("countdown").innerHTML =
"<h2>🎉 Happy Birthday Nakchari ❤️ 🎉</h2>";

return;
}

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor(
(diff % (1000*60*60*24)) / (1000*60*60)
);

const minutes = Math.floor(
(diff % (1000*60*60)) / (1000*60)
);

const seconds = Math.floor(
(diff % (1000*60)) / 1000
);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);
updateCountdown();

function revealElements(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;

const revealTop =
element.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);

revealElements();

// ===== PUZZLE =====

const puzzleGrid = document.getElementById("puzzle-grid");

if(puzzleGrid){

let rotations = [];

for(let i = 0; i < 9; i++){

const tile = document.createElement("div");

tile.classList.add("puzzle-tile");

const row = Math.floor(i / 3);
const col = i % 3;

tile.style.backgroundPosition =
`${col * 50}% ${row * 50}%`;

let randomRotation;

do{
randomRotation =
Math.floor(Math.random() * 4) * 90;
}
while(randomRotation === 0);

rotations.push(randomRotation);

tile.style.transform =
`rotate(${randomRotation}deg)`;

tile.addEventListener("click",()=>{

rotations[i] =
(rotations[i] + 90) % 360;

tile.style.transform =
`rotate(${rotations[i]}deg)`;

checkPuzzle();

});

puzzleGrid.appendChild(tile);

}

function checkPuzzle(){

let solved = true;

for(let i = 0; i < rotations.length; i++){

if(rotations[i] !== 0){

solved = false;
break;

}

}

if(solved){


document.getElementById(
"solved-message"
).style.display = "block";

launchConfetti();

}

}

}

function launchConfetti(){

const container =
document.getElementById("confetti-container");

if(!container) return;

for(let i=0;i<80;i++){

const piece =
document.createElement("div");

piece.classList.add("confetti");

piece.style.left =
Math.random()*100 + "%";

piece.style.background =
`hsl(${Math.random()*360},100%,70%)`;

piece.style.animationDelay =
Math.random()*2 + "s";

container.appendChild(piece);

}

}