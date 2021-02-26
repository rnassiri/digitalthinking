/*
CIS166AA - JavaScript
Chapter 8
Chapter case project

Using javascript to store values into an array from forecasting feedback page.
      
Author: Ramiss Nassiri
Date:   11/24/2018

Filename: array.js
*/
	
//Global variables
var indicators = [];
var arrayString;
var objectString;
var finalIndicators = {};
		
//This functions takes the values the users checks from the checkbox and puts
//them into an array. Also if the user unchecks the items the functions removes
//the values of the checkbox from the array.
function indicatorsSelect(event) 
{
	var callerElement = event.target || event.srcElement;
	var indicatorName = callerElement.value;
	if (callerElement.checked) 
	{
		//if box has been checked as checkbox value to arrary in indicators variable.
		indicators.push(indicatorName);
		//Converts value to a string.
		convertToString();
	} 
	else 
	{
		var listItems = document.getElementById("message");
		//If checkbox hasn't been checked then removes the value from the array.
		for (var i = 0; i < indicators.length; i++) 
		{
			if (indicators[i] === indicatorName) 
			{
				indicators.splice(i, 1);
				break;
			} 
		} 
		convertToString()
	}
}
		
//Converts input from form to string to submit for display to the user.
function convertToString() 
{
	//Converts indicators into an array of strings.
	arrayString = indicators.toString();
	//Converts the array of strings into a profile object.
	objectString = JSON.stringify(finalIndicators);
	//Displays form into into a message to be displayed on web page to user.		
	var endMessage = document.getElementById("message");
	endMessage.innerHTML = arrayString;
}
		
function resetForm() 
{
	createEventListeners();
}
		
//creates event listeners
function createEventListeners()
{
	var indicators = document.getElementsByName("Indicator");
	if (indicators[0].addEventListener) 
	{
		for(var i = 0; i < indicators.length; i++) 
		{
			indicators[i].addEventListener("change", indicatorsSelect, false);
		}
	} 
	
	else if (indicators.attachEvent) 
	{
		for(var i = 0; i <indicators.length; i++) 
		{
			indicators[i].attachEvent("onchange", indicatorsSelect);
		}
	} 
}
		
window.addEventListener("load", createEventListeners, false);
		
		
	
	

	
	
	
	
	
	