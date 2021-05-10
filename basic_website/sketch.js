/* 👇 Start writing your p5.js code here */

function setup() {
  // covid cijfers januari 2021 t/m 27 april 2021
  var data = [4340, 5465, 6058, 6339, 7150, 6566, 6147, 6673, 7534, 8668, 9606, 9925, 9142, 8460, 9276, 11168, 11139, 12491, 11339, 12372, 10230, 9769, 11181, 11465, 11639, 8593, 7482, 6937, 8065, 9741, 9442, 9543, 6559, 6398, 6379, 7273, 8084, 8937, 7862, 7346, 6011, 5014, 5423, 6446, 6080, 5918, 6055, 5011, 4268, 4639, 5783, 5606, 5688, 5632, 4318, 4008, 4072, 4788, 4610, 4383, 4138, 3739, 3066, 3615, 4241, 4111, 4250, 5437, 5382, 6524, 7818, 7783, 7823, 7388, 6878, 6886, 7519, 7695, 8769, 8089, 7680, 6700, 7299, 9275, 9175, 9242, 8015, 6795, 6312, 4798, 1129];

  // breedte en hoogte van canvas
  var width = 700, 
    height = 600,

    // margin tabel
    margin = 30, 

    // breedte en hoogte van tabel
    w = width - 2 * margin, 
    h = height - 2 * margin;

  x = width / 2;
  y = height / 2;

  // breedte van stroken
  var barWidth = (h / 14.65) * 0.5; 

  // margin tussen stroken
  var barMargin = (h / data.length) * 0.5; 

  // hier misschien klikfunctie waarmaken?
  function mousePressed(){

  }

  createCanvas(width, height * 3.3);

  textSize(12);

  // slaat de drawsettings en transformaties op
  push(); 

  // negeer margin 
  translate(margin, margin); 

  for (var i = 0; i < data.length; i++) {
    
    // slaat de drawsettings en transformaties op
    push(); 
    
    // kleur van bars
    fill('LawnGreen'); 
    
    noStroke();
    
    // jump to the top right corner of the bar
    translate(0, i * (barWidth + barMargin)); 
    
    // tekent de bars, lengte gebaseerd op data
    rect(0, 0, data[i] / 30, barWidth); 

    // kleur tekst
    fill('black'); 
    
    // weergeef data 
    text(data[i], 5, barWidth / 2 + 5); 

    // restore settings
    pop(); 
  }

  // restore settings
  pop(); 
}

// tijd is 0
let t = 0; 

function draw() {

  let besmettingscijfer = 4340
  let space = besmettingscijfer / 100

  for (let x = 500; x <= width; x = x + space) {
    
    for (let y = 50; y <= height; y = y + space) {

      // varieert ook op basis van de locatie van de cirkel
      const angle = 30 * (x / width) + 300 * (y / height);

      // elke cirkel beweegt in een cirkel
      const myX = x + 5 * cos(3 * PI * t + angle);
      const myY = y + 5 * sin(3 * PI * t + angle);

      // kleur cirkels
      fill('LawnGreen') 

      // stroke is wit
      stroke(250) 

      // teken cirkel
      ellipse(myX, myY, 10); 
    }
    
  }
  
  // update tijd
  t = t + 0.01; 
  
}
