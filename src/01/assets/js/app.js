import P5 from 'p5';

let s = (sk) => {
  let gfx;
  let gfx2;
  sk.setup = () => {
    gfx = sk.createGraphics(window.innerWidth, window.innerHeight);
    sk.createCanvas(window.innerWidth, window.innerHeight);
    sk.background(40);
    gfx.stroke(200);
    gfx.strokeWeight(3);

    for (let i = 0; i < 1000; i++) {
      gfx.point(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
    //creating the cloned object
    sk.image(gfx, 0, 0);
    sk.frameRate(15);
  };

  sk.draw = () => {
    sk.background('rgba(0,0,0, 0.4)');
    gfx2 = { ...gfx };
    sk.image(gfx2, sk.cos(sk.random(-100, 200)), sk.tan(sk.random(-100, 100)));
  };
};

const myp5 = new P5(s);
console.log(myp5);
