/*
CIS166AA - JavaScript
      Chapter 11
      Chapter case project

      JavaScript page to call for Weather API service to display on html page.
      
      Author: Ramiss Nassiri
      Date:   12/01/2018

	  Filename: ajaxService.js
*/
"use strict";
//Used the guidelines as instructed in the book to use strict mode.

//I used the function in jQuery although JQuery isn't talked about in the next chapter. Since I have 
//no experience in PHP I wanted to use an API that didn't require a proxy. I used the weather API to do that
//but needed the function used in JQuery which I researched at https://stackoverflow.com/questions/2937227/what-does-function-jquery-mean.
jQuery(document).ready
(function($) 
	{
	  $.ajax(
		  {
			  //I decided to keep this project simple by using a weather API to give weather information on my webpage.
			  url : "https://api.wunderground.com/api/514ffe25deababf8/geolookup/conditions/q/AZ/Phoenix.json",
			  //I did the request using JSON-P so I could avoid using code with PHP. Maybe I will take a class in that 
			  //next semester!
			  dataType : "jsonp",
			  //To use the data from the API I had to parse all the information into strings which I did with this function.
			  success : function(parsed_json) 
			  {
				  //This is the get all the necessary variables from the array of informaton given by the API 
				  //as well as teh values I need from the input given by user into my html.
				  var location = parsed_json['location']['city'];
				  var temp_f = parsed_json['current_observation']['temp_f'];
				  var wind_MPH = parsed_json['current_observation']['wind_mph'];
				  var windy = document.getElementById("theWind").value;
				  var theTemp = document.getElementById("yourTemp").value;
				  
				  //Nescessary variables to display weather information to user.
				  windy = wind_MPH;
				  theTemp = temp_f;
				  
				  //At first was thinking of using widows alert but realized that it would look more clear using inner html.
				  document.getElementById("yourTemp").innerHTML = theTemp + "F";
				  document.getElementById("theWind").innerHTML = windy;
				 // alert("Current temperature in " + location + " is: " + temp_f);
			  }
		  }
	  );
	}
);