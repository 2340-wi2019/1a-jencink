/*
Jen Cink
	 assignment2.htm
	 INFO2340.WW
	 Thoendel
	 12/15/19
*/

//I really struggled with this assignment. I also accidentally merged it onto my master first on GitHub. So this comment is to resubmit that pull request.

//Array to hold inputs
var madlib = [];

//Filling the array with user inputs
madlib[0] = prompt("Please enter a female name (1 of 2)");
madlib[1] = prompt("Please enter a female name.(2 of 2)");
madlib[2] = prompt("Please enter a male name.");
madlib[3] = prompt("Please enter a geographical feature.");
madlib[4] = prompt("Please enter the name of a state.");
madlib[5] = prompt("Please enter an occupation.");
madlib[6] = prompt("Please enter a noun.(1 of 5)");
madlib[7] = prompt("Please enter a noun.(2 of 5)");
madlib[8] = prompt("Please enter a noun.(3 of 5)");
madlib[9] = prompt("Please enter a noun.(4 of 5)");
madlib[10] = prompt("Please enter a noun(5 of 5)");
madlib[11] = prompt("Please enter a color.");

//Using the array to fill the span elements. 
$(document).ready(function($){
	$('#femOne0').html(madlib[0]);
	$('#femOne1').html(madlib[0]);
	$('#femOne2').html(madlib[0]);
	$('#femTwo0').html(madlib[1]);
	$('#femTwo1').html(madlib[1]);
	$('#male0').html(madlib[2]);
	$('#male1').html(madlib[2]);
	$('#geoFeat0').html(madlib[3]);
	$('#geoFeat1').html(madlib[3]);
	$('#state').html(madlib[4]);
	$('#occupation').html(madlib[5]);
	$('#nounOne').html(madlib[6]);
	$('#nounTwo').html(madlib[7]);
	$('#nounThree').html(madlib[8]);
	$('#nounFour').html(madlib[9]);
	$('#nounFive').html(madlib[10]);
	$("#color0").html(madlib[11]);
	$("#color1").html(madlib[11]);
	$("#color2").html(madlib[11]);
	$("#color3").html(madlib[11]);
});
