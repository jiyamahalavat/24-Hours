//gets elements
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let image = document.getElementById("story-image");
let codeInput = document.getElementById("codeInput");
let submitCode = document.getElementById("submitCode");
let restartBtn = document.getElementById("restart");

// hide input buttons
codeInput.style.display = "none";
submitCode.style.display = "none";
restartBtn.style.display = "none";

function startScene(){

// simple loop requirement
showCountdown();
codeInput.value = "";
restartBtn.style.display = "none";
text1.textContent = "Red alarms flash in Intelligence HQ.";
text2.textContent = "A hacker triggered a 24 hour missile launch.";
text3.textContent = "You have one day.";
choice1.style.display = "inline"; // shows buttons
choice2.style.display = "inline";
choice1.textContent = "Trace Hacker";
choice2.textContent = "Go To Facility";
image.src = "headquarters.jpg";
choice1.onclick = warehouseScene;
choice2.onclick = hallwayScene;

}

//SCENE 1
function warehouseScene(){

text1.textContent = "You reach an abandoned warehouse.";
text2.textContent = "A drone attacks you.";
text3.textContent = "What do you do?";
image.src = "warehouse.jpg";
choice1.textContent = "Hide";
choice2.textContent = "Fight";
choice1.onclick = serverRoom;
choice2.onclick = injuryEnding; // failure path

}

//SCENE 2
function hallwayScene(){

text1.textContent = "You sneak into the missile facility.";
text2.textContent = "Laser hallway ahead.";
text3.textContent = "Choose quickly.";
image.src = "lasers.jpg";
choice1.textContent = "Dodge Lasers";
choice2.textContent = "Turn Back";
choice1.onclick = serverRoom;
choice2.onclick = tooscaredEnding; 

}

//SCENE 3
function serverRoom(){

text1.textContent = "You enter the server room.";
text2.textContent = "Encrypted files everywhere.";
text3.textContent = "Search for clues.";
image.src = "server.jpg";
choice1.textContent = "Download Files";
choice2.textContent = "Destroy Servers";
choice1.onclick = bunkerEntrance;
choice2.onclick = sabotageEnding; // evil ending

}

//SCENE 4
function bunkerEntrance(){

text1.textContent = "You find the hidden bunker.";
text2.textContent = "Armed guards block the door.";
text3.textContent = "Act fast.";

image.src = "bunker.jpg";

choice1.textContent = "Sneak Past";
choice2.textContent = "Fight Guards";

choice1.onclick = elevatorScene; // continue mission
choice2.onclick = injuryEnding; // failure

}

//SCENE 5
function elevatorScene(){
text1.textContent = "You enter a dark service elevator.";
text2.textContent = "It suddenly stops between floors.";
text3.textContent = "Climb out or force the doors?";
image.src = "elevator.jpg";
choice1.textContent = "Climb Hatch";
choice2.textContent = "Force Doors";
choice1.onclick = rooftop;
choice2.onclick = injuryEnding;

}

//SCENE 6
function rooftop(){

text1.textContent = "You reach the rooftop.";
text2.textContent = "A rescue helicopter flies overhead.";
text3.textContent = "Jump or signal the pilot?";

image.src = "rooftop.jpg";

choice1.textContent = "Jump To Next Building";
choice2.textContent = "Signal Helicopter";

choice1.onclick = controlRoom;
choice2.onclick = controlRoom;

}

//SCENE 7
function controlRoom(){
text1.textContent = "You reach the missile control room.";
text2.textContent = "Countdown flashing.";
text3.textContent = "Enter shutdown code.";
image.src = "controlroom.jpg";
choice1.style.display = "none";
choice2.style.display = "none";
codeInput.style.display = "inline";
submitCode.style.display = "inline";

}

//error handling
submitCode.addEventListener("click", checkCode);
function checkCode(){
try{
let code = codeInput.value;
if(code === "1234"){
heroEnding();
}else{
failEnding();
}
}catch(err){
alert("System malfunction.");
}
}

//ENDINGS
function heroEnding(){
text1.textContent = "Missiles stop.";
text2.textContent = "World saved.";
text3.textContent = "You are a hero.";
image.src = "goodending.jpg";
endGame();
}

function failEnding(){
text1.textContent = "Wrong code.";
text2.textContent = "Launch initiated.";
text3.textContent = "Mission failed.";
image.src = "wrongcode.jpeg";
endGame();
}

function sabotageEnding(){
text1.textContent = "You delete the shutdown files.";
text2.textContent = "You were the hacker.";
text3.textContent = "Mission sabotaged.";
image.src = "toolate.jpg";
endGame();
}

function injuryEnding(){
text1.textContent = "You are injured.";
text2.textContent = "You cannot continue.";
text3.textContent = "Mission lost.";
image.src = "injury.jpg";
endGame();
}

function tooscaredEnding(){
text1.textContent = "You retreat.";
text2.textContent = "Time runs out.";
text3.textContent = "Missiles launch.";
image.src = "toolate.jpg";
endGame();
}

//ENDGAME
function endGame(){
codeInput.style.display = "none";
submitCode.style.display = "none";
choice1.style.display = "none";
choice2.style.display = "none";
restartBtn.style.display = "inline";

}

// restart listener
restartBtn.addEventListener("click", startScene);
// keyboard hint listener
document.addEventListener("keydown", function(e){
if(e.key === "h"){
alert("Hint: Code = 1234");
}
});

// simple loop requirement
function showCountdown(){
for(let i = 5; i > 0; i--){
console.log("Mission begins in " + i);
}
}

// start game
startScene();

