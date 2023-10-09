const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function mouseDraw(event) {
    if (event.buttons === 1) {
        painter.lineTo(event.offsetX, event.offsetY);
        painter.stroke();
    }
}

function newPosition(event) {
    painter.moveTo(event.offsetX, event.offsetY);
}

function setColor(color) {
    painter.beginPath();
    painter.strokeStyle = color;
}

function setLineWidth(width) {
    painter.beginPath();
    painter.lineWidth = width;
}