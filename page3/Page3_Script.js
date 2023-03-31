let a;
let b;
let c;
let d;

function Create_Canvas() {
    console.log("Ready");
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#3e3e42";
	ctx.fillRect(0, 0, 400, 300);
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
   
    e= document.getElementById("aTextBox11").value;
    e = Number(e);

    d = document.getElementById("aTextBox12").value;
    d = Number(d);
    console.log(a)
    Rectangle()
}


function grid() {
	for (let i = 0; i < 5; i++) {
	a = 100*i
	b =	0
	c = 100*i
	d = 500
    myFunction()
	a = 000
	b =	100 *i
	c = 500 
	d = 100 *i
	myFunction()	
}
}


function Canvas_Position() {
  document.getElementById("demo").innerHTML = "Hello World";
}


document.getElementById("myCanvas").addEventListener("click", function() {alert("Hello World!");
});