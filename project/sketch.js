let bg;
let centerImg;
let barbielogo;
let sparklelinergif;

let screen = 0; // 0 = main screen, 1 = new screen with dolls, 2/3/4 = childhood
let barbiedoll1, barbiedoll2, barbiedoll3;
let lilly, tanya, ana;

let tanyaphoto, tanyaphoto1, tanyaphoto2, tanyaphoto3, tanyaphoto4;

let tanyabg;

let afghanbg;

let lillybg;

let anaphone, anaphone1, anaphone2, anaphone3, anaphone4, anaphone5, anaphone6;

let lillyphoto1, lillyphoto2, lillyphoto3;
let lillyphoto4, lillyphoto5, lillyphoto6;

let tanyatitle, anatitle, lillytitle;


function preload() {
//second barbie dolls//

barbiedoll1 = loadImage('images/barbiedoll1.png')
barbiedoll2 = loadImage('images/barbiedoll2.png')
barbiedoll3 = loadImage('images/barbiedoll3.png')

//text of names
lilly = loadImage('images/Lilly-23-04-2026.png')
ana = loadImage ('images/Anahita-23-04-2026.png')
tanya = loadImage ('images/Tanya-Jade-23-04-2026.png')


//tanyas page//
tanyaphoto= loadImage('images/photobooth1.png')
tanyaphoto1= loadImage('images/camera.png')
tanyaphoto2= loadImage('images/polariod1.png')
tanyaphoto3= loadImage('images/polariod2.png')
tanyaphoto4= loadImage('images/photobooth2.png')

tanyabg = loadImage('images/tanyabg.jpg')

//anas page//
anaphone= loadImage('images/anaphone.PNG')
anaphone1= loadImage('images/anaphone1.png')
anaphone2= loadImage('images/anaphone4.png')
anaphone3= loadImage('images/anaphone3.png')
anaphone4= loadImage('images/anaphone2.png')
anaphone5= loadImage('images/anaphone5.png')
anaphone6= loadImage('images/anaphone6.png')

afghanbg= loadImage('images/afghanbg.JPEG');


//lillys page//
lillyphoto1= loadImage('images/lilly1.jpg')
lillyphoto2= loadImage('images/lilly2.jpg')
lillyphoto3= loadImage('images/lilly3.jpg')
lillyphoto4= loadImage('images/lilly4.jpg')
lillyphoto5= loadImage('images/lilly5.jpg')
lillyphoto6= loadImage('images/lilly6.PNG')

lillybg= loadImage('images/lillybg.png');

bg = loadImage('images/Untitled design-9.png');
centerImg = loadImage ('images/barbiehead.png');
barbielogo = loadImage('images/BarbieLogo.gif');
sparklelinergif= loadImage('images/sparkleliner.gif');

tanyatitle = loadImage('images/Precious-memories-of-Tanya-in-04-05-2026.png');
anatitle = loadImage('images/A-glimpse-into-Ana-s-childhood-04-05-2026.png');
lillytitle = loadImage('images/A-peek-into-Lilly-s-younger-ye-04-05-2026.png')

}

function setup() {
createCanvas(windowWidth, windowHeight);
document.body.style.margin="0";
document.body.style.overflow="hidden";
imageMode(CENTER);

}

function draw() {

if (screen === 0) {
drawMainScreen();

} else if (screen === 1) {
drawSecondScreen();

} else if (screen === 2) {
drawAnaPage();

} else if (screen === 3) {
drawLillyPage();

} else if ( screen === 4){
drawTanyaPage();

}
}

function drawMainScreen() {
background(255);
let x = width / 2 + 80;
let y = height / 2- 100;

image (centerImg, width / 2+ 80, height/ 2 -100, 500, 500);
image(bg, width / 2, height /2, 2200, 900);
image(centerImg, width / 2 + 80, height / 2 - 100, 500, 500);
image(barbielogo, width / 2 - 30, height/ 2 + 200, 250, 100);
image(sparklelinergif, width / 2, 50, width, 100);
image(sparklelinergif, width / 2, height- 50, width, 100);
}

function drawSecondScreen() {
background(255, 153, 204);
fill(0);
textAlign(CENTER, CENTER);
textSize(40);
//barbie dolls//


let floatAmount = sin(frameCount * 0.06) * 17;

//barbie dolls//
image(barbiedoll1, width / 2 - 400, height - 950 / 2 + floatAmount, 500, 500);
image(barbiedoll2, width / 2 + 190, height - 950 / 2 + floatAmount, 500, 500);
image(barbiedoll3, width / 2 + 250, height - 950 / 2 + floatAmount, 500, 500);

//text of names//
image(ana, width / 2 - 400, height - 220/ 2, 250, 100);
image(lilly, width / 2 + 5, height - 220/ 2, 165, 115);
image(tanya, width / 2 + 420, height - 220 / 2, 330, 130);
}


