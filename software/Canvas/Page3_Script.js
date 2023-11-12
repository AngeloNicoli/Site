const canvas = document.getElementById("myCanvas");
const keyPressed = document.querySelector("#keyReader");

addEventListener("click", myFunction5);
console.log(canvas)

document.onkeydown = function(e) {
    console.log('key down');
    console.log(e);
    console.log(e.key);
    keyPressed.innerText += " " + e.key;
};

function Create_Canvas() {
    console.log("Ready");
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#3e3e42";
	ctx.fillRect(0, 0, 400, 300);
}

function myFunction5() {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x);
    console.log(y);
}  

function Draw_Circle() {
    setTimeout(function(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(a, b, d, 0, 2 * Math.PI);
        ctx.strokeStyle = "#007acc";
        ctx.stroke();
    }, 50); 

}

// Line
function myFunction() {
    var r = document.getElementById("myCanvas");
    var ctx = r.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.lineTo(c,d);
    ctx.strokeStyle = "#007acc";
    ctx.stroke();
}

// DELETE 
function myFunction2() {
    var r = document.getElementById("myCanvas");
    context = r.getContext("2d");
    context.clearRect(0,0,400, 300);
    Create_Canvas()
}

function Rectangle() {
	 var r = document.getElementById("myCanvas");
	ctx = r.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(a,b,e,d); 
}

function Rectangle_02() {
    const canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Stroked triangle
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45,45);
      ctx.lineTo(45, 125);

      ctx.closePath();
      ctx.stroke();
    }
  }


function Submit() {
    a = document.getElementById("aTextBox1").value;
    a = Number(a);

    b = document.getElementById("aTextBox2").value;
    b = Number(b);

    c= document.getElementById("aTextBox3").value;
    c = Number(c);

    d = document.getElementById("aTextBox4").value;
    d = Number(d);
    console.log(a)
    myFunction()
}

function Submit2() {
    a = document.getElementById("aTextBox5").value;
    a = Number(a);

    b = document.getElementById("aTextBox6").value;
    b = Number(b);

    d = document.getElementById("aTextBox7").value;
    d = Number(d);
    console.log(a)
    Draw_Circle()
}

function Submit3() {
    a = document.getElementById("aTextBox9").value;
    a = Number(a);

    b = document.getElementById("aTextBox10").value;
    b = Number(b);
   
    e = document.getElementById("aTextBox11").value;
    e = Number(e);

    d = document.getElementById("aTextBox12").value;
    d = Number(d);
    console.log(a)
    Rectangle()
}

function grid() {
    let canvas = document.getElementById('myCanvas');
    let canvasW = canvas.width;
    let canvasH = canvas.height;
    let n_cell = document.getElementById("slider_input").value;

    document.getElementById('Slider_Label').innerHTML = 'Number of cells: ' + n_cell;
    console.log(n_cell);
	for (let i = 0; i <= n_cell; i++) {
        a = (canvas.width/n_cell)*i;
	    b =	0;
	    c = (canvas.width/n_cell)*i;
	    d = canvasH;
        
        myFunction();
	    a = 0;
	    b =	(canvas.height/n_cell) * i;

	    c = canvasW;
	    d = (canvas.height/n_cell) * i;
	    myFunction()	
    }
}

