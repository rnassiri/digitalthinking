/*
CIS166AA - JavaScript
      Chapter 6
      Chapter case project

      JavaScript page to validate form on forecasting page.
      
      Author: Ramiss Nassiri
      Date:   11/17/2018

	  Filename: validation.js
*/
"use strict";
//Used the guidelines as given in the example from the book with modifications.

// Since there are no errors before the user inputs any information this is assumed true until the user
// prove it false by putting in invalid information.
var formValidityCheck = true;

// first test the validity of the radio buttons. Make sure one is selected
// This function had to be updated to work correctly. Unlike the other methods
// I assumed fieldsetValidityCheck to be true until proven false.
function radioValidation() {    
    var userError = document.querySelector("#radiogroup .errorMessage");
    var fieldsetValidityCheck = false;
    var indicator = document.getElementsByName("forecastingSelect");
	var i = 0;
	try {
			for(i=0; i < indicator.length; i++)
			{
				if(indicator[i].checked == true)
				{
					fieldsetValidityCheck = true;
				}
			}
        if (fieldsetValidityCheck===false) 
		{
            throw "Please select the indicator you would like to include in your forecast!";
        } 
		else 
		{
            userError.style.display = "none";
        }        
    }
    catch (msg) {
        userError.style.display = "block";
        userError.innerHTML = msg;
        formValidityCheck = false;
    }
		}

// Now, test validity of the option selectors
function selectorsValidation() {
    var selectorElements = document.querySelectorAll("#dropdownfield select");
    var userError = document.querySelectorAll("#dropdownfield .errorMessage")[0];
    var fieldsetValidityCheck = true;
    var elementCount = selectorElements.length;
    var currentElement;
    try {
			for (var i = 0; i < elementCount; i++) 
			{
				currentElement = selectorElements[i];
				if (currentElement.value === "") 
				{
					currentElement.style.background = "rgb(255,233,233)";
					currentElement.style.border = "3px solid red";
					fieldsetValidityCheck = false;
				} 
				
				else 
				{
					currentElement.style.background = "grey";
					currentElement.style.border = "";
				}
			}
			
			currentElement = document.querySelector("#dropdownfield select");  
			
			if (currentElement.selectedIndex === -1) 
			{
				currentElement.style.border = "4px solid red";
				fieldsetValidityCheck = false;
			}
			
			else 
			{
				currentElement.style.border = "";
			}
			
			if (fieldsetValidityCheck === false) 
			{            
			   throw "Please make a selection!";            
			} 
			
			else 
			{
					userError.style.display = "none";
					userError.innerHTML = "";
			}
		
		} catch (msg) {
        userError.style.display = "block";
        userError.innerHTML = msg;
        formValidityCheck = false;
    }
}

// Now I have to test for valid input in my text fields. This is the function that does that.
function textValidator() {
    var textElements = document.querySelectorAll("#companyfield input");
    var userError = document.querySelectorAll("#companyfield .errorMessage")[0];
	var tex = document.getElementById("billFName");
    var fieldsetValidityCheck = true;
    var elementCount = textElements.length;
    var currentElement;
	
	//These are the regular expressions I am using to test the user input. 
	//Fields only requiring letters.
	var regExp1 = /^[a-zA-Z]#/;
	//Fields allowing for numbers and letters.
	var regExp2 = /W/;
	//Zip restricted to 5 numbers.
	var zipPattern = /\d{5}/;
	//Restricted pattern for phone number.
	var phonePattern = /^(1)?(\([0-9]{3}\))?([1-9]{3})(\-[1-9]{4})$/;
	
    try 
	{
		for (var i = 0; i < elementCount; i++) 
		{
			currentElement = textElements[i];
			if (currentElement.value === "") 				
			{
				currentElement.style.background = "rgb(255,233,233)";
                currentElement.style.border = "2px solid red";
				fieldsetValidityCheck = false;
			} 
			else
			{
				currentElement.style.background = "grey";
				currentElement.style.border = "";				
			}
		} 		
		
		if (regExp1.test(document.getElementById("billFName")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid name!";
        }
		
		if (regExp2.test(document.getElementById("billStreet")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid street!";
        }
		
		if (regExp1.test(document.getElementById("billCity")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid city!";
        }
		
		if (regExp1.test(document.getElementById("billState")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid state!";
        }
		
			
		if (zipPattern.test(document.getElementById("billZip")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid zip code!";
        }

		if (phonePattern.test(document.getElementById("billPhone")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid phone number!";
        }
		
		if (regExp1.test(document.getElementById("TrademarkName")) === false) 
		{
            inputElements[0].style.background = "rgb(255,233,233)";
            inputElements[0].style.border = "3px solid red";
            throw "Please submit a valid trademark name!";
        }
		
		if (fieldsetValidityCheck === false) 
		{            
			throw "Please fill out all text fields!";            
		} 
		else 
		{
			userError.style.display = "none";
			userError.innerHTML = "";
		}
	} 
		catch (msg) 
		{        
        userError.style.display = "block";
        userError.innerHTML = msg;
        formValidityCheck = false;
		}
	}


// This is what I used to test my comment field at the end of the form.
function validateComment() {
    var comment = document.querySelector("#companyfield textarea");
    var userError = document.querySelector("#companyfield .errorMessage");
    var commentBox = document.getElementById("comment");
    try 
	{
        if (commentBox.value === "") 
		{
            comment.style.border = "4px solid red";
            comment.style.background = "rgb(255,233,233)";
            throw "Please enter a comment!";            
        } 
		else 
		{
            userError.style.display = "none";
            comment.style.border = "none";
            commentBox.style.background = "white";
        }
    }
    catch (msg) 
	{
        userError.style.display = "block";
        userError.innerHTML = msg;
        formValidityCheck = false;
    }
}
// This will be the result of what will happen to the form if nothing on the webpage is validated.
function validateForm(evt) 
{
    if (evt.preventDefault) 
	{
        evt.preventDefault();
    } 
	else 
	{
        evt.returnValue = false;
    }
	
	//functions used for validation
    formValidityCheck = true;
    radioValidation();
    textValidator();
    selectorsValidation();
    validateComment(); 
	
    if (formValidityCheck === true) {
        document.getElementById("errorLabel").innerHTML = "";
        document.getElementById("errorLabel").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else 
	{
        document.getElementById("errorLabel").innerHTML = "Please completely fill out the form for our consultants.";
        document.getElementById("errorLabel").style.display = "block";
        scroll(0, 0);          
    }
}

//This is to add the usual needed evenlisters for the form to validate.
var form = document.getElementsByTagName("form")[0];
if (form.addEventListener) 
{
    form.addEventListener("submit", validateForm, false);
} 
else if (form.attachEvent) 
{
    form.attachEvent("onsubmit", validateForm);
}

//This is an assistive function I used to prevent the user from erronously sending invalid data.
function removeSelectDefaults() {
    var emptyItem = document.getElementsByTagName("select");
    for (var i = 0; i < emptyItem.length; i++) {
        emptyItem[i].selectedIndex = -1;
    }
}

// This is the usual window listener event needed for the javascript file to load correctly.
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}