function drawAnaPage (){
let shake = sin(frameCount*0.2)*4;
image(afghanbg, width/2,height/2, width, height);
fill(255);
textAlign(CENTER, CENTER);
textSize(24);
image(anatitle, width / 2, 70);

//phone 1
push();
translate(width/2-580 + shake, height/2-80);
rotate(-0.09);
image(anaphone, 0, 0, 350, 500);
pop();

//phone 2
push();
translate(width/2-380 - shake, height/2+90);
rotate(+0.07);
image(anaphone1, 0, 0, 200, 370);
pop();

//phone 3
push();
translate(width/2-200+shake, height/2-80);
rotate(-0.07);
image(anaphone2, 0, 0, 310, 430);
pop();

//phone 4
push();
translate(width/2+24-shake, height/2+140);
rotate(0.10);
image(anaphone3, 0, 0, 280, 400);
pop();

//phone 5
push();
translate(width/2+150+shake, height/2-90);
rotate(-0.13);
image(anaphone4, 0, 0, 255, 320);
pop();

//phone 6
push();
translate(width/2+350-shake, height/2+80);
rotate(0.09);
image(anaphone5, 0, 0, 220, 300);
pop();

//phone 7
push();
translate(width/2+560+shake, height/2-70);
rotate(-0.08);
image(anaphone6, 0, 0, 220, 410);
pop();

}

function drawLillyPage (){
background (255, 153, 204);
fill(255);
textAlign(CENTER, CENTER);
textSize(24);
image(lillytitle, width / 2, height / 2);
}

function drawTanyaPage (){
image(tanyabg, width/2,height/2, width, height);

let floatAmount = sin(frameCount * 0.06) * 12;

fill(255);
textAlign(CENTER, CENTER);
textSize(24);
image(tanyatitle , width / 2, 70);


//polaroid 1
push();
translate(width / 2 - 480, height / 2 - 20 +floatAmount);
rotate(-0.15);
image(tanyaphoto, 0, 0, 300, 540);
pop();

//polaroid 2
push();
translate(width / 2 - 210, height / 2 + 80 -floatAmount);
rotate(0.08);
image(tanyaphoto1, 0, 0, 250, 310);
pop();

//polaroid 3
push();
translate(width / 2, height / 2 - 50 +floatAmount);
rotate(-0.04);
image(tanyaphoto2, 0, 0, 250, 400);
pop();

//polaroid 4
push();
translate(width / 2 + 210, height / 2 + 80 -floatAmount);
rotate(-0.02);
image(tanyaphoto3, 0, 0, 250, 400);
pop();

//polaroid 5
push();
translate(width / 2 + 440, height / 2 - 20 +floatAmount);
rotate(-0.06);
image(tanyaphoto4, 0, 0, 300, 540);
pop();
}


function drawLillyPage(){
background (255, 153, 204);
image(lillybg, width/2,height/2, width, height);
fill(255);
textAlign(CENTER, CENTER);
textSize(24);
image(lillytitle, width / 2 , 60);

push ();
rectMode(CENTER);

fill(255,182,193);
rect(width / 2, height / 2, 700, 450, 20);

fill(200);
ellipse (width /2 + 250, height / 2 - 120, 80);

fill(240);
rect (width / 2 - 200, height / 2 - 220, 120, 40, 20);

fill(50);
rect(width/ 2- 50, height / 2, 420, 280, 15);

fill (0);
rect(width/ 2- 50, height / 2, 380,240, 10);

//photo
push();
translate(width/2-195, height/2+72);
image(lillyphoto1, 0, 0, 90, 100);
pop();

//photo
push();
translate(width/2+90, height/2-45);
image(lillyphoto2, 0, 0, 100, 150);
pop();

//photo
push();
translate(width/2-195, height/2-45);
image(lillyphoto3, 0, 0, 90, 150);
pop();

//photo
push();
translate(width/2+70, height/2+75);
image(lillyphoto4, 0, 0, 140, 90);
pop();

//photo
push();
translate(width/2-75, height/2+75);
image(lillyphoto5, 0, 0, 150, 90 );
pop();

//photo
push();
translate(width/2-55, height/2-45);
image(lillyphoto6, 0, 0, 190, 324);
pop();





}
function mousePressed(){
if (screen === 0) {

let x = width / 2 + 80;
let y = height / 2 - 100;

let d = dist(mouseX, mouseY, x, y);
if (d < 200) {
screen = 1; // clicking onto the next page
}
}
else if (screen === 1){
if (dist(mouseX, mouseY, width / 2 - 400, height - 950 / 2) < 180){
screen = 2;
}

else if (dist(mouseX, mouseY, width / 2 + 190, height - 950 / 2) <180){
screen = 3;
}

else if (dist(mouseX, mouseY, width / 2 + 250, height - 950 / 2)<180){
screen = 4;
}
}

else if (screen===2 || screen === 3 || screen===4){
screen=1;
}
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}



