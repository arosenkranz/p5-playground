import P5 from 'p5';

let s = (sk) => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
    sk.noCursor();

    sk.colorMode(sk.HSB, 360, 100, 100);
    sk.background('rgb(255, 255, 255');
    sk.rectMode(sk.CENTER);
    sk.noStroke();
  };

  sk.draw = () => {
    // sk.translate(sk.mouseX, sk.mouseY);
    // sk.rotate(sk.cos(sk.mouseX / sk.mouseY));
    sk.background('rgba(0,0,0, 0.08)');
    sk.fill(360 - sk.mouseY / 2, 100, 100);
    sk.ellipse(sk.mouseX, sk.mouseY, 100, 100);
    // sk.triangle(30, 75, 58, 20, 86, 75);
  };
};

const myp5 = new P5(s);
