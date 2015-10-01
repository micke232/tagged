var playerOne = false;
var playerTwo = false;

$("#playerOne").on("click", function(){
	$(this).hide();
	$("#playerTwo").hide();
	playerOne = true;
});

$("#playerTwo").on("click", function(){
	$(this).hide();
	$("#playerOne").hide();
	playerTwo = true;
});
