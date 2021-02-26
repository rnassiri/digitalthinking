/*
CIS166AA - JavaScript
      Chapter 6
      Chapter case project

      JavaScript page to validate form on forecasting page.
      
      Author: Ramiss Nassiri
      Date:   12/04/2018

	  Revised file using jquery as instructed by chapter case assigment.
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

// Since this assignment called for me to revise a function I decided to keep it simple to meet the requirements
// of the case project by revising my function. I have no experience with Jquery so I made the revisions as instructed.
// I replaced two selectors in my radioValidation with Jquery. I also used Jquery to make the CSS change for the error when an indicator 
// isn't chosen.
function radioValidation() {    
    //var userError = document.querySelector("#checkGroup .errorMessage");
    var userError = $("#checkGroup .errorMessage");
    var fieldsetValidityCheck = false;
    var indicator = document.getElementsByName("Indicator");
	//var indicator = $('[name="Indicator"]');
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
            //userError.style.display = "none";
			userError.css("display","none")
        }        
    }
    catch (msg) {
        //userError.style.display = "block";
		userError.css("display","none")
        userError.innerHTML = msg;
        formValidityCheck = false;
    }
		}

// Now, test validity of the option selectors
// To meet the requirements of the case project I revised both my functions using jquery so I would 
// meet the requirements of getting three selectors by rewriting three more selectors in this function.
// I also rewrote the CSS changes made for the error by using JQuery.
function selectorsValidation() {
    //var selectorElements = document.querySelectorAll("#dropdownfield select");
	var selectorElements = $("#dropdownfield select");
    //var userError = document.querySelectorAll("#dropdownfield .errorMessage")[0];
	var userError = $("#dropdownfield .errorMessage");
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
					//userError.style.display = "none";
					userError.css("display","none")
					userError.innerHTML = "";
			}
		
		} catch (msg) {
        //userError.style.display = "block";
		userError.css("display","block")
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
    selectorsValidation();
	
    if (formValidityCheck === true) {
        document.getElementById("errorLabel").innerHTML = "";
        document.getElementById("errorLabel").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else 
	{
        document.getElementById("errorLabel").innerHTML = "PPlease completely fill out the form for our consultants.";
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

/*
CIS166AA - JavaScript
      Chapter 6
      Chapter case project

      JavaScript page to validate form on forecasting page.
      
      Author: Ramiss Nassiri
      Date:   12/04/2018

	  Revised file using jquery as instructed by chapter case assigment.
	  Filename: validation.js
*/
"use strict";
//Used the guidelines as given in the example from the book with modifications.

// Since there are no errors before the user inputs any information this is assumed true until the user
// prove it false by putting in invalid information.
/*var formValidityCheck = true;

// first test the validity of the radio buttons. Make sure one is selected
// This function had to be updated to work correctly. Unlike the other methods
// I assumed fieldsetValidityCheck to be true until proven false.

// Since this assignment called for me to revise a function I decided to keep it simple to meet the requirements
// of the case project by revising my function. I have no experience with Jquery so I made the revisions as instructed.
// I replaced two selectors in my radioValidation with Jquery. 
function radioValidation() 
{    
    //var userError = document.querySelector("#checkGroup .errorMessage");
    var userError = $("#checkGroup .errorMessage");
    var fieldsetValidityCheck = false;
    var indicator = $('[name="Indicator"]');
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
            userError.css("display","none")
        } 
		else 
		{
            userError.style.display = "none";
        }        
    }
    catch (msg) {
        userError.css("display","block");
        userError.innerHTML = msg;
        formValidityCheck = false;
    }
		}

// Now, test validity of the option selectors
function selectorsValidation() {
    var selectorElements = $("#dropdownfield select");
    var userError = $("#dropdownfield .errorMessage");
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
			
			currentElement = $("#dropdownfield select");  
			
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
					userError.css("display","none")
					userError.innerHTML = "";
			}
		
		} catch (msg) {
        userError.css("display","block");
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
    selectorsValidation();
	
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
}*/