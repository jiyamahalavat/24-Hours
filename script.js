let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")
let choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let image = document.getElementById("story-image")
let codeInput = document.getElementById("codeInput")
let submitCode = document.getElementById("submitCode")

codeInput.style.display = "none"
submitCode.style.display = "none"
function startScene(){
text1.textContent = "Red alarms flash in Intelligence HQ."
text2.textContent = "A hacker has triggered a 24 hour missile launch countdown."
text3.textContent = "You must stop the launch."
choice1.style.display = "inline"
choice2.style.display = "inline"
choice1.textContent = "Investigate Hacker Signal"
choice2.textContent = "Break Into Missile Facility"
image.src = "headquarters.jpg"
choice1.onclick = hackerPath
choice2.onclick = facilityPath
}
function hackerPath(){
text1.textContent = "You trace the hacker signal."
text2.textContent = "It leads to an abandoned warehouse."
text3.textContent = "Inside you find an encrypted flash drive."
choice1.textContent = "Decode Drive"
choice2.textContent = "Leave Warehouse"
image.src = "warehouse.jpg"
choice1.onclick = decodeDrive
choice2.onclick = startScene
}
function decodeDrive(){
text1.textContent = "You break the encryption."
text2.textContent = "The files reveal a hidden bunker."
text3.textContent = "The missiles are controlled from there."
choice1.textContent = "Go To Bunker"
choice2.textContent = "Return To HQ"
image.src = "computer.jpg"
choice1.onclick = bunkerEntrance
choice2.onclick = startScene
}
function facilityPath(){
text1.textContent = "You sneak into the missile command facility."
text2.textContent = "Security cameras scan the hallways."
text3.textContent = "You reach the security room."
choice1.textContent = "Check Computer Logs"
choice2.textContent = "Leave Facility"
image.src = "facility.jpg"
choice1.onclick = bunkerEntrance
choice2.onclick = startScene
}
function bunkerEntrance(){
text1.textContent = "You arrive at the bunker entrance."
text2.textContent = "Armed guards protect the door."
text3.textContent = "You must get past them."
choice1.textContent = "Sneak Past"
choice2.textContent = "Fight Guards"
image.src = "bunker.jpg"
choice1.onclick = controlRoom
choice2.onclick = controlRoom
}
function controlRoom(){
text1.textContent = "You reach the control room."
text2.textContent = "A giant screen shows the launch countdown."
text3.textContent = "What will you do?"
choice1.style.display = "inline"
choice2.style.display = "inline"
choice1.textContent = "Stop the Missiles"
choice2.textContent = "Sabotage the Mission"
codeInput.style.display = "none"
submitCode.style.display = "none"
image.src = "controlroom.jpg"
choice1.onclick = enterCode
choice2.onclick = sabotageEnding
}
function enterCode(){
text1.textContent = "Enter the shutdown code."
text2.textContent = ""
text3.textContent = ""

choice1.style.display = "none"
choice2.style.display = "none"

codeInput.style.display = "inline"
submitCode.style.display = "inline"
}
submitCode.addEventListener("click", checkCode)
function checkCode(){
let code = codeInput.value
if(code === "7391"){
heroEnding()
}else{
wrongCodeEnding()
}
}
function heroEnding(){
text1.textContent = "The code works."
text2.textContent = "The countdown stops."
text3.textContent = "The world is saved."
image.src = "goodending.jpeg"
codeInput.style.display = "none"
submitCode.style.display = "none"
}
function wrongCodeEnding(){
text1.textContent = "Wrong code."
text2.textContent = "The system locks you out."
text3.textContent = "The countdown continues."
image.src = "wrongcode.jpeg"
codeInput.style.display = "none"
submitCode.style.display = "none"
}
function sabotageEnding(){
text1.textContent = "You smile as the countdown continues."
text2.textContent = "You were the hacker all along."
text3.textContent = "Mission sabotaged."
image.src = "toolate.jpg"
choice1.style.display = "none"
choice2.style.display = "none"
}
document.addEventListener("keydown", function(event){
if(event.key === "h"){
alert("Hint: The shutdown code is 7391")
}
})
startScene()
