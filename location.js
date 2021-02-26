/*
			CIS166AA - JavaScript
			Chapter 10
			Chapter case project
			
			Updated security webpage including location

			Author: Ramiss Nassiri-Sheijani
			Date: 11/24/2018
		*/

//Need a variable to test for user to get response for allowing to get information from user to map location.
var waitForUser;

//This function waits to see if user gives map permission to map their location.
function geoTest() 
{
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000})
	} 
	else 
	{
		fail();
	}
}

//This function creates map to show the user's location based on their current geo location. I zoomed in at the map 
// at 15 so location would be clearly visible based on their current sorroundings in their geographic location.	
function createMap(position) 
{
	clearTimeout(waitForUser);
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var currPosAlt = position.coords.altitude;
	var altAccur = position.coords.altitudeAccuracy;
	var mapOptions =
	{ center: new google.maps.LatLng(currPosLat, currPosLng), 
		zoom: 15
	};
	var map =  new google.maps.Map(document.getElementById("map"), mapOptions);
	document.getElementById("lat").innerHTML = currPosLat;
	document.getElementById("lng").innerHTML = currPosLng;
	document.getElementById("alt").innerHTML = currPosAlt;
}

//This function loads in the scenario the map fails to show the user's location based on their geolocation.	
function fail() 
{
	//console.log("Geolocation info not availaible or not allowed.");
	document.getElementById("map").innerHTML = "Unable to set location.";
	
}

//Usual add eventisteners to get the functions to interact and respond.
if (window.addEventListener) {
	window.addEventListener("load", geoTest, false);
} else if (window.attachEvent) {
	window.attachEvent("onclick", geoTest);
}