/* 👇 Start writing your p5.js code here */

function setup() {
  var data = [4340, 5465, 6058, 6339, 7150, 6566, 6147, 6673, 7534, 8668, 9606, 9925, 9142, 8460, 9276, 11168, 11139, 12491, 11339, 12372, 10230, 9769, 11181, 11465, 11639, 8593, 7482, 6937, 8065, 9741, 9442, 9543, 6559, 6398, 6379, 7273, 8084, 8937, 7862, 7346, 6011, 5014, 5423, 6446, 6080, 5918, 6055, 5011, 4268, 4639, 5783, 5606, 5688, 5632, 4318, 4008, 4072, 4788, 4610, 4383, 4138, 3739, 3066, 3615, 4241, 4111, 4250, 5437, 5382, 6524, 7818, 7783, 7823, 7388, 6878, 6886, 7519, 7695, 8769, 8089, 7680, 6700, 7299, 9275, 9175, 9242, 8015, 6795, 6312, 4798, 1129];
  var width = 1100, // canvas width and height
    height = 600,
    margin = 30,
    w = width - 2 * margin, // chart area width and height
    h = height - 2 * margin;

  x = width / 2;
  y = height / 2;
  var barWidth = (h / 14.65) * 0.5; // width of bar
  var barMargin = (h / data.length) * 0.5; // margin between two bars

  createCanvas(width, height * 3.3);

  textSize(14);

  push();
  translate(margin, margin); // ignore margin area

  for (var i = 0; i < data.length; i++) {
    push();
    fill('steelblue');
    noStroke();
    translate(0, i * (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, data[i] / 30, barWidth);

    fill('#FFF');
    text(data[i], 5, barWidth / 2 + 5); // write data

    pop();
  }

  pop();
}

let t = 0;

function draw() {

  let iets = 4340
  let space = iets / 100

  for (let x = 500; x <= width; x = x + space) {
    for (let y = 50; y <= height; y = y + space) {

      // and also varies based on the particle's location
      const angle = 30 * (x / width) + 300 * (y / height);

      // each particle moves in a circle
      const myX = x + 5 * cos(2 * PI * t + angle);
      const myY = y + 5 * sin(3 * PI * t + angle);

      fill(0)
      stroke(255)

      ellipse(myX, myY, 10); // draw particle
    }
  }
  t = t + 0.01; // update time
}