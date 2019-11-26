var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Corps
ctx.fillStyle = "#976f0f"
ctx.fillRect(169, 130, 62, 100);

// Tête
ctx.beginPath();
ctx.fillStyle = "#976f0f"
ctx.arc(200, 100, 40, 0, 2*Math.PI);
ctx.fill();

// Bras
ctx.beginPath();
ctx.strokeStyle = "#976f0f"
ctx.moveTo(130,140);
ctx.lineTo(275,140);
ctx.lineWidth = 25;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

// Arrondi
ctx.beginPath();
ctx.strokeStyle = "#FFFF"
ctx.moveTo(200,225);
ctx.lineTo(200,230);
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

// Jambe gauche
ctx.beginPath();
ctx.strokeStyle = "#976f0f"
ctx.moveTo(182,260);
ctx.lineTo(182,230);
ctx.lineWidth = 26;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

// Jambe droite
ctx.beginPath();
ctx.strokeStyle = "#976f0f"
ctx.moveTo(218,260);
ctx.lineTo(218,230);
ctx.lineWidth = 26;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

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

// Sourcil gauche


// Sourcil droite

// Bouche
