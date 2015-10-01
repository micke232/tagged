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
    color: "blue"
};

var player2 = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: "red"
};


/* ====== CANVAS UPDATE FUNCTION ===== */

function update(){          //Draws/animates the canvas
    context.clearRect(0, 0, 600, 600);
    context.fillStyle = player1.color;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    reqAnimFrame(update);
}





/*======== CONTROLS ETC ========*/
window.addEventListener("keydown", function(e){         //controls

    if(e.keyCode == 37){
        //vänster
        player1.x -= 5;
    }
    if(e.keyCode == 38){
        //upp
        player1.y -= 5;
    }
    if(e.keyCode == 39){
        //höger
        player1.x += 5;
    }
    if(e.keyCode == 40){
        //ner
        player1.y += 5;
    }
});


