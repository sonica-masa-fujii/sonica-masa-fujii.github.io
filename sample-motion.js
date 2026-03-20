document.addEventListener("DOMContentLoaded", () => {
  const orbit = document.querySelector(".bg-orbit");
  if (!orbit) return;

  const orbs = Array.from({ length: 3 }, (_, i) => {
    const orb = document.createElement("div");
    orb.className = "orb";
    orb.style.left = `${12 + i * 28}%`;
    orb.style.top = `${18 + (i % 2) * 28}%`;
    orb.style.background = i === 1
      ? "radial-gradient(circle, rgba(122, 168, 255, 0.82), rgba(122, 168, 255, 0))"
      : i === 2
        ? "radial-gradient(circle, rgba(144, 255, 215, 0.82), rgba(144, 255, 215, 0))"
        : "radial-gradient(circle, rgba(72, 221, 210, 0.82), rgba(72, 221, 210, 0))";
    orbit.appendChild(orb);
    return orb;
  });

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animate() {
    const t = performance.now() / 1000;
    orbs.forEach((orb, index) => {
      const x = Math.sin(t * (0.32 + index * 0.07)) * 70 + (mouseX / window.innerWidth - 0.5) * (18 + index * 12);
      const y = Math.cos(t * (0.26 + index * 0.05)) * 56 + (mouseY / window.innerHeight - 0.5) * (14 + index * 8);
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
