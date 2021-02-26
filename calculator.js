//This is to implement my javascript implementation calculating two numbers at my index page -->

/*
			CIS166AA - JavaScript
			Chapter 9
			Chapter case project
			
			Digital Thinking Webpage
			Updated caculator Javascript page with try catch and input validation using regular expressions
			to verify user only inputs numbers into calculator.

			Author: Ramiss Nassiri-Sheijani
			Date: 11/24/2018
*/

	
//Call the two click functions to muliply and divide the numbers
	document.getElementById("multiply").onclick = multiplyBy;
	document.getElementById("divide").onclick = divideBy;
	document.getElementById("subtract").onclick = subtractBy;
	document.getElementById("add").onclick = addBy;

//This function multiplies the two numbers inputted by the user. 
		function multiplyBy()
		{
			//variable to hold regular expression to test that user inputs only numbers.
			var regExp = /\d{1,15}/;
			try 
			{
				num1 = document.getElementById("firstNumber").value;
				num2 = document.getElementById("secondNumber").value;
				if ((!num1.match(regExp)) || (!num2.match(regExp)))
				{
					throw "Calculator only takes numbers up to 15 digits."
				}
			}
			catch(muliplyError)
			{
				window.alert(muliplyError)		
			}
			finally
			{
				document.getElementById("result").innerHTML = num1 * num2;
			}
		}

//This function divides the two numbers inputted by the user.-
		function divideBy() 
		{ 
			//variable to hold regular expression to test that user inputs only numbers.
			var regExp = /\d{1,15}/;
			try
			{
			num1 = document.getElementById("firstNumber").value;
			num2 = document.getElementById("secondNumber").value;
				if ((!num1.match(regExp)) || (!num2.match(regExp)))
				{
					throw "Calculator only takes numbers up to 15 digits."
				}
			}
			catch(DivideError)
			{
				window.alert(DivideError)		
			}
			finally
			{
			document.getElementById("result").innerHTML = num1 / num2;
			}
		}

//This function multiplies the two numbers inputted by the user. 
		function subtractBy()
		{
			//variable to hold regular expression to test that user inputs only numbers.
			var regExp = /\d{1,15}/;
			try 
			{
				num1 = document.getElementById("firstNumber").value;
				num2 = document.getElementById("secondNumber").value;
				if ((!num1.match(regExp)) || (!num2.match(regExp)))
				{
					throw "Calculator only takes numbers up to 15 digits."
				}
			}
			catch(muliplyError)
			{
				window.alert(subtractError)		
			}
			finally
			{
				document.getElementById("result").innerHTML = num1 - num2;
			}
		}

//This function multiplies the two numbers inputted by the user. 
		function addBy()
		{
			//variable to hold regular expression to test that user inputs only numbers.
			var regExp = /\d{1,15}/;
			try 
			{
				num1 = document.getElementById("firstNumber").value;
				num2 = document.getElementById("secondNumber").value;
				if ((!num1.match(regExp)) || (!num2.match(regExp)))
				{
					throw "Calculator only takes numbers up to 15 digits."
				}
			}
			catch(muliplyError)
			{
				window.alert(addError)		
			}
			finally
			{
				document.getElementById("result").innerHTML = +num1 + +num2;
			}
		}