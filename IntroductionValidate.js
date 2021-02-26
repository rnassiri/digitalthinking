/*
CIS166AA - JavaScript
      Chapter 11
      Chapter case project

      JavaScript page to validate form on introduction web page.
      
      Author: Ramiss Nassiri
      Date:   12/01/2018

	  Filename: introductionValidate.js
*/
"use strict";
//Used the guidelines as instructed in the book to use strict mode.

//Variables used to check for valid information using regular expressions.
var formValidity = true;
var specialChar = /[\#%^!*|\":<>[\]{}`\\()';@&$]/;

//Function runs to see if informaton received from form is valid input. 
function runValidate() 
{
	//Gather infromation from form to check variables.
	var NameInfo = document.getElementById("name2");
	var stateInfo = document.getElementById("state2");
	var companyInfo = document.getElementById("company2");
	var errorList = document.getElementById("errorText");
	
	//Checks variables for valid input.
	if(NameInfo != "") 
	{
		NameInfo.innerHTML = "Your company name: ";
	}
	
	if(stateInfo != "") 
	{
		stateInfo.innerHTML = "Your company state: ";
	}
	
	if(companyInfo != "") 
	{
		companyInfo.innerHTML = "Your type of company: ";
	}
	errorList.innerHTML = "";
	
	checkFields();
}

//Functions checks input from text boxes to make sure user inputs valid input.
function checkFields() 
{
	//Variables to check to see if user inputted valid information.
	var Name = document.myInfoForm.name.value;
	var state = document.myInfoForm.state.value;
	var carMake = document.getElementById("company").value;
	var errorList = document.getElementById("errorText");
	//I added this regular expression to make sure user inputs only letters in field boxes. 
	var regExp = /^[a-zA-Z]#/;
	
	//Used try-catch to make sure user inputted valid information in text boxes.
	try {
			if(Name == "" || specialChar.test(Name) || regExp.test(Name)) 
			{
				throw "Please fill in the name entry with correct characters.";
				formValidity = false;
			} 
			else 
			{
				document.getElementById("name2").innerHTML += Name;
			}
			if(state == "" || specialChar.test(state) || regExp.test(Name)) 
			{
				throw "Please fill in the state entry with correct characters.";
				formValidity = false;
			} 
			else 
			{
				document.getElementById("state2").innerHTML += state;
			}
			if(carMake == "") 
			{
				throw "Please choose a car make.";
				formValidity = false;
			} 
			else 
			{
				document.getElementById("company2").innerHTML += carMake;
			}
		}
	catch(msg) {
			errorList.innerHTML = msg;
	} 
}


