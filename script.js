let p1 = document.getElementById("paragraph1");
let p2 = document.getElementById("paragraph2");
let p3 = document.getElementById("paragraph3");

let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let nextButton = document.getElementById("nextButton");

let image = document.getElementById("story-image");

function startScene(){

p1.textContent = "Red alarms flash inside Intelligence HQ.";
p2.textContent = "A hacker has triggered a 24 hour missile launch countdown.";
p3.textContent = "You must stop it.";

choice1.textContent = "Investigate Hacker Signal";
choice2.textContent = "Break Into Missile Facility";

}

choice1.addEventListener("click", function(){

p1.textContent = "You track the hacker signal.";
p2.textContent = "It leads to an abandoned warehouse.";
p3.textContent = "Inside you find an encrypted flash drive.";

choice1.textContent = "Decode the drive";
choice2.textContent = "Leave the warehouse";

image.src = "warehouse.jpg";

});

choice2.addEventListener("click", function(){

p1.textContent = "You sneak into the missile command facility.";
p2.textContent = "Security cameras scan the hallways.";
p3.textContent = "You reach the security room.";

choice1.textContent = "Search computer logs";
choice2.textContent = "Leave facility";

image.src = "facility.jpg";

});

startScene();