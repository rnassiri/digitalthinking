/*
CIS166AA - JavaScript
      Chapter 9
      Chapter case project

      JavaScript page to validate form on forecasting page. This page does check
	  for the email in the the regular expression has the @ symbol for a valid email.
      
      Author: Ramiss Nassiri
      Date:   11/24/2018

	  Filename: companyInfo.js
*/

//This function is used to check data inputted in by user
function checkInfo() 
{
	//variables needed for function to check that information given by user is valid.
	var validity = true;
	var mailing = document.getElementById("getEmail").value;
	var checkEmail = mailing.includes("@");
	var messageText = "";
	var infoComplete;
	
	try 
	{
		//if statement to check if checkEmail is false by looking for @symbol
		if(checkEmail === false) 
		{
			throw "Enter an email address with an \"@\" symbol.";
		} 
	} 
	
	catch(message) 
	{
		messageText = message;
	}
	
	finally 
	{
		//checks if email has been set to false to check validity of email
		if(checkEmail === false) 
		{
			//set validity to false so infoGather doesnt run
			validity = false;
		}
		document.getElementById("companyEmail").innerHTML =  messageText;
		//see if infoGather should run
		if(validity === true) 
		{
		infoGather();
		}
	}
	
	
}


//This function gathers company contact information given by user to be displayed to page.
function infoGather() 
{
	var name = document.getElementById("getName").value;
	var mailing = document.getElementById("getEmail").value;
	var phone = document.getElementById("getNum").value;
	var xp = document.getElementById("getFax").value;
	
	document.getElementById("companyName").innerHTML = name;
	document.getElementById("companyEmail").innerHTML =  mailing; 
	document.getElementById("companyNumber").innerHTML = phone;
	document.getElementById("companyFax").innerHTML =  xp; 
	
}

//This function carries out the event that when buttion is clicked information is displayed to the page.
document.addEventListener("onclick", checkInfo, false);