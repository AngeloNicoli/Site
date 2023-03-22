var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();


function myFunction() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
    
    const context = c.getContext("2d");
    context.clearRect(0,0,200, 100);
    context.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(120,40);
    ctx.stroke();

context.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(20,30);
    ctx.stroke();
}

function myFunction2() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
    

    const context = c.getContext("2d");
    context.clearRect(0,0,200, 100);
}