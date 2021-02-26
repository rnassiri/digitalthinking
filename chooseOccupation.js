//This is to implement my javascript implementation for module 3
/*
			CIS166AA - JavaScript
			Chapter 1 
			Chapter case project
			
			Digital Thinking Webpage

			Author: Ramiss Nassiri-Sheijani
			Date: 11/02/2018
*/

window.addEventListener("load", setupevents);

//This sets up the event for the user to get a salary for a chose occupation.
function setupevents()
{
	document.getElementById("occupation").onchange = getSalary;
}

//This event shows the user in the results the salary for the occupation chosen
//from down menu.
function getSalary()
{
		theirchoice = document.getElementById('occupation').value;
		switch(theirchoice)
		{
			case "sysadmin":
			salary = 79700;
			break;
			case "dbaadmin":
			salary = 84950;
			break;
			case "Webdev":
			salary = 66130;
			break;
			case "CompSpecialist":
			salary = 52160;
			break;
			case "Programmer":
			salary = 79840;
			break;
			default:
			salary="you need to choose an occupation";
			break;
		}
		document.getElementById('salary').value = salary;
}