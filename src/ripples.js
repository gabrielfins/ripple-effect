import './ripples.scss';

$(document).on("pointerdown", ".md-ripples", function(e) {
    const rect = this.getBoundingClientRect();
    const radius = findFurthestPoint(e.clientX, this.offsetWidth, rect.left, e.clientY, this.offsetHeight, rect.top);

    let circle =  document.createElement("div");
    $(circle).addClass("ripple");
    $(circle).css({
        top: e.clientY - rect.top - radius + "px",
        left: e.clientX - rect.left - radius + "px",
        width: radius * 2 + "px",
        height: radius * 2 + "px"
    })

    $(this).append(circle);
});

$(document).on("pointerup mouseleave dragleave touchmove touchend touchcancel", ".md-ripples", function() {
    const ripples = $(this).find(".ripple");
    if (ripples.lenght != 0) {
        ripples.animate({opacity: 0}, 600, function() {
            ripples.remove();
        });
    }
});

function findFurthestPoint(clickPointX, elementWidth, offsetX, clickPointY, elementHeight, offsetY) {
    const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    const r = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));
    return r;
}
