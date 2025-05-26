const container = document.getElementById("background-container");
const footer = document.getElementById("footer");

const gravity = 0.9; // ⬅️ Slower fall
const damping = 0.6;  // ⬅️ Bounce loss factor
const ballSize = 80;
const footerRect = footer.getBoundingClientRect();
const footerTop = footerRect.top + window.scrollY;

const balls = [];

// Create 20 balls
for (let i = 0; i < 20; i++) {
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.style.opacity = "1";

const randomId = Math.floor(Math.random() * 30) + 1;
const imageUrl = `images/balls-bg/ball${randomId}.jpg`;

  ball.style.backgroundImage = `url('${imageUrl}')`;

  const startX = Math.random() * (window.innerWidth - ballSize);
  ball.style.left = `${startX}px`;
  ball.style.top = `0px`;

  container.appendChild(ball);

  balls.push({
    element: ball,
    x: startX,
    y: Math.random() * -window.innerHeight,
    vy: 0,
    resting: false,
    restTimer: 0,
    restDuration: Math.random() * 2000 + 1000,
    fadeOutDone: false
  });
}

// Animate loop
function animate(timestamp) {
  const footerRect = footer.getBoundingClientRect();
  const footerTop = footerRect.top + window.scrollY;

  balls.forEach(ball => {
    const el = ball.element;

    if (!ball.resting) {
      ball.vy += gravity;
      ball.y += ball.vy;

      if (ball.y + ballSize >= footerTop) {
        ball.y = footerTop - ballSize;

        if (Math.abs(ball.vy) > 1) {
          ball.vy = -ball.vy * damping;
        } else {
          ball.vy = 0;
          ball.resting = true;
          ball.restTimer = performance.now();
        }
      }

      el.style.top = `${ball.y}px`;
    } else {
      const now = performance.now();

      if (!ball.fadeOutDone && now - ball.restTimer >= ball.restDuration) {
        el.style.transition = "opacity 1s";
        el.style.opacity = "0";
        ball.fadeOutDone = true;

        setTimeout(() => {
          ball.x = Math.random() * (window.innerWidth - ballSize);
          ball.y = Math.random() * -300;
          ball.vy = 0;
          ball.resting = false;
          ball.fadeOutDone = false;
          el.style.transition = "none";
          el.style.opacity = "1";
          el.style.left = `${ball.x}px`;
        }, 1000);
      }
    }
  });

  requestAnimationFrame(animate);
}


animate();
