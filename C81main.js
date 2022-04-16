canvas = document.getElementById("myCanvas");
color = "black";

ctx= canvas.getcontext("2d");
ctx.beginpath();
ctx.strokestyle = color;
ctx.linewidth = 2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console.log("X = " + mouse_x + ", Y = " + mouse_y);
circle(mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y)
{
    ctx.beginpath();
    ctx.strokestyle = color;
    ctx.linewidth = 2;
    ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
    ctx.stroke();
}
