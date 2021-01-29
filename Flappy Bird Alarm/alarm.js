let time, hour, minute, second, hour2, minute2, second2;
hour2 = prompt("Hour: ")
minute2 = prompt("Minutes: ");






function setupAlarm(){

createCanvas(400, 600);
background(220)
}
function drawAlarm(){
 [hour, minute] = ( new Date() ).toLocaleTimeString().slice(0,6).split(":")
textAlign(CENTER, CENTER);
textSize(25);
text(`${hour} : ${minute}`, width / 2, height / 2);

textAlign(CENTER, CENTER);
textSize(25);
text(`Alarm Set - ${hour2}:${minute2}`, width / 2, height / 4);
}
function draw(){
  background(220);
  setupAlarm();
  drawAlarm(); 
if ((hour >= hour2) && ((minute >= minute2) )){
  drawGame();
}
if (score == 5){
  background (220);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("SNOOZED", width / 2, height / 2);
}
}