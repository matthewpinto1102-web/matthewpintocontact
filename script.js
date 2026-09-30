const canvas = document.getElementById("bg-animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

for (let i = 0; i < 40; i++) {
  sparkles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dy: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sparkles.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
    ctx.fill();

    s.y += s.dy;
    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();
