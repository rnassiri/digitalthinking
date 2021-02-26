/*

CIS166AA - JavaScript
      Chapter 7
      Chapter case project
      
      Author: Ramiss Nassiri-Sheijani
      Date:   11/18/2018

	  Filename: date.js
*/
"use strict";

// As I have some experience in object-oriented programming which is why I like to keep my variables declared in the same block.

//Variables I will need to get the difference between the dates.
var today = new Date();
var userDate = new Date();

//Variables I will need to hold the length of time.
var day;
var month;
var year;

//These are the variables that I will use to hold the length of time between the dates.
var yearLength;
var monthLength;
var dayLength;

//This is the function I used to give the age of user's company.
function date() {
    //This displays the current date.
    document.getElementById("todayDate").innerHTML = "Today: " + today;
	
	//This is to get all the needed values for the date to determine company's age.
    year = document.getElementById("companyYear").value;
    month = document.getElementById("companyMonth").value;
    day = document.getElementById("companyDay").value;
    userDate.setFullYear(year, month - 1, day);
	
	//This is to display the date the user gives for company.
    document.getElementById("companyDate").innerHTML = "Company's Launch Date: " + userDate;
    
	//This is to get the difference in the dates for company's age.
	//For all these I used the math absolute function to resolve using negative values.
    yearLength = Math.abs(today.getFullYear() - userDate.getFullYear());
    monthLength = Math.abs(today.getMonth() - userDate.getMonth());
    dayLength = Math.abs(today.getDate() - userDate.getDate());

	//This is to display the age of the user's company
    document.getElementById("companyAge").innerHTML = "Your Company is " + yearLength + " years old, " + monthLength + " months, and " + dayLength + " days.";
}
