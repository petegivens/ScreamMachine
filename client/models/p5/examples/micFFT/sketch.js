/**
 *  Visualize the frequency spectrum of live audio input
 */

var mic, fft;

function setup() {
   createCanvas(512,400);
   noStroke();
   fill(0,255,255);

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(200);
   var spectrum = fft.analyze();
   noStroke();
   fill(0,255,0); // spectrum is green
   for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height, width / spectrum.length, h )
   }

   var waveform = fft.waveform();
   noFill();
   beginShape();
   stroke(255,0,0); // waveform is red
   strokeWeight(1);
   for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
   }
  endShape();
}
