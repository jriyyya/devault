import { useRef, useEffect } from "react";

function randomRange(a, b) {
  return a + Math.random() * (b - a);
}

function randomSignum() {
  return Math.random() < 0.5 ? 1 : -1;
}

function signum(n) {
  return n / Math.abs(n);
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function FloatingDocsBackground() {
  let canvas = useRef(null);

  //parameters
  const docCount = 10;
  const minGap = 50;
  const maxMove = 80;
  const sizeRange = [8, 15];
  const speedRange = [0.2, 0.4];
  const images = [
    "/images/icons/hero/1.png",
    "/images/icons/hero/2.png",
    "/images/icons/hero/3.png",
    "/images/icons/hero/4.png",
    "/images/icons/hero/5.png",
    "/images/icons/hero/6.png",
  ];

  let docs = [];

  useEffect(() => {
    let ctx = canvas.current.getContext("2d");
    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;
    let raf;

    //Document class
    class Doc {
      constructor(x = 0, y = 0, image) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.size = 0;
        this.image = new Image();
        this.image.src = image;
      }

      draw() {
        ctx.drawImage(
          this.image,
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size,
          this.size
        );
      }

      distanceTo(x, y) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
      }
    }

    function init() {
      for (let i = 0; i < docCount; i++) {
        let flag = true;
        while (flag) {
          let newDoc = new Doc(
            randomRange(minGap, window.innerWidth - minGap),
            randomRange(minGap, window.innerHeight - minGap),
            randomChoice(images)
          );
          let isBreak = true;
          for (let d of docs) {
            if (newDoc.distanceTo(d.x, d.y) < minGap) {
              isBreak = false;
              break;
            }
          }

          if (isBreak) {
            newDoc.vx =
              randomSignum() * randomRange(speedRange[0], speedRange[1]);
            newDoc.vy =
              randomSignum() * randomRange(speedRange[0], speedRange[1]);
            newDoc.size = randomRange(sizeRange[0], sizeRange[1]);
            docs.push(newDoc);
            flag = false;
          }
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let d of docs) {
        d.draw();
        d.x += d.vx;
        d.y += d.vy;
        if (d.distanceTo(d.originX, d.originY) > maxMove) {
          d.vx = -1 * signum(d.vx) * randomRange(speedRange[0], speedRange[1]);
          d.vy = -1 * signum(d.vy) * randomRange(speedRange[0], speedRange[1]);
        }
      }

      window.requestAnimationFrame(draw);
    }

    init();
    setTimeout(() => {
      draw();
    }, 500);
  }, []);

  return (
    <canvas
      ref={canvas}
      width="1280"
      height={"720"}    
      className="w-full h-full"
    />
  );
}
