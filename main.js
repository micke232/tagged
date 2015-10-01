/* ====== CANVAS STUFF ===== */

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var reqAnimFrame = window.requestAnimationFrame;

reqAnimFrame(update);       //60 fps up in this



/*======== PLAYERS ===========*/

var player1 = {

    x : 0,
    y : 0,
    width : 50,
    height : 50,
    color: "blue",
    picked: false
};

var player2 = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: "red",
    picked: false

};


/* ====== CANVAS UPDATE FUNCTION ===== */

function update(){          //Draws/animates the canvas

    context.clearRect(0, 0, 600, 600);
    context.beginPath();
    context.fillStyle = player1.color;
    context.arc(player1.x, player1.y, player1.r, player1.sAngle, player1.eAngle);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(player2.x, player2.y, player2.r, player2.sAngle, player2.eAngle);
    context.fillStyle = player2.color;
    context.fill();
    context.closePath();

    if((player2.x - player1.x) > (player2.r + player1.r) && (player2.y - player1.y) > (player2.r + player1.r) ){
        console.log("HEJSAN!");
    }


	reqAnimFrame(update);
}


/*======== CONTROLS ETC ========*/
window.addEventListener("keydown", function(e){         //controls

	if(e.keyCode == 37){
		//vänster
		if (player1.x > 0) player1.x -= 5;
	}
	if(e.keyCode == 38){
		//upp
		if (player1.y > 0) player1.y -= 5;
	}
	if(e.keyCode == 39){
		//höger
		if (player1.x < 550) player1.x += 5;
	}
	if(e.keyCode == 40){
		//ner
		if (player1.y < 550) player1.y += 5;
	}
});


