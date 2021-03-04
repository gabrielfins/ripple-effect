import './ripples.scss';

$(document).on("pointerdown", ".ripple-effect", function(e) {
    let rect = this.getBoundingClientRect();
    let radius = findFurthestPoint(e.clientX, this.offsetWidth, rect.left, e.clientY, this.offsetHeight, rect.top);

    let circle =  document.createElement("div");
    circle.classList.add("ripple");

    circle.style.left = e.clientX - rect.left - radius + "px";
    circle.style.top = e.clientY - rect.top - radius + "px";
    circle.style.width = circle.style.height = radius * 2 + "px";

    $(this).append(circle);
});

$(document).on("pointerup mouseleave dragleave touchmove touchend touchcancel", ".ripple-effect", function() {
    let ripple = $(this).find(".ripple");
    if (ripple.lenght != 0) {
        ripple.css("opacity", "0");
        setTimeout(() => {
            ripple.remove()
        }, 300);
    }
});

function findFurthestPoint(clickPointX, elementWidth, offsetX, clickPointY, elementHeight, offsetY) {
    let x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    let y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    let d = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
    return d;
}
