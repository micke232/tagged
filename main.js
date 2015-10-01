/* ====== CANVAS STUFF ===== */

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var reqAnimFrame = window.requestAnimationFrame;

reqAnimFrame(update);       //60 fps up in this



/*======== PLAYERS ===========*/

var player1 = {
	x: 100,
	y: 100,
	radius: 50,
	sAngle: 0,
	eAngle: 75,
	color: "blue",
	picked: false
};

var player2 = {
	x: 300,
	y: 300,
	radius: 50,
	sAngle: 0,
	eAngle: 75,
	color: "red",
	picked: false

};
var distance;
var tagged = false;
/* ====== CANVAS UPDATE FUNCTION ===== */

function update(){          //Draws/animates the canvas

	context.clearRect(0, 0, 600, 600);
	context.beginPath();
	context.fillStyle = player1.color;
	context.arc(player1.x, player1.y, player1.radius, player1.sAngle, player1.eAngle);
	context.fill();
	context.closePath();

	context.beginPath();
	context.arc(player2.x, player2.y, player2.radius, player2.sAngle, player2.eAngle);
	context.fillStyle = player2.color;
	context.fill();
	context.closePath();

	distance = Math.sqrt(
		((player1.x - player2.x) * (player1.x - player2.x)) + ((player1.y - player2.y) * (player1.y - player2.y))
	);

	if (distance < player1.radius + player2.radius){
		if (!tagged){
			console.log("tagged!");
			alert("TAGGED!");
			tagged = true;
		};
	};

	reqAnimFrame(update);
}


/*======== CONTROLS ETC ========*/
window.addEventListener("keydown", function(e){         //controls

	if(e.keyCode == 37){
		//vänster
		if (player1.x > 50) player1.x -= 10;
	}
	if(e.keyCode == 38){
		//upp
		if (player1.y > 50) player1.y -= 10;
	}
	if(e.keyCode == 39){
		//höger
		if (player1.x < 600) player1.x += 10;
	}
	if(e.keyCode == 40){
		//ner
		if (player1.y < 600) player1.y += 10;
	}
});


