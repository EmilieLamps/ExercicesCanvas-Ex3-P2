var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Corps
ctx.fillStyle = "#976f0f"
ctx.fillRect(170, 130, 60, 100);

// Tête
ctx.beginPath();
ctx.fillStyle = "#976f0f"
ctx.arc(200, 100, 40, 0, 2*Math.PI);
ctx.fill();

// Bras
ctx.fillStyle = "#976f0f"
ctx.fillRect(115, 125, 170, 25);

// Jambe gauche
ctx.fillStyle = "#976f0f"
ctx.fillRect(170, 230, 25, 35);

// Jambe droite
ctx.fillStyle = "#976f0f"
ctx.fillRect(205, 230, 25, 35);

// Oeil gauche
ctx.beginPath();
ctx.fillStyle = "#FFFF"
ctx.arc(187, 92, 6, 0, 2*Math.PI);
ctx.fill();

// Oeil droit
ctx.beginPath();
ctx.fillStyle = "#FFFF"
ctx.arc(212, 92, 6, 0, 2*Math.PI);
ctx.fill();

// Premier bouton
ctx.beginPath();
ctx.fillStyle = "#7A2976"
ctx.arc(200, 160, 6, 0, 2*Math.PI);
ctx.fill();

// Deuxième bouton
ctx.beginPath();
ctx.fillStyle = "#7A2976"
ctx.arc(200, 185, 6, 0, 2*Math.PI);
ctx.fill();
