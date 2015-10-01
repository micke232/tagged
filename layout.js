$("#playerOne").on("click", function(){
	$(this).hide();
	$("#playerTwo").hide();
	player1.picked = true;
});

$("#playerTwo").on("click", function(){
	$(this).hide();
	$("#playerOne").hide();
	player2.picked = true;
});
