import "./ripples.scss";

document.addEventListener("pointerdown", function (e) {
  const target = e.target.closest(".md-ripples");
  if (target) {
    const rect = target.getBoundingClientRect();
    const radius = findFurthestPoint(
      e.clientX,
      target.offsetWidth,
      rect.left,
      e.clientY,
      target.offsetHeight,
      rect.top
    );

    const circle = document.createElement("div");
    circle.classList.add("ripple");
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;

    target.appendChild(circle);
  }
});

function removeRipples(e) {
  const ripples = document.querySelectorAll(".ripple");
  ripples.forEach((ripple) => {
    ripple.style.transition = "opacity 0.6s";
    ripple.style.opacity = "0";
    ripple.addEventListener("transitionend", () => {
      ripple.remove();
    });
  });
}

[
  "pointerup",
  "mouseleave",
  "dragleave",
  "touchmove",
  "touchend",
  "touchcancel",
].forEach((eventType) => {
  document.addEventListener(eventType, removeRipples);
});

function findFurthestPoint(
  clickPointX,
  elementWidth,
  offsetX,
  clickPointY,
  elementHeight,
  offsetY
) {
  const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
  const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
  return Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
}
