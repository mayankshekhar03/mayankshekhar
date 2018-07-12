$(document).ready(function(){
	datetoday = new Date();
	timenow=datetoday.getTime();
	datetoday.setTime(timenow);
	thehour = datetoday.getHours();
	if (thehour > 16 && thehour <= 20) display = "Good Evening!";
	else if (thehour > 11 && thehour <= 16) display = "Good Afternoon!";
	else if (thehour > 03 && thehour <= 11) display = "Good Morning!";
	else if (thehour > 23 && thehour <= 03) display = "Sleep is essential for a person’s health and wellbeing.";
	else display = "Good night!";
	//document.write(greeting);
	$("#greeting").append(display);

});