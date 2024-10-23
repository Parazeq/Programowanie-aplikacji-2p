let x = 100;
function setup() {
    createCanvas(2000, 700, WEBGL);
}

function draw() {
    background(10);
    fill('red');
    circle(200, 220, 200);
    fill('darkblue');
    circle(400, 220, 200);
    fill('darkviolet');
    circle(300, 220, 250);
    translate(-300, 0);
    rotateY(frameCount * 0.01)
    fill('darkorange');
    sphere(80);
    rotateY(frameCount * 0.05)
    translate(150, 0);
    fill('darkgreen');
    sphere(15)
    translate(200, 0);
    fill('darkred');
    sphere(30)
}